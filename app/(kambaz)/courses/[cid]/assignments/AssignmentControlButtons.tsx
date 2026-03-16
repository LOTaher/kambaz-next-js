import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";
import { BsCheckCircle } from "react-icons/bs";

export default function AssignmentsControlButtons({
    assignmentId,
    deleteAssignment,
}: {
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
}) {
    const handleDelete = () => {
        if (window.confirm("Are you sure you want to remove this assignment?")) {
            deleteAssignment(assignmentId);
        }
    };

    return (
        <div className="d-flex align-items-center gap-3">
            <FaTrash
                className="text-danger"
                style={{ cursor: "pointer" }}
                onClick={handleDelete}
            />
            <BsCheckCircle className="text-success fs-5" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
