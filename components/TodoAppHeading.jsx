import Link from "next/link";

const TodoAppHeading = () => {
  return (
    <Link href="/">
      {" "}
      <p className="text-white text-4xl hover:text-brutal-gray duration-300 transition-all mx-1 cursor-pointer font-bold">
        Todo List Creationz
      </p>{" "}
    </Link>
  );
};

export default TodoAppHeading;
