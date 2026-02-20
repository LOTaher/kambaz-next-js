"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import * as db from "../../../database";
import LessonControlButtons from "../modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import AssignmentsControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

    return (
        <div>
            <AssignmentsControlButtons />
            <div id="wd-assignments">
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
                                <AssignmentControls />
                            </div>
                        </div>
                    </ListGroupItem>
                    {assignments
                        .filter((a) => a.course === cid)
                        .map((a) => (
                            <ListGroupItem key={a._id} className="p-3 wd-assignment">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <MdAssignment className="me-4 fs-3 text-success" />
                                        <Link
                                            href={`/courses/${cid}/assignments/${a._id}`}
                                            className="text-decoration-none text-black"
                                        >
                                            <div className="d-flex flex-column">
                                                <strong>{a.title}</strong>
                                                <span>
                                                    <span className="text-danger">Multiple Modules</span> |{" "}
                                                    <strong>Not available until</strong> {a.availableFrom} |{" "}
                                                    <strong>Due</strong> {a.dueDate} | {a.points} pts
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <LessonControlButtons />
                                </div>
                            </ListGroupItem>
                        ))}
                </ListGroup>
            </div>
        </div>
    );
}
