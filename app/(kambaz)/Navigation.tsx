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

  const links = [
    { label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/inbox", icon: FaInbox },
    { label: "Labs", path: "/labs", icon: LiaCogSolid },
  ];

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
        <Link href="/account" className="text-white text-decoration-none">
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>
      </ListGroupItem>
      {links.map((link) => (
        <ListGroupItem
          key={link.label}
          className={`border-0 text-center ${isActive(link.path) ? "bg-white" : "bg-black"
            }`}
        >
          <Link
            href={link.path}
            className={`text-decoration-none ${isActive(link.path) ? "text-danger" : "text-white"
              }`}
          >
            <link.icon className="fs-1" />
            <br />
            {link.label}
          </Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
