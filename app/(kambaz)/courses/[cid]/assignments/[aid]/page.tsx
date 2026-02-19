"use client";

import { Button, Form } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="p-4">
            <Form.Group className="mb-3">
                <Form.Label>Assignment Name</Form.Label>
                <Form.Control defaultValue="A1" />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    as="textarea"
                    rows={8}
                    defaultValue={`The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page`}
                />
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3 col-form-label text-end">
                    Points
                </Form.Label>
                <div className="col-sm-9">
                    <Form.Control defaultValue={100} />
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

                    <Form.Check
                        type="checkbox"
                        label="Text Entry"
                        className="mt-2"
                    />
                    <Form.Check
                        type="checkbox"
                        label="Website URL"
                        defaultChecked
                    />
                    <Form.Check
                        type="checkbox"
                        label="Media Recordings"
                    />
                    <Form.Check
                        type="checkbox"
                        label="Student Annotation"
                    />
                    <Form.Check
                        type="checkbox"
                        label="File Uploads"
                    />
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
                        type="date"
                        className="mb-3"
                        defaultValue="2024-05-13"
                    />
                    <div className="row">
                        <div className="col">
                            <Form.Label><strong>Available From</strong></Form.Label>
                            <Form.Control
                                type="date"
                                defaultValue="2024-05-06"
                            />
                        </div>
                        <div className="col">
                            <Form.Label><strong>Until</strong></Form.Label>
                            <Form.Control
                                type="date"
                                defaultValue="2024-05-20"
                            />
                        </div>
                    </div>
                </div>
            </Form.Group>
            <hr />
            <div className="d-flex justify-content-end gap-2">
                <Button variant="secondary" className="rounded-0">
                    Cancel
                </Button>
                <Button variant="danger" className="rounded-0">
                    Save
                </Button>
            </div>
        </div>
    );
}
