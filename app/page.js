// @todo ADD ERROR HANDLING THROUGHOUT APP
"use client"
import { getLatestUsers, getUserTodos } from "csc-start/utils/data";
import Link from "next/link";

export const revalidate = 20;

export default async function Home() {

  const { success, data, error } = await getLatestUsers();
  

  if(error){
    return <p>Error: {error.message}</p>
  }

  if(data.length === 0) {
    return <p>No users have signed up yet</p>
  }


  return (
    <div>
 
    <main className="barge">
   
      {data.map(({name, slug}) => {
        return <Link 
          key={slug} 
          href={`/user/${slug}`}
          className="block my-5 button small"
        >{name}</Link>
      })}

    </main>
  
    </div>
 
  )


  return <div></div>;
}
