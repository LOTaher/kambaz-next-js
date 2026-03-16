"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Button, Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const router = useRouter();

    const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
    const currentAssignment = assignments.find((a) => a._id === aid);

    const [assignment, setAssignment] = useState(
        currentAssignment ?? {
            _id: aid,
            course: cid,
            title: "",
            description: "",
            points: 0,
            dueDate: "",
            availableDate: "",
            untilDate: "",
        }
    );

    const onSubmit = () => {
        currentAssignment
            ? dispatch(updateAssignment(assignment))
            : dispatch(addAssignment(assignment));
        router.push(`/courses/${cid}/assignments`);
    };

    return (
        <div id="wd-assignments-editor" className="p-4">
            <Form.Group className="mb-3">
                <Form.Label>Assignment Name</Form.Label>
                <FormControl
                    id="wd-name"
                    value={assignment.title}
                    onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Description</Form.Label>
                <FormControl
                    id="wd-description"
                    as="textarea"
                    rows={8}
                    value={assignment.description}
                    onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
                />
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3 col-form-label text-end">Points</Form.Label>
                <div className="col-sm-9">
                    <FormControl
                        id="wd-points"
                        value={assignment.points}
                        onChange={(e) => {
                            const val = Number(e.target.value);
                            setAssignment({ ...assignment, points: Number.isNaN(val) ? 0 : val });
                        }}
                    />
                </div>
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3 col-form-label text-end">Assignment Group</Form.Label>
                <div className="col-sm-9">
                    <Form.Select>
                        <option>ASSIGNMENTS</option>
                        <option>QUIZZES</option>
                        <option>EXAMS</option>
                        <option>HOMEWORK</option>
                    </Form.Select>
                </div>
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3 col-form-label text-end">Display Grade As</Form.Label>
                <div className="col-sm-9">
                    <Form.Select>
                        <option>Percentage</option>
                        <option>Raw Score</option>
                    </Form.Select>
                </div>
            </Form.Group>
            <Form.Group className="row mb-4">
                <Form.Label className="col-sm-3 col-form-label text-end">Submission Type</Form.Label>
                <div className="col-sm-9 border p-3">
                    <Form.Select className="mb-3">
                        <option>Online</option>
                        <option>In Person</option>
                    </Form.Select>
                    <strong>Online Entry Options</strong>
                    <Form.Check type="checkbox" label="Text Entry" className="mt-2" />
                    <Form.Check type="checkbox" label="Website URL" defaultChecked />
                    <Form.Check type="checkbox" label="Media Recordings" />
                    <Form.Check type="checkbox" label="Student Annotation" />
                    <Form.Check type="checkbox" label="File Uploads" />
                </div>
            </Form.Group>
            <Form.Group className="row mb-4">
                <Form.Label className="col-sm-3 col-form-label text-end">Assign</Form.Label>
                <div className="col-sm-9 border p-3">
                    <strong>Assign to</strong>
                    <Form.Select className="mb-3">
                        <option>Everyone</option>
                    </Form.Select>
                    <Form.Label><strong>Due</strong></Form.Label>
                    <FormControl
                        type="date"
                        className="mb-3"
                        value={assignment.dueDate?.slice(0, 10) ?? ""}
                        onChange={(e) =>
                            setAssignment({ ...assignment, dueDate: `${e.target.value}T00:00:00-05:00` })
                        }
                    />
                    <div className="row">
                        <div className="col">
                            <Form.Label><strong>Available From</strong></Form.Label>
                            <FormControl
                                type="date"
                                value={assignment.availableDate?.slice(0, 10) ?? ""}
                                onChange={(e) =>
                                    setAssignment({ ...assignment, availableDate: `${e.target.value}T00:00:00-05:00` })
                                }
                            />
                        </div>
                        <div className="col">
                            <Form.Label><strong>Until</strong></Form.Label>
                            <FormControl
                                type="date"
                                value={assignment.untilDate?.slice(0, 10) ?? ""}
                                onChange={(e) =>
                                    setAssignment({ ...assignment, untilDate: `${e.target.value}T00:00:00-05:00` })
                                }
                            />
                        </div>
                    </div>
                </div>
            </Form.Group>
            <hr />
            <div className="d-flex justify-content-end gap-2">
                <Link href={`/courses/${cid}/assignments`}>
                    <Button variant="secondary" className="rounded-0">Cancel</Button>
                </Link>
                <Button variant="danger" className="rounded-0" onClick={onSubmit}>
                    Save
                </Button>
            </div>
        </div>
    );
}
