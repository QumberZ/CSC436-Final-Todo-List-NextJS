import Image from "next/image";
import { getCurrentUser } from "../utils/data";

const { name, avatar } = getCurrentUser();

const TopContent = () => {
  return (
    <div className="bg-gray-900 py-14 flex flex-col items-center">
      {avatar && (
        <div className="rounded-full overflow-hidden mb-4">
          <Image src={avatar} alt={name} height={145} width={145} />
        </div>
      )}
      <p className="text-white text-5xl">{name}</p>
    </div>
  );
};

export default TopContent;
