"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation() {
    const pathname = usePathname();
    const cid = pathname.split("/")[2];

    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    const linkClass = (path: string) =>
        `list-group-item border-0 ${pathname.includes(path) ? "active" : "text-danger"}`;

    return (
        <div
            id="wd-courses-navigation"
            className="wd list-group fs-5 rounded-0"
        >
            {links.map((link) => {
                const path = link === "People"
                    ? `/courses/${cid}/people/table`
                    : `/courses/${cid}/${link.toLowerCase()}`;
                return (
                    <Link
                        key={link}
                        href={path}
                        id={`wd-course-${link.toLowerCase()}-link`}
                        className={linkClass(path)}
                    >
                        {link}
                    </Link>
                );
            })}
        </div>
    );
}
