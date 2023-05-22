import ActionsFooter from "./ActionsFooter";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-600 py-4 px-8 text-white bottom-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-lg text-2xl">
          List Creationz Copyright
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
