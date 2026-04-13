"use client";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  FormControl,
  Row,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setCourses } from "../courses/reducer";
import {
  addNewEnrollment,
  deleteEnrollment,
} from "../courses/(enrollments)/reducer";
import * as client from "../courses/client";

export default function Dashboard() {
  const { courses: usersCourses } = useSelector(
    (state: RootState) => state.coursesReducer,
  );
  const [allCourses, setAllCourses] = useState<any>([]);

  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer,
  );

  const isFaculty = currentUser?.role === "FACULTY";

  const [showEnrollments, setShowEnrollments] = useState(false);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const fetchCourses = async () => {
    try {
      const usersCourses = await client.findMyCourses();
      const allCourses = await client.fetchAllCourses();
      dispatch(setCourses(usersCourses));
      setAllCourses(allCourses);
    } catch (error) {
      // silent catch
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...usersCourses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(
      setCourses(usersCourses.filter((course: any) => course._id !== courseId)),
    );
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        usersCourses.map((c: any) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        }),
      ),
    );
  };

  const courses = showEnrollments ? allCourses : usersCourses;

  const createNewEnrollment = async (userId: string, courseId: string) => {
    await client.enrollIntoCourse(userId, courseId);
    dispatch(addNewEnrollment({ user: userId, course: courseId }));
    await fetchCourses();
  };

  const removeEnrollment = async (userId: string, courseId: string) => {
    await client.unenrollFromCourse(userId, courseId);
    dispatch(deleteEnrollment({ user: userId, course: courseId }));
    await fetchCourses();
  };

  const handleSubmitEnrollment = async (
    isEnrolled: boolean,
    courseId: string,
  ) => {
    if (!currentUser) return;

    isEnrolled
      ? await removeEnrollment(currentUser._id, courseId)
      : await createNewEnrollment(currentUser._id, courseId);
  };

  return (
    <div id="wd-dashboard">
      <div className="d-flex align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button
          className="btn btn-primary ms-auto"
          id="wd-add-new-course-click"
          onClick={() => setShowEnrollments(!showEnrollments)}
        >
          Enrollments
        </button>
      </div>
      <hr />
      {isFaculty && (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </div>
      )}
      <h2 id="wd-dashboard-published">
        {showEnrollments
          ? `All Courses (${allCourses.length})`
          : `Your Courses (${usersCourses.length})`}
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => {
            const isEnrolled = usersCourses.some(
              (c: any) => c._id === course._id,
            );
            return (
              <Col
                key={`wd-dashboard-course-${course._id}`}
                style={{ width: "300px" }}
              >
                <Card>
                  <Link
                    href={`/courses/${course._id}/home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <CardImg
                      src={course.image}
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <CardBody className="card-body">
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </CardTitle>
                      <CardText
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </CardText>
                      <div className="d-flex align-items-center gap-2 flex-wrap">
                        <Button variant="primary">Go</Button>
                        {showEnrollments && (
                          <Button
                            variant="secondary"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubmitEnrollment(isEnrolled, course._id);
                            }}
                          >
                            {isEnrolled ? "Unenroll" : "Enroll"}
                          </Button>
                        )}
                        {isFaculty && (
                          <>
                            <Button
                              variant="warning"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="danger"
                              onClick={(event) => {
                                event.preventDefault();
                                onDeleteCourse(course._id);
                              }}
                            >
                              Delete
                            </Button>
                          </>
                        )}
                      </div>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
