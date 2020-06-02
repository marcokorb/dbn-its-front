import React, { useEffect, useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { answerQuestion, getQuestion } from '../../store/ducks/question/actions';
import { getQuestionState } from '../../store/ducks/question/selectors';
import { AlternativeState, AnswerSubmitState, QuestionState } from '../../store/ducks/question/types';
import { ApplicationState } from '../../store/state';

import { useStyles } from './styles';

type DispatchProps = {
  answerQuestion(courseId: number, data: AnswerSubmitState): void;
  getQuestion(courseId: number): void;
};

type StateProps = {
  question: QuestionState
};

type Props = DispatchProps & StateProps;

const Questions: React.FC<Props> = ({ answerQuestion, getQuestion, question }: Props) => {

  let { courseId } = useParams();
  const classes = useStyles();

  const [alternativeId, setAlternativeId] = useState('');

  useEffect(() => {
    getQuestion(courseId);
  }, []);

  const onAlternativeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlternativeId(event.target.value);
  }

  const submitAlternative = () => {
    answerQuestion(
      courseId,
      {
        alternativeId: alternativeId,
        questionId: question.pk,
      }
    );
  }

  return (
    <Container maxWidth="sm">
      <FormControl component="fieldset">          
        <FormLabel component="legend">QUESTÃO {question.number}</FormLabel>
        <div className={classes.content}>{question.content}</div>
        
        <RadioGroup
          aria-label="Alternatives"
          name="alternatives"
          value={`${alternativeId}`}
          onChange={onAlternativeChange}
        >
          {question.alternatives.map((alternative: AlternativeState) => {
            return(
              <FormControlLabel
                key={alternative.pk}
                value={`${alternative.pk}`}
                control={<Radio />}
                label={`${alternative.content}${alternative.status ? '(Certa)' : ''}`}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={submitAlternative}>
        Enviar
      </Button>
    </Container>
  );
}

const mapStateToProps = (state: ApplicationState) => ({ 
  question: getQuestionState(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({ answerQuestion, getQuestion }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
