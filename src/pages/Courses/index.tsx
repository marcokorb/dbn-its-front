import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListSubheader from '@material-ui/core/ListSubheader';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

import { fetchCourses } from '../../store/ducks/courses/actions';
import { getCourses } from '../../store/ducks/courses/selectors';
import { CourseState } from '../../store/ducks/courses/types';
import { ApplicationState } from '../../store/state';

import { useStyles }  from './styles';

type DispatchProps = {
  fetchCourses(): void;
};

type StateProps = {
  courses: [CourseState]
};

type Props = DispatchProps & StateProps;

const Courses: React.FC<Props> = ({ courses, fetchCourses }: Props) => {

  let history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    fetchCourses();
  }, []);

  const startCourse = (courseId: number) => {
    history.push(`/questions/${courseId}`);
  }

  return (
    <Container maxWidth="sm" className={classes.root}>
      <List subheader={<ListSubheader>Cursos</ListSubheader>}>

        {courses.map((course: CourseState) => {
          return (
            <ListItem key={course.pk}>
              <ListItemText primary={`${course.name}`} />
              <ListItemSecondaryAction>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
                onClick={() => startCourse(course.pk)}
              >
                Iniciar
              </Button>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      
      </List>
    </Container>
  );
}

const mapStateToProps = (state: ApplicationState) => ({ 
  courses: getCourses(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({ fetchCourses }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
