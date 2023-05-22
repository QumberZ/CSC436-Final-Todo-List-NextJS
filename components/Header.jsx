"use client"

import Image from "next/image";
import Link from "next/link";
import TodoAppHeading from "./TodoAppHeading";
import useUser from "csc-start/hooks/useUser";

const Header = () => {
  const { user, loading } = useUser();


  if (!user) {
    // user is not logged in
    return (
      <header className="bg-blue-600 py-4 px-8  bg-gradient-to-r from-blue-900 via-pink-800 to-blue-900">
      <nav className="container mx-auto flex justify-between items-center">
        <TodoAppHeading />
        <div>
          <Link href="/login">
            <span className="text-white text-4xl hover:text-brutal-gray duration-300 transition-all mx-4 cursor-pointer font-bold">
              Login
            </span>
          </Link>
          <Link href="/register">
            <span className="text-white text-4xl hover:text-brutal-gray duration-300 transition-all mx-4 cursor-pointer font-bold">
              Register
            </span>
          </Link>
        </div>
      </nav>
    </header>
    );
  }


  return (
    <header className="bg-blue-600 py-4 px-8  bg-gradient-to-r from-blue-900 via-pink-800 to-blue-900">
      <nav className="container mx-auto flex justify-between items-center">
        <TodoAppHeading />
        <div>
          <Link href="/logout">
            <span className="text-white text-4xl hover:text-brutal-gray duration-300 transition-all mx-4 cursor-pointer font-bold">
              Logout
            </span>
          </Link>
          <Link href="/register">
            <span className="text-white text-4xl hover:text-brutal-gray duration-300 transition-all mx-4 cursor-pointer font-bold">
              Register
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
