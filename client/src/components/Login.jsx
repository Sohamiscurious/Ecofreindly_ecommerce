import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("user"));
    if (auth) {
      navigate("/");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const result = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await result.json();

      if (result.status === 500) {
        let errorMessage = data.error;
        alert(errorMessage);
      }
      if (result.status === 400) {
        let errorMessages = data.errors.map((error) => error.msg).join("\n");
        alert(errorMessages);
      } else if (result.status === 404) {
        let errorMessage = data.error;
        alert(errorMessage);
      } else if (result.status === 200) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while logging in.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-purple-500"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h1 className="text-3xl font-semibold text-center mb-4">Login</h1>
            <input
              className="inputBox mb-4 px-4 py-2 rounded-lg border border-gray-300 w-full"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <input
              className="inputBox mb-4 px-4 py-2 rounded-lg border border-gray-300 w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <button
              className="loginButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
              type="button"
              onClick={handleLogin}
            >
              LOGIN
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
