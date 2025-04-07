import { BACKEND_URL } from "../../config";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SignUpInput } from "@murali222/common";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "./LoadingButton";

interface AuthProps {
  type: "signup" | "signin";
  setIsAuthenticated?: (value: boolean) => void;
}

export const Auth = ({ type, setIsAuthenticated }: AuthProps) => {
  const [postInputs, setPostInputs] = useState<SignUpInput>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  async function sendRequest() {
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const request = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );

      if (request.status === 200) {
        const jwt = request.data.jwt;
        const user = request.data.user;
        localStorage.setItem("token", jwt);
        localStorage.setItem("User", JSON.stringify(user));
        
        // Update auth state both through prop and storage event
        setIsAuthenticated?.(true);
        window.dispatchEvent(new Event("storage"));
        
        navigate("/blogs");
      } else {
        setError(request.data.message || "An error occurred");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred during sign in");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="p-10">
            <div className="text-4xl font-extrabold text-center">
              {type === "signin" ? "Login" : "Create an account"}
            </div>
            <div className="text-slate-400 text-lg mt-2">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                className="pl-2 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-center">
              {error}
            </div>
          )}

          <div>
            {type === "signup" ? (
              <LabelInput
                label="Name"
                placeholder="Enter your name"
                onChange={(e) =>
                  setPostInputs({ ...postInputs, name: e.target.value })
                }
              />
            ) : null}
            <LabelInput
              label="Username"
              placeholder="Enter your email"
              onChange={(e) =>
                setPostInputs({ ...postInputs, email: e.target.value })
              }
            />
            <LabelInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              onChange={(e) =>
                setPostInputs({ ...postInputs, password: e.target.value })
              }
            />

            <button
              onClick={sendRequest}
              type="button"
              className="w-full mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
                    focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm 
                    py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 
                    dark:focus:ring-gray-700 dark:border-gray-700"
              disabled={loading}
            >
              {loading ? <LoadingButton /> : type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelInput({ label, placeholder, onChange, type }: LabelInputType) {
  return (
    <div>
      <div className="p-2">
        <label className="block mb-2 text-sm font-semibold text-gray-900">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}