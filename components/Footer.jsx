import ActionsFooter from "./ActionsFooter";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-600 py-4 px-8 text-white fixed bottom-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-lg text-2xl">List Creationz Copyright 2023</p>
      </div>
      <ActionsFooter />
    </footer>
  );
};

export default Footer;
