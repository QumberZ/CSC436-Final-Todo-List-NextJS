"use client";

// import React from "react";
// import useUser from "csc-start/hooks/useUser";
// import useUserMustBeLogged from "csc-start/hooks/useUserMustBeLogged";
// import { addNewLink, addNewTodoItem, addNewTask, getTodoItems } from "csc-start/utils/data";
// import { useState, useEffect } from "react";

// const Profile = () => {
//   const [title, setTitle] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [url, setUrl] = useState("");
//   const [linkType, setLinkType] = useState("link");
//   const [currentLinks, setCurrentLinks] = useState([]);
//   const [todoItems, setTodoItems] = useState([]);

//   const { user, refreshUser, error, loading } = useUser();
//   useUserMustBeLogged(user, "in", "/login");

//   useEffect(() => {
//     if (user) {
//       const fetchTodoItems = async () => {
//         const todoItemsData = await getTodoItems(user.id);
//         if (todoItemsData.success) {
//           setTodoItems(todoItemsData.data);
//         }
//       };

//       let tempCurrentLinks = user.socialLinks;
//       if (linkType === "link") {
//         tempCurrentLinks = user.linkLinks;
//       }
//       setCurrentLinks(tempCurrentLinks);

//       fetchTodoItems();
//     }
//   }, [user, linkType]);

//   const addLink = async (e) => {
//     e.preventDefault();

//     const order = currentLinks ? currentLinks.length + 1 : 1;

//     const addedLink = await addNewLink(user.id, url, title, order, linkType);
//     if (addedLink.success === false) {
//       // Handle error
//       return;
//     }
//     setUrl("");
//     setTitle("");
//     refreshUser();
//     // Handle success
//   };

//   const addTask = () => {
//     if (tasks.length >= 5) {
//       return; // Limit the number of tasks per item
//     }
//     setTasks([...tasks, ""]);
//   };

//   const updateTask = (index, value) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index] = value;
//     setTasks(updatedTasks);
//   };

//   const removeTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   const clearTasks = () => {
//     setTasks([]);
//   };

//   const addTodoItem = async (e) => {
//     e.preventDefault();

//     const order = todoItems ? todoItems.length + 1 : 1;

//     const addedTodoItem = await addNewTodoItem(user.id, title, order);
//     if (addedTodoItem.success === false) {
//       // Handle error
//       return;
//     }

//     const listId = addedTodoItem.data.list_id;
//     for (let i = 0; i < tasks.length; i++) {
//       const addedTask = await addNewTask(listId, tasks[i], i + 1);
//       if (addedTask.success === false) {
//         // Handle error
//         return;
//       }
//     }

//     const newItem = { title, list_id: addedTodoItem.data.list_id, tasks };
//     setTodoItems([...todoItems, newItem]);
//     setTasks([]);
//     setTitle("");
//     refreshUser();
//     // Handle success
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
//       <div className="w-full mx-auto px-8">
//         {!!error && (
//           <div className="bg-red-200 border-2 border-red-800 text-red-800 py-2 px-5 my-10 text-center">
//             <span className="font-bold">{error.message}</span>
//           </div>
//         )}
//         {!error && loading && <p>Loading...</p>}
//         {!error && !loading && (
//           <div>
//             <div className="flex justify-between my-5">
//               <button
//                 disabled={linkType === "social"}
//                 onClick={() => setLinkType("social")}
//                 className="button small bg-white text-blue-900 font-bold"
//               >
//                 Social
//               </button>
//               <button
//                 disabled={linkType === "link"}
//                 onClick={() => setLinkType("link")}
//                 className="button small bg-white text-blue-900 font-bold"
//               >
//                 Links
//               </button>
//             </div>

//             <form onSubmit={addTodoItem} className="mt-8">
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-white">Add Todo Item</p>
//               </div>
//               <div className="flex justify-center my-4">
//                 <div className="mb-4">
//                   <label htmlFor="title" className="text-white">
//                     Title:
//                   </label>
//                   <input
//                     id="title"
//                     className="border border-2 border-white px-2 text-black ml-2"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     required
//                     type="text"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="tasks" className="text-white">
//                     Tasks:
//                   </label>
//                   <div className="flex flex-col ml-2">
//                     {tasks.map((task, index) => (
//                       <div key={index} className="flex">
//                         <input
//                           id={`task-${index}`}
//                           className="border border-2 border-white px-2 text-black mb-2 mr-2"
//                           value={task}
//                           onChange={(e) => updateTask(index, e.target.value)}
//                           required
//                           type="text"
//                         />
//                         <button
//                           type="button"
//                           className="button small bg-white text-blue-900 font-bold"
//                           onClick={() => removeTask(index)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}
//                     {tasks.length < 5 && (
//                       <button
//                         type="button"
//                         className="button small bg-white text-blue-900 font-bold mt-2"
//                         onClick={addTask}
//                       >
//                         Add Task
//                       </button>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex flex-col justify-end">
//                   <button
//                     type="submit"
//                     className="button small bg-white text-blue-900 font-bold ml-2"
//                   >
//                     Add Todo Item
//                   </button>
//                   <button
//                     type="button"
//                     className="button small bg-white text-blue-900 font-bold ml-2 mt-2"
//                     onClick={clearTasks}
//                   >
//                     Clear Tasks
//                   </button>
//                 </div>
//               </div>
//             </form>

//             <h2 className="text-2xl font-bold text-white mb-2">VIEW TODO LISTS</h2>
//             <div className="overflow-y-auto max-h-96 mt-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {todoItems.map((item) => (
//                   <div key={item.list_id} className="border border-2 border-white rounded p-4">
//                     <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//                     {item.tasks && item.tasks.map((task, index) => (
//                       <p key={index} className="mb-1">{task}</p>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

//  export default Profile;

// import useUser from "csc-start/hooks/useUser";
// import useUserMustBeLogged from "csc-start/hooks/useUserMustBeLogged";
// import { addNewLink } from "csc-start/utils/data";
// import { useState, useEffect } from "react";

// const Profile = () => {
//   const [title, setTitle] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [url, setUrl] = useState("");
//   const [linkType, setLinkType] = useState("link");
//   const [currentLinks, setCurrentLinks] = useState([]);
//   const [todoItems, setTodoItems] = useState([]);

//   const { user, refreshUser, error, loading } = useUser();
//   useUserMustBeLogged(user, "in", "/login");

//   useEffect(() => {
//     if (user) {
//       let tempCurrentLinks = user.socialLinks;
//       if (linkType === "link") {
//         tempCurrentLinks = user.linkLinks;
//       }
//       setCurrentLinks(tempCurrentLinks);
//     }
//   }, [user, linkType]);

//   const addLink = async (e) => {
//     e.preventDefault();

//     const order = currentLinks ? currentLinks.length + 1 : 1;

//     const addedLink = await addNewLink(user.id, url, title, order, linkType);
//     if (addedLink.success === false) {
//       // Handle error
//       return;
//     }
//     setUrl("");
//     setTitle("");
//     refreshUser();
//     // Handle success
//   };

//   const addTodoItem = (e) => {
//     e.preventDefault();

//     const newItem = { title, tasks };
//     setTodoItems([...todoItems, newItem]);
//     setTitle("");
//     setTasks([]);
//   };

//   const addTask = () => {
//     if (tasks.length >= 5) {
//       return; // Limit the number of tasks per item
//     }
//     setTasks([...tasks, ""]);
//   };

//   const updateTask = (index, value) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index] = value;
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
//       <div className="w-full mx-auto px-8">
//         {!!error && (
//           <div className="bg-red-200 border-2 border-red-800 text-red-800 py-2 px-5 my-10 text-center">
//             <span className="font-bold">{error.message}</span>
//           </div>
//         )}
//         {!error && loading && <p>Loading...</p>}
//         {!error && !loading && (
//           <div>
//             <div className="flex justify-between my-5">
//               <button
//                 disabled={linkType === "social"}
//                 onClick={() => setLinkType("social")}
//                 className="button small bg-white text-blue-900 font-bold"
//               >
//                 Social
//               </button>
//               <button
//                 disabled={linkType === "link"}
//                 onClick={() => setLinkType("link")}
//                 className="button small bg-white text-blue-900 font-bold"
//               >
//                 Links
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {todoItems.map((item, index) => (
//                 <div key={index} className="bg-gray-900 rounded-lg p-4">
//                   <div className="text-center">
//                     <img
//                       src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png"
//                       alt="To-Do List"
//                       className="h-24 w-24 mx-auto mb-4"
//                     />
//                     <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
//                   </div>
//                   <ul>
//                     {item.tasks.map((task, taskIndex) => (
//                       <li key={taskIndex} className="flex items-center my-2">
//                         <input
//                           type="checkbox"
//                           className="mr-2"
//                           onChange={() => {}}
//                           // Add your checkbox logic here
//                         />
//                         <span className="text-white">{task}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             <form onSubmit={addTodoItem} className="mt-8">
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-white">Add Todo Item</p>
//               </div>
//               <div className="flex justify-center my-4">
//                 <div className="mb-4">
//                   <label htmlFor="title" className="text-white">
//                     Title:
//                   </label>
//                   <input
//                     id="title"
//                     className="border border-2 border-white px-2 text-black ml-2"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     required
//                     type="text"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="tasks" className="text-white">
//                     Tasks:
//                   </label>
//                   <div className="flex flex-col ml-2">
//                     {tasks.map((task, index) => (
//                       <input
//                         key={index}
//                         className="border border-2 border-white px-2 text-black mb-2"
//                         value={task}
//                         onChange={(e) => updateTask(index, e.target.value)}
//                         required
//                         type="text"
//                       />
//                     ))}
//                     <button
//                       type="button"
//                       className="button small bg-white text-blue-900 font-bold mt-2"
//                       onClick={addTask}
//                     >
//                       Add Task
//                     </button>
//                   </div>
//                 </div>
//                 <button
//                   onClick={addTodoItem}
//                   className="button small bg-white text-blue-900 font-bold ml-2"
//                 >
//                   Add Todo Item
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import useUser from "csc-start/hooks/useUser";
// import useUserMustBeLogged from "csc-start/hooks/useUserMustBeLogged";
// import { addNewTodoItem, getTodoItems } from "csc-start/utils/data";
// import { useState, useEffect } from "react";

// const Profile = () => {
//   const [title, setTitle] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [todoItems, setTodoItems] = useState([]);

//   const { user, refreshUser, error, loading } = useUser();
//   useUserMustBeLogged(user, "in", "/login");

//   useEffect(() => {
//     if (user) {
//       const fetchTodoItems = async () => {
//         const todoItemsData = await getTodoItems(user.id);
//         if (todoItemsData.success) {
//           setTodoItems(todoItemsData.data);
//         }
//       };

//       fetchTodoItems();
//     }
//   }, [user]);

//   const addTodoItem = async (e) => {
//     e.preventDefault();

//     const order = todoItems ? todoItems.length + 1 : 1;

//     const addedTodoItem = await addNewTodoItem(user.id, "list_id", title, order);
//     if (addedTodoItem.success === false) {
//       // Handle error
//       return;
//     }

//     setTitle("");
//     refreshUser();
//     // Handle success
//   };

//   const addTask = () => {
//     if (tasks.length >= 5) {
//       return; // Limit the number of tasks per item
//     }
//     setTasks([...tasks, ""]);
//   };

//   const updateTask = (index, value) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index] = value;
//     setTasks(updatedTasks);
//   };

//   const submitTasks = async () => {
//     const todoItem = {
//       title: title,
//       tasks: tasks.map((taskTitle) => ({
//         title: taskTitle,
//       })),
//     };

//     const order = todoItems ? todoItems.length + 1 : 1;

//     const addedTodoItem = await addNewTodoItem(user.id, "list_id", todoItem.title, order, todoItem.tasks);
//     if (addedTodoItem.success === false) {
//       // Handle error
//       return;
//     }

//     setTitle("");
//     setTasks([]);
//     refreshUser();
//     // Handle success
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//           <div className="p-6 bg-white border-b border-gray-200">
//             <h2 className="text-xl font-bold mb-5">Tasks</h2>
//             <button onClick={addTask} className="button small bg-blue-500 text-white font-bold mb-4">
//               Add Task
//             </button>
//             <ul className="mb-5">
//               {tasks.map((task, index) => (
//                 <li key={index}>
//                   <input
//                     type="text"
//                     value={task}
//                     onChange={(e) => updateTask(index, e.target.value)}
//                     className="input"
//                   />
//                 </li>
//               ))}
//             </ul>
//             <h2 className="text-xl font-bold mb-5">Todo List</h2>
//             {todoItems.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {todoItems.map((item) => (
//                   <div key={item.id} className="bg-gray-200 p-4 rounded-lg">
//                     <img src="https://example.com/image.jpg" alt="Todo List" className="mb-2" />
//                     <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//                     {item.tasks && item.tasks.length > 0 ? (
//                       <ul>
//                         {item.tasks.map((task, index) => (
//                           <li key={index}>
//                             <label className="flex items-center">
//                               <input type="checkbox" className="mr-2" />
//                               {task.title}
//                             </label>
//                           </li>
//                         ))}
//                       </ul>
//                     ) : (
//                       <p>No tasks available.</p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No todo items available.</p>
//             )}
//             <div className="mt-4">
//               <form onSubmit={addTodoItem}>
//                 <input
//                   type="text"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="input mb-2"
//                   placeholder="Todo Item Title"
//                 />
//                 <button type="submit" className="button small bg-blue-500 text-white font-bold">
//                   Add Todo Item
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import useUser from "csc-start/hooks/useUser";
import useUserMustBeLogged from "csc-start/hooks/useUserMustBeLogged";
import { addNewTodoItem, getTodoItems } from "csc-start/utils/data";
import { useState, useEffect } from "react";

const Profile = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const { user, refreshUser, error, loading } = useUser();
  useUserMustBeLogged(user, "in", "/login");

  useEffect(() => {
    if (user) {
      const fetchTodoItems = async () => {
        const todoItemsData = await getTodoItems(user.id);
        if (todoItemsData.success) {
          setTodoItems(todoItemsData.data);
        }
      };

      fetchTodoItems();
    }
  }, [user]);

  const addTodoItem = async (e) => {
    e.preventDefault();

    const order = todoItems ? todoItems.length + 1 : 1;
    const completed = false;

    const addedTodoItem = await addNewTodoItem(user.id, tasks, title, order, completed);
    if (addedTodoItem.success === false) {
      // Handle error
      return;
    }

    setTitle("");
    setTasks("");
    refreshUser();
    // Handle success
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="barge py-10 px-8 bg-gray-800 rounded-lg">
        {!!error && (
          <div className="bg-red-200 border-2 border-red-800 text-red-800 py-2 px-5 my-10 text-center">
            <span className="font-bold">{error.message}</span>
          </div>
        )}
        {!error && loading && <p>Loading...</p>}
        {!error && !loading && (
          <div>
            <p className="h2 my-5">Todo List</p>
            <table className="border-collapse">
              <thead>
                <tr>
                  <th className="border border-white px-4 py-2 text-white">Title</th>
                  <th className="border border-white px-4 py-2 text-white">Tasks</th>
                  <th className="border border-white px-4 py-2 text-white">Completed</th>
                </tr>
              </thead>
              <tbody>
  {todoItems?.map((item) => {
    return [
      <tr key={`${item.id}-title`}>
        <td className="border border-white px-4 py-2 text-white">{item.title}</td>
        <td className="border border-white px-4 py-2 text-white">{item.tasks}</td>
        <td className="border border-white px-4 py-2 text-white">{item.completed ? "Yes" : "No"}</td>
      </tr>,
      Array.isArray(item.tasks) && (
        <tr key={`${item.id}-tasks`}>
          <td colSpan="2" className="border border-white px-4 py-2 text-white">
            <ul>
              {item.tasks.map((task, index) => (
                <li key={`${item.id}-task-${index}`}>{task}</li>
              ))}
            </ul>
          </td>
        </tr>
      )
    ];
  })}
</tbody>







            </table>
            <form onSubmit={addTodoItem} className="mt-8">
              <p className="h2 text-white">Add New Todo Item</p>
              <p className="my-5">
                <label htmlFor="title" className="inline-block w-32 text-right pr-4 text-white">
                  Title:
                </label>
                <input
                  id="title"
                  className="border border-2 border-white px-2 text-black"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  type="text"
                />
              </p>
              <p className="my-5">
                <label htmlFor="tasks" className="inline-block w-32 text-right pr-4 text-white">
                  Tasks:
                </label>
                <input
                  id="tasks"
                  className="border border-2 border-white px-2 text-black"
                  value={tasks}
                  onChange={(e) => setTasks(e.target.value)}
                  required
                  type="text"
                />
              </p>
              <p className="text-center">
                <input
                  type="submit"
                  className="button small bg-white text-blue-900 font-bold"
                  value="Add Todo Item"
                />
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
