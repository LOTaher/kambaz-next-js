"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `list-group-item border-0 ${pathname === path ? "active" : "text-danger"
    }`;

  return (
    <div
      id="wd-account-navigation"
      className="wd list-group fs-5 rounded-0"
    >
      <Link
        href="/account/signin"
        id="wd-account-signin-link"
        className={linkClass("/account/signin")}
      >
        Signin
      </Link>

      <Link
        href="/account/signup"
        id="wd-account-signup-link"
        className={linkClass("/account/signup")}
      >
        Signup
      </Link>

      <Link
        href="/account/profile"
        id="wd-account-profile-link"
        className={linkClass("/account/profile")}
      >
        Profile
      </Link>
    </div>
  );
}
