"use client";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useRouter, useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function AssignmentControls() {
    const router = useRouter();
    const { cid } = useParams();
    const { currentUser } = useSelector(
        (state: RootState) => state.accountReducer,
    );
    const isFaculty = currentUser?.role === "FACULTY";

    return (
        <div
            id="wd-modules-controls"
            className="d-flex align-items-center justify-content-between gap-2"
        >
            <div className="position-relative flex-grow-1">
                <CiSearch
                    className="position-absolute text-muted fs-5"
                    style={{ left: "12px", top: "50%", transform: "translateY(-50%)" }}
                />
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search..."
                    style={{ paddingLeft: "38px" }}
                />
            </div>
            <div className="d-flex gap-2">
                {isFaculty && (
                    <>
                        <Button
                            className="btn btn-secondary rounded-1"
                            size="lg"
                            id="wd-collapse-all"
                        >
                            <FaPlus
                                className="position-relative me-2"
                                style={{ bottom: "1px" }}
                            />
                            Group
                        </Button>
                        <Button
                            className="btn btn-danger rounded-1"
                            size="lg"
                            id="wd-add-module-btn"
                            onClick={() => router.push(`/courses/${cid}/assignments/new`)}
                        >
                            <FaPlus
                                className="position-relative me-2"
                                style={{ bottom: "1px" }}
                            />
                            Assignment
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}
