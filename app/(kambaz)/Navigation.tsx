"use client";

import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function KambazNavigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        href="https://www.northeastern.edu/"
        target="_blank"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      <ListGroupItem className="bg-black border-0 text-center">
        <Link
          href="/account"
          className="text-white text-decoration-none"
        >
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${isActive("/dashboard") ? "bg-white" : "bg-black"
          }`}
      >
        <Link
          href="/dashboard"
          className={`text-decoration-none ${isActive("/dashboard") ? "text-danger" : "text-white"
            }`}
        >
          <AiOutlineDashboard className="fs-1" />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${isActive("/courses") ? "bg-white" : "bg-black"
          }`}
      >
        <Link
          href="/courses"
          className={`text-decoration-none ${isActive("/courses") ? "text-danger" : "text-white"
            }`}
        >
          <LiaBookSolid className="fs-1" />
          <br />
          Courses
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${isActive("/calendar") ? "bg-white" : "bg-black"
          }`}
      >
        <Link
          href="/calendar"
          className={`text-decoration-none ${isActive("/calendar") ? "text-danger" : "text-white"
            }`}
        >
          <IoCalendarOutline className="fs-1" />
          <br />
          Calendar
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${isActive("/inbox") ? "bg-white" : "bg-black"
          }`}
      >
        <Link
          href="/inbox"
          className={`text-decoration-none ${isActive("/inbox") ? "text-danger" : "text-white"
            }`}
        >
          <FaInbox className="fs-1" />
          <br />
          Inbox
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${isActive("/labs") ? "bg-white" : "bg-black"
          }`}
      >
        <Link
          href="/labs"
          className={`text-decoration-none ${isActive("/labs") ? "text-danger" : "text-white"
            }`}
        >
          <LiaCogSolid className="fs-1" />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
