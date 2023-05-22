"use client";
import { getLatestUsers } from "csc-start/utils/data";
import Link from "next/link";

export const revalidate = 20;

export default async function Home() {
  const { success, data, error } = await getLatestUsers();

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data.length === 0) {
    return <p>No users have signed up yet</p>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-800 to-pink-500 text-white h-screen">
      <main className="barge">
        <h1 className="text-3xl text-center font-bold mb-5 text-blue-500">
          User Created Lists
        </h1>

        {data.map(({ name, slug }) => {
          return (
            <Link key={slug} href={`/user/${slug}`} className="block my-5">
              <div className="bg-blue-900 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded">
                <p className="text-3xl text-center font-bold mb-2">
                  Username: {name}
                </p>
              </div>
            </Link>
          );
        })}
      </main>
    </div>
  );
}
