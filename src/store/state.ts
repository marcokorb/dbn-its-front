import { CoursesState } from './ducks/courses/types';
import { QuestionState } from './ducks/question/types';
import { UserState } from './ducks/user/types';

export interface ApplicationState {
  courses: CoursesState;
  question: QuestionState;
  user: UserState;
}
