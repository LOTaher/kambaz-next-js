import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaPlus, FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

export default function ModuleControlButtons({
    moduleId,
    deleteModule,
    editModule,
}: {
    moduleId: string;
    deleteModule: (moduleId: string) => void;
    editModule: (moduleId: string) => void;
}) {
    return (
        <div className="float-end d-flex align-items-center gap-3">
            <FaPencil
                onClick={() => editModule(moduleId)}
                className="text-primary"
                style={{ cursor: "pointer" }}
            />
            <FaTrash
                className="text-danger"
                style={{ cursor: "pointer" }}
                onClick={() => deleteModule(moduleId)}
            />
            <GreenCheckmark />
            <FaPlus style={{ cursor: "pointer" }} />
            <IoEllipsisVertical className="fs-4" style={{ cursor: "pointer" }} />
        </div>
    );
}
