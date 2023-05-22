import Image from "next/image";

import ActionsFooter from "./ActionsFooter";

const Footer = () => {
  return (
    <footer className="bg-gray-600 py-4 px-8 text-white mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-lg text-2xl">Copyright 2023</p>

      </div>
      <ActionsFooter />
    </footer>
  );
};

export default Footer;
