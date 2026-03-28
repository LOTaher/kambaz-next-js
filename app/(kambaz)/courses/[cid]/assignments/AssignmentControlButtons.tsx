import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa6";

export default function AssignmentsControlButtons({
    assignmentId,
    deleteAssignment,
    isFaculty,
}: {
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
    isFaculty: boolean;
}) {
    return (
        <div className="d-flex align-items-center gap-3">
            {isFaculty && (
                <FaTrash
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteAssignment(assignmentId)}
                />
            )}
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
