"use client"
import { getUserBySlug } from "csc-start/utils/data";
import { notFound } from "next/router";
import * as React from "react";
import { useState, useEffect } from "react";
import { getTodoItems } from "csc-start/utils/data";
import { IconButton } from "@mui/material";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";

export const revalidate = 30;

const Page = ({ params: { slug } }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await getUserBySlug(slug);
      if (error) {
        setError(error.message);
      } else if (data) {
        setData(data);
        fetchTodoItems(data.user_id);
      } else {
        notFound();
      }
    };

    fetchData();
  }, [slug]);

  const fetchTodoItems = async (userId) => {
    const { success, data, error } = await getTodoItems(userId);
    if (success) {
      setTodoItems(data);
    } else {
      setError(error);
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return null; // You can display a loading indicator here if desired
  }

  const { user_id } = data;

  return (
    <>
      {/* <Profile user_id={user_id} /> */}

      <div className="flex items-center justify-between mb-4">
        <IconButton
          color="inherit"
          aria-label="Go back"
          onClick={handleGoBack}
          size="large"
        >
          <ArrowBackIcon fontSize="large" />
          Back to users
        </IconButton>
        <h2 className="text-center text-3xl font-bold">Public Todo Lists</h2>
        <div></div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 todo-container">
          {todoItems.map((item) => (
            <div
              key={item?.id}
              className="bg-gray-200 rounded-lg p-6 text-gray-800 shadow-md todo-item flex flex-col"
            >
              <div className="flex flex-col items-center">
                <img
                  src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png"
                  alt="To-Do List"
                  className="h-48 w-48 mx-auto mb-4"
                />
                <h5 className="text-2xl font-bold text-center">
                  {item?.title ?? "Untitled"}
                </h5>
              </div>

              <table className="border-collapse w-full">
                <thead>
                  <tr>
                    <th className="p-2 border text-left">Task</th>
                    <th className="p-2 border text-left">Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(item?.tasks) &&
                    item.tasks.map((task, index) => (
                      <tr key={index}>
                        <td className="p-2 border">{task}</td>
                        <td className="p-2 border">
                          {item?.completed ? "Yes" : "No"}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;

