import {
    Button,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentControls() {
    return (
        <div
            id="wd-modules-controls"
            className="d-flex align-items-center justify-content-between gap-2"
        >
            <div className="position-relative flex-grow-1 me-3">
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
                <Button
                    className="btn btn-secondary rounded-0"
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
                    className="btn btn-danger rounded-0"
                    size="lg"
                    id="wd-add-module-btn"
                >
                    <FaPlus
                        className="position-relative me-2"
                        style={{ bottom: "1px" }}
                    />
                    Assignment
                </Button>
            </div>
        </div>
    );
}
