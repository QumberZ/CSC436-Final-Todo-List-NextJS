"use client";
import { loginUser } from "csc-start/utils/data";
import { useReducer } from "react";
import { useRouter } from "next/navigation";
import useUserMustBeLogged from "csc-start/hooks/useUserMustBeLogged";
import useUser from "csc-start/hooks/useUser";


const Login = () => {
  const { user } = useUser();
  useUserMustBeLogged(user, "out", "/profile");
  const router = useRouter();

  function reducer(state, action) {
    switch (action.type) {
      case "email":
      case "password":
        return { ...state, [action.type]: action.value };
      case "loading":
        return { ...state, loading: action.value };
      case "response":
        return { ...state, response: action.value };
      default:
        throw new Error("Unknown action type: " + action.type);
    }
  }

  const initialState = {
    email: "",
    password: "",
    response: "",
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password, response, loading } = state;

  const login = async (e) => {
    e.preventDefault();

    dispatch({ type: "loading", value: true });
    dispatch({ type: "response", value: null });

    const response = await loginUser(email, password);

    dispatch({ type: "response", value: response });
    dispatch({ type: "loading", value: false });

    if (!!response?.success) {
      setTimeout(() => {
        router.replace("/profile");
      }, 3000);
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="barge py-10 px-8 bg-gray-800 rounded-lg">
        {response && (
          <div
            className={`${
              response.success
                ? "bg-green-200 border-2 border-green-800 text-green-800"
                : "bg-red-200 border-2 border-red-800 text-red-800"
            } py-2 px-5 my-10 text-center`}
          >
            <span className="font-bold">
              {response.success
                ? `Success ${response.message}`
                : `Failure: ${response.error.message}`}
            </span>
          </div>
        )}
        <h2 className="my-10 h1 text-center">Login</h2>
        <form
          onSubmit={login}
          className={loading ? "opacity-50 pointer-events-none" : ""}
        >
          {Object.keys(initialState)
            .filter((k) => !["response", "loading"].includes(k))
            .map((key) => {
              let type = "text";
              if (key === "password") {
                type = "password";
              } else if (key === "email") {
                type = "email";
              }

              return (
                <p key={key} className="mb-5">
                  <label className="h3 capitalize w-[75px] inline-block">
                    {key}*
                  </label>
                  <input
                    className="h3 border-2 border-white ml-5 inline-block w-[220px] px-2 text-black"
                    required
                    name={key}
                    onChange={(e) => {
                      dispatch({ type: e.target.name, value: e.target.value });
                    }}
                    value={state[key]}
                    type={type}
                  />
                </p>
              );
            })}
          <div className="flex justify-center my-10">
            <input
              className="button small bg-white text-blue-900 font-bold"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

