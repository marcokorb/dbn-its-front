import { createSelector } from "reselect";

import { ApplicationState } from "../../state";

const geCoursesState = (state: ApplicationState) => state.courses;

export const getCourses = createSelector(geCoursesState, ({ items }) => items);
