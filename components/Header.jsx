import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-900 py-4 px-8">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/login">
            <span className="text-white text-xl hover:text-brutal-orange duration-300 transition-all mx-4 cursor-pointer font-bold">
              Login
            </span>
          </Link>
          <Link href="/register">
            <span className="text-white text-xl hover:text-brutal-gray duration-300 transition-all mx-4 cursor-pointer font-bold">
              Register
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
