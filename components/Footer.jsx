import Image from "next/image";
import cargoBlack from "../images/cargo-black.svg";
import ActionsFooter from "./ActionsFooter";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4 px-8 text-white mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-lg">Copyright 2023</p>
        <Image src={cargoBlack} alt="LinkBarge" width={44} height={37} />
      </div>
      <ActionsFooter />
    </footer>
  );
};

export default Footer;
