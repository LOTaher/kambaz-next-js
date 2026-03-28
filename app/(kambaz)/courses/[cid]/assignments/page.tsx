"use client";

import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentsControlButtons from "./AssignmentControlButtons";
import { MdAssignment } from "react-icons/md";
import { FaCaretDown, FaPlus } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { IoEllipsisVertical } from "react-icons/io5";
import { setAssignments } from "./reducer";
import { useEffect } from "react";
import * as client from "../../client";

const formatDate = (date: string) => {
    const dateObject = new Date(date);
    return dateObject.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
    });
};

export default function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const { assignments } = useSelector(
        (state: RootState) => state.assignmentsReducer,
    );
    const { currentUser } = useSelector(
        (state: RootState) => state.accountReducer,
    );
    const isFaculty = currentUser?.role === "FACULTY";

    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };

    useEffect(() => {
        fetchAssignments();
    }, []);

    const onRemoveAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(
            setAssignments(assignments.filter((a: any) => a._id !== assignmentId)),
        );
    };

    return (
        <div id="wd-assignments">
            <AssignmentControls />
            <br />
            <br />
            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroupItem className="wd-assignments-title p-0 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <BsGripVertical className="fs-3" />
                            <FaCaretDown />
                            ASSIGNMENTS
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <span className="badge rounded-pill border border-dark text-dark bg-transparent px-3 py-2">
                                40% of Total
                            </span>
                            {isFaculty && <FaPlus />}
                            <IoEllipsisVertical className="fs-4" />
                        </div>
                    </div>
                </ListGroupItem>
                {assignments.map((assignment) => {
                    return (
                        <ListGroupItem
                            className={"p-3 wd-assignment"}
                            key={`assignment-${assignment._id}`}
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdAssignment className="me-4 fs-3 text-success" />
                                    {isFaculty ? (
                                        <Link
                                            href={`/courses/${cid}/assignments/${assignment._id}`}
                                            className="text-decoration-none text-black"
                                        >
                                            <div className="d-flex flex-column">
                                                <strong>{assignment.title}</strong>
                                                <span>
                                                    <span className="text-danger">Multiple Modules </span>
                                                    | <strong>Not available until </strong>
                                                    {formatDate(assignment.availableDate)} |
                                                    <strong> Due </strong>
                                                    {formatDate(assignment.dueDate)} | {assignment.points}
                                                    pts
                                                </span>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="d-flex flex-column">
                                            <strong>{assignment.title}</strong>
                                            <span>
                                                <span className="text-danger">Multiple Modules</span>|{" "}
                                                <strong>Not available until</strong>
                                                {formatDate(assignment.availableDate)} |
                                                <strong>Due</strong> {formatDate(assignment.dueDate)}|
                                                {assignment.points}pts
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <AssignmentsControlButtons
                                    isFaculty={isFaculty}
                                    assignmentId={assignment._id}
                                    deleteAssignment={onRemoveAssignment}
                                />
                            </div>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
        </div>
    );
}
