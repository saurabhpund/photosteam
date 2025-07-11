import React from "react";
import Header from "../../components/Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const Register = () => {
  const [error, setError] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    const baseUrl = "http://localhost:8080";
    const payload = { email, password };

    axios
      .post(`${baseUrl}/api/auth/register`, payload, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log("Registration successful:", response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        setError("Registration failed. Try again.");
      });
  };

  React.useEffect(() => {
    document.title = "Register | PhotoSteam";
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Link className="pt-5 block text-2xl cursor-pointer font-bold" to={"/"}>PhotoSteam</Link>
        <section className="container mx-auto p-8  grid place-items-center justify-center min-h-screen">
          <div className="lg:min-w-5xl sm:min-w-lg flex shadow">
            

            {/* Left Side */}
            <div className="bg-auth-2 w-1/2 hidden lg:block ">
            
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center justify-center lg:1/2  min-w-sm  mx-auto py-4 lg:py-20">
              <form
                className="bg-white w-full px-6 rounded"
                onSubmit={handleSubmit}
              >
                {error && (
                  <p className="text-red-500 text-center mb-4">{error}</p>
                )}
                <h1 className="text-4xl text-center font-semibold mb-6">Create Account</h1>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-200 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="•••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 bg-gray-200 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black cursor-pointer  text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                  Signup
                </button>
              </form>
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="/auth/login"
                    className="text-blue-500 hover:underline"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
        <Footer />
    </>
  );
};

export default Register;
