"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { RootState } from "../../../../store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { addAssignment, updateAssignment } from "../reducer";
import { useRouter } from "next/navigation";
import * as client from "../../../client";

export default function AssignmentEditor() {
    const { aid, cid } = useParams();
    const dispatch = useDispatch();
    const router = useRouter();

    const { assignments } = useSelector(
        (state: RootState) => state.assignmentsReducer,
    );

    const currentAssignment = assignments.find(
        (assignment) => assignment._id === aid,
    );
    const [assignment, setAssignment] = useState(
        currentAssignment ?? {
            course: cid,
            title: "",
            description: "",
            points: 0,
            dueDate: "",
            availableDate: "",
            untilDate: "",
        },
    );

    const onSubmit = async () => {
        if (currentAssignment) {
            await onUpdateAssignment();
        } else {
            await onCreateAssignmentForCourse();
        }
        router.push(`/courses/${cid}/assignments`);
    };

    const onCreateAssignmentForCourse = async () => {
        if (!cid) return;
        const newAssignment = await client.createAssignmentForCourse(
            cid as string,
            assignment,
        );
        dispatch(addAssignment(newAssignment));
    };

    const onUpdateAssignment = async () => {
        await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };

    return (
        <div id="wd-assignments-editor">
            <div className="d-flex flex-column gap-2">
                <label htmlFor="wd-name">Assignment Name</label>
                <FormControl
                    id="wd-name"
                    className="p-2 border"
                    value={assignment.title}
                    onChange={(e) => {
                        setAssignment((prev) =>
                            prev ? { ...prev, title: e.target.value } : prev,
                        );
                    }}
                />
            </div>
            <br />
            <div className="d-flex flex-column gap-2">
                <label htmlFor="wd-name">Description</label>
                <FormControl
                    id="wd-description"
                    className="p-2 border"
                    value={assignment.description}
                    onChange={(e) => {
                        setAssignment((prev) =>
                            prev ? { ...prev, description: e.target.value } : prev,
                        );
                    }}
                />
            </div>
            <br />
            <br />
            <table className="w-100">
                <tbody>
                    <tr>
                        <td className="pe-3 text-end align-top text-nowrap">
                            <label htmlFor="wd-points" className="col-form-label">
                                Points
                            </label>
                        </td>
                        <td className="w-100">
                            <FormControl
                                id="wd-points"
                                className="form-control w-100"
                                value={assignment.points}
                                onChange={(e) => {
                                    const value = Number(e.currentTarget.value);
                                    setAssignment((prev) =>
                                        prev
                                            ? { ...prev, points: Number.isNaN(value) ? 0 : value }
                                            : prev,
                                    );
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-3 text-end align-top text-nowrap">
                            <label htmlFor="wd-assign-to" className="col-form-label">
                                Assign To
                            </label>
                        </td>
                        <td className="border p-3">
                            <div className="d-flex flex-column">
                                <label htmlFor="wd-due-date">
                                    <strong>Due</strong>
                                </label>
                                <FormControl
                                    type="date"
                                    id="wd-due-date"
                                    className="p-2 border mb-2"
                                    value={assignment.dueDate.slice(0, 10)}
                                    onChange={(e) => {
                                        const d = e.currentTarget.value;
                                        setAssignment((prev) =>
                                            prev ? { ...prev, dueDate: `${d}T00:00:00-05:00` } : prev,
                                        );
                                    }}
                                />
                                <div className="d-flex gap-2">
                                    <div className="d-flex flex-column">
                                        <label htmlFor="wd-available-from">
                                            <strong>Available From</strong>
                                        </label>
                                        <FormControl
                                            type="date"
                                            id="wd-available-from"
                                            value={assignment.availableDate.slice(0, 10)}
                                            className="p-2 border mb-2"
                                            onChange={(e) => {
                                                const d = e.currentTarget.value;
                                                setAssignment((prev) =>
                                                    prev
                                                        ? { ...prev, availableDate: `${d}T00:00:00-05:00` }
                                                        : prev,
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <label htmlFor="wd-available-until">
                                            <strong>Until</strong>
                                        </label>
                                        <FormControl
                                            type="date"
                                            id="wd-available-until"
                                            value={assignment.untilDate.slice(0, 10)}
                                            className="p-2 border mb-2"
                                            onChange={(e) => {
                                                const d = e.currentTarget.value;
                                                setAssignment((prev) =>
                                                    prev
                                                        ? { ...prev, untilDate: `${d}T00:00:00-05:00` }
                                                        : prev,
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <div className="d-flex justify-content-end gap-2">
                <Link
                    href={`/courses/${cid}/assignments`}
                    className="btn btn-secondary rounded-0"
                >
                    Cancel
                </Link>
                <Button onClick={onSubmit} className="btn btn-danger rounded-0">
                    Save
                </Button>
            </div>
        </div>
    );
}
