import { CoursesActionTypes } from './courses/types';
import { QuestionActionTypes } from './question/types';
import { UserActionTypes } from './user/types';

type ApplicationActionTypes = CoursesActionTypes | QuestionActionTypes | UserActionTypes;

export default ApplicationActionTypes;
