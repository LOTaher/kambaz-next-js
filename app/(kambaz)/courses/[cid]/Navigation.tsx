"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation() {
    const pathname = usePathname();

    const linkClass = (path: string) =>
        `list-group-item border-0 ${pathname === path ? "active" : "text-danger"
        }`;

    return (
        <div
            id="wd-courses-navigation"
            className="wd list-group fs-5 rounded-0"
        >
            <Link
                href="/courses/1234/home"
                id="wd-course-home-link"
                className={linkClass("/courses/1234/home")}
            >
                Home
            </Link>

            <Link
                href="/courses/1234/modules"
                id="wd-course-modules-link"
                className={linkClass("/courses/1234/modules")}
            >
                Modules
            </Link>

            <Link
                href="/courses/1234/piazza"
                id="wd-course-piazza-link"
                className={linkClass("/courses/1234/piazza")}
            >
                Piazza
            </Link>

            <Link
                href="/courses/1234/zoom"
                id="wd-course-zoom-link"
                className={linkClass("/courses/1234/zoom")}
            >
                Zoom
            </Link>

            <Link
                href="/courses/1234/assignments"
                id="wd-course-assignments-link"
                className={linkClass("/courses/1234/assignments")}
            >
                Assignments
            </Link>

            <Link
                href="/courses/1234/quizzes"
                id="wd-course-quizzes-link"
                className={linkClass("/courses/1234/quizzes")}
            >
                Quizzes
            </Link>

            <Link
                href="/courses/1234/people/table"
                id="wd-course-people-link"
                className={linkClass("/courses/1234/people/table")}
            >
                People
            </Link>
        </div>
    );
}
