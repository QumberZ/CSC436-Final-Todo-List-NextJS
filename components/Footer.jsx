import ActionsFooter from "./ActionsFooter";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-600 py-4 px-8  bottom-0 left-0 right-0 text-white flex justify-between items-center bg-gradient-to-r from-blue-900 via-pink-800 to-blue-900">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-white text-4xl hover:text-brutal-gray duration-300 transition-all mx-4 cursor-pointer font-bold">
          &copy; List Creationz 2023
        </p>

        <img
          src="https://cdn2.iconfinder.com/data/icons/business-office-icons/256/To-do_List-512.png"
          alt="List Creationz Logo"
          width={54}
          height={54}
        />
      </div>
      <ActionsFooter />
    </footer>
  );
};

export default Footer;
