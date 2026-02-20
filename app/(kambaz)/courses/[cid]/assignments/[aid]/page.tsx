"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import * as db from "../../../../database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = db.assignments.find((a) => a._id === aid);

    return (
        <div id="wd-assignments-editor" className="p-4">
            <Form.Group className="mb-3">
                <Form.Label>Assignment Name</Form.Label>
                <Form.Control defaultValue={assignment?.title || ""} />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    as="textarea"
                    rows={8}
                    defaultValue={assignment?.description || ""}
                />
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3 col-form-label text-end">
                    Points
                </Form.Label>
                <div className="col-sm-9">
                    <Form.Control defaultValue={assignment?.points || 100} />
                </div>
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3 col-form-label text-end">
                    Assignment Group
                </Form.Label>
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
                <Form.Label className="col-sm-3 col-form-label text-end">
                    Display Grade As
                </Form.Label>
                <div className="col-sm-9">
                    <Form.Select>
                        <option>Percentage</option>
                        <option>Raw Score</option>
                    </Form.Select>
                </div>
            </Form.Group>
            <Form.Group className="row mb-4">
                <Form.Label className="col-sm-3 col-form-label text-end">
                    Submission Type
                </Form.Label>
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
                <Form.Label className="col-sm-3 col-form-label text-end">
                    Assign
                </Form.Label>
                <div className="col-sm-9 border p-3">
                    <strong>Assign to</strong>
                    <Form.Select className="mb-3">
                        <option>Everyone</option>
                    </Form.Select>
                    <Form.Label><strong>Due</strong></Form.Label>
                    <Form.Control
                        type="text"
                        className="mb-3"
                        defaultValue={assignment?.dueDate || ""}
                    />
                    <div className="row">
                        <div className="col">
                            <Form.Label><strong>Available From</strong></Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={assignment?.availableFrom || ""}
                            />
                        </div>
                        <div className="col">
                            <Form.Label><strong>Until</strong></Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={assignment?.availableUntil || ""}
                            />
                        </div>
                    </div>
                </div>
            </Form.Group>
            <hr />
            <div className="d-flex justify-content-end gap-2">
                <Link href={`/courses/${cid}/assignments`}>
                    <Button variant="secondary" className="rounded-0">
                        Cancel
                    </Button>
                </Link>
                <Link href={`/courses/${cid}/assignments`}>
                    <Button variant="danger" className="rounded-0">
                        Save
                    </Button>
                </Link>
            </div>
        </div>
    );
}
