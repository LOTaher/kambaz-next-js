"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  const linkClass = (path: string) =>
    `list-group-item border-0 ${pathname === path ? "active" : "text-danger"}`;

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link href="/account/signin" id="wd-account-signin-link" className={linkClass("/account/signin")}>
        Signin
      </Link>
      <Link href="/account/signup" id="wd-account-signup-link" className={linkClass("/account/signup")}>
        Signup
      </Link>
      <Link href="/account/profile" id="wd-account-profile-link" className={linkClass("/account/profile")}>
        Profile
      </Link>
      {currentUser && currentUser.role === "ADMIN" && (
        <Link href="/account/users" id="wd-account-users-link" className={linkClass("/account/users")}>
          Users
        </Link>
      )}
    </div>
  );
}
