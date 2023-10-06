import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("user"));
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    setIsLoading(true);
    try {
      const result = await fetch("http://localhost:5000/api/auth/register", {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await result.json();

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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold  font-sans text-center mb-4">Register</h1>
        <input
          className="inputBox mb-4 px-4 py-2 rounded-lg border border-gray-300 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
        />
        <input
          className="inputBox mb-4 px-4 py-2 rounded-lg border border-gray-300 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
        />
        <input
          className="inputBox mb-4 px-4 py-2 rounded-lg border border-gray-300 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button
          className="signupButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
          type="button"
          onClick={collectData}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Register;



