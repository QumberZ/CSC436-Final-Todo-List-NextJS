"use client";
import useUser from "csc-start/hooks/useUser";
import useUserMustBeLogged from "csc-start/hooks/useUserMustBeLogged";
import { addNewLink } from "csc-start/utils/data";
import { useState, useEffect } from "react";

const Profile = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [linkType, setLinkType] = useState("link");
  const [currentLinks, setCurrentLinks] = useState([]);

  const { user, refreshUser, error, loading } = useUser();
  useUserMustBeLogged(user, "in", "/login");

  useEffect(() => {
    if (user) {
      let tempCurrentLinks = user.socialLinks;
      if (linkType === "link") {
        tempCurrentLinks = user.linkLinks;
      }

      setCurrentLinks(tempCurrentLinks);
    }
  }, [user, linkType]);

  const addLink = async (e) => {
    e.preventDefault();

    const order = currentLinks ? currentLinks.length + 1 : 1;

    const addedLink = await addNewLink(user.id, url, title, order, linkType);
    if (addedLink.success === false) {
      // Handle error
      return;
    }
    setUrl("");
    setTitle("");
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
            <div className="flex justify-between my-5">
              <button
                disabled={linkType === "social"}
                onClick={() => setLinkType("social")}
                className="button small bg-white text-blue-900 font-bold"
              >
                Social
              </button>
              <button
                disabled={linkType === "link"}
                onClick={() => setLinkType("link")}
                className="button small bg-white text-blue-900 font-bold"
              >
                Links
              </button>
            </div>

            <p className="h2 my-5">
              Currently Viewing <span className="capitalize">{linkType}</span> Links
            </p>
            <table className="border-collapse">
              <thead>
                <tr>
                  <th className="border border-white px-4 py-2 text-white">URL</th>
                  <th className="border border-white px-4 py-2 text-white">Title</th>
                </tr>
              </thead>
              <tbody>
                {currentLinks?.map((link) => {
                  return (
                    <tr key={link.id}>
                      <td className="border border-white px-4 py-2 text-white">{link.url}</td>
                      <td className="border border-white px-4 py-2 text-white">{link.title}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <form onSubmit={addLink} className="mt-8">
              <p className="h2 text-white">Add New Link</p>
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
                <label htmlFor="url" className="inline-block w-32 text-right pr-4 text-white">
                  URL:
                </label>
                <input
                  className="border border-2 border-white px-2 text-black"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  type="url"
                />
              </p>
              <p className="text-center">
                <input
                  type="submit"
                  className="button small bg-white text-blue-900 font-bold"
                  value="Add Link"
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
