import React, { useEffect, useState } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Skeleton from '@material-ui/lab/Skeleton';

import {
  answerQuestion,
  getQuestion,
} from "../../store/ducks/question/actions";
import {
  getQuestionDetailState,
  getQuestionFetchingState,
  getQuestionNumberState,
} from "../../store/ducks/question/selectors";
import {
  AlternativeState,
  AnswerSubmitState,
  QuestionDetailState,
} from "../../store/ducks/question/types";
import { ApplicationState } from "../../store/state";

import { useStyles } from "./styles";

type QuestionParams = {
  courseId: string;
};

type DispatchProps = {
  answerQuestion(courseId: string, data: AnswerSubmitState): void;
  getQuestion(courseId: string): void;
};

type StateProps = {
  question: QuestionDetailState;
  questionFetching: boolean;
  questionNumber: number;
};

type Props = DispatchProps & StateProps;

const Questions: React.FC<Props> = ({
  answerQuestion,
  getQuestion,
  question,
  questionFetching,
  questionNumber,
}: Props) => {
  let { courseId } = useParams<QuestionParams>();
  const classes = useStyles();

  const [alternativeId, setAlternativeId] = useState("");

  useEffect(() => {
    getQuestion(courseId);
  }, [getQuestion, courseId]);

  const onAlternativeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlternativeId(event.target.value);
  };

  const submitAlternative = () => {
    answerQuestion(courseId, {
      alternativeId: alternativeId,
      questionId: question.pk,
    });
  };

  return (
    <Container maxWidth="sm">
      {questionFetching ? (
        <>
          <Skeleton width="20%" height={40} />
          <Skeleton variant="rect" height={40} />
          <Skeleton width="40%"/>
          <Skeleton width="40%"/>
          <Skeleton width="40%"/>
          <Skeleton width="40%"/>
          <Skeleton width="20%"/>
        </>
      ) : (
        <>
          <FormControl component="fieldset">
            <FormLabel component="legend">QUESTÃO {questionNumber}</FormLabel>
            <div className={classes.content}>{question.content}</div>

            <RadioGroup
              aria-label="Alternatives"
              name="alternatives"
              value={`${alternativeId}`}
              onChange={onAlternativeChange}
            >
              {question.alternatives.map((alternative: AlternativeState) => {
                return (
                  <FormControlLabel
                    key={alternative.pk}
                    value={`${alternative.pk}`}
                    control={<Radio />}
                    label={`${alternative.content}${
                      alternative.status ? "(Certa)" : ""
                    }`}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={submitAlternative}
          >
            Enviar
          </Button>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  question: getQuestionDetailState(state),
  questionFetching: getQuestionFetchingState(state),
  questionNumber: getQuestionNumberState(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ answerQuestion, getQuestion }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
