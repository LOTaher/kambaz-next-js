import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  enrollments: [] as any[],
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addNewEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = [...state.enrollments, enrollment];
    },
    deleteEnrollment: (state, { payload }) => {
      const { user, course } = payload;
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === user && e.course === course),
      );
    },
    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
    },
  },
});
export const { addNewEnrollment, deleteEnrollment, setEnrollments } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
