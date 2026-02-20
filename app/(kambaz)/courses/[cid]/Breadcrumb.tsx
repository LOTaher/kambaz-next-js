"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ course }: { course: { name: string } | undefined }) {
    const pathname = usePathname();
    const section = pathname.split("/").pop();
    const capitalizedSection = section
        ? section.charAt(0).toUpperCase() + section.slice(1)
        : "";

    return (
        <div className="d-flex align-items-center mb-3">
            <span className="text-danger fs-4 fw-semibold">
                {course?.name}
            </span>
            {capitalizedSection && (
                <>
                    <span className="mx-2 fs-4 text-muted">&gt;</span>
                    <span className="fs-4">{capitalizedSection}</span>
                </>
            )}
        </div>
    );
}
