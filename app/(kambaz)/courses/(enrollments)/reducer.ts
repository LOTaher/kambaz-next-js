import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addNewEnrollment: (state, { payload: enrollment }) => {
      const newEnrollments = { ...enrollment, _id: uuidv4() };
      state.enrollments = [...state.enrollments, newEnrollments];
    },
    deleteEnrollment: (state, { payload }) => {
      const { user, course } = payload;
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === user && e.course === course),
      );
    },
  },
});
export const { addNewEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
