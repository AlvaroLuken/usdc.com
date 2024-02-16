"use client";
import { useAuth } from "@common/auth/AuthProvider";
import Loader from "@common/utils/Loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import userbase from "userbase-js";
import "../globals.css";

export default function LoginForm() {
  const { user, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user?.isLoggedIn) {
      router.push("/");
    }
  }, []);

  const handleLogin = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await userbase.signIn({
        username,
        password,
        rememberMe: "local",
      });
      const userInfo = {
        username: username,
        isLoggedIn: true,
        userId: response.userId,
        userScwAddress: response.profile?.scwAddress,
      };
      login(userInfo);
      router.push("/?login=success");
      console.log(`Userbase login succesful. ✅ Welcome, ${username}!`);
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message); // Update the error state
      console.error(error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex mt-24 justify-center h-screen bg-[#faf7ff]">
          <div className="w-full max-w-sm">
            <form
              className="bg-white rounded-md border-2 px-8 pt-6 pb-8 mb-24 font-mono"
              onSubmit={handleLogin}
            >
              <label
                className="block text-center text-[#29233c] font-bold mb-4 text-xl"
                htmlFor="email"
              >
                Login
              </label>
              <div className="mb-4 text-xl ">
                <input
                  className="input input-bordered input-primary w-full bg-white text-black"
                  onChange={(e) => setUsername(e.target.value)}
                  id="email"
                  type="text"
                  placeholder="Email"
                  value={username}
                />
              </div>
              <div className="mb-6 text-xl ">
                <input
                  className="input input-bordered input-primary w-full bg-white text-black"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
              <div className="flex items-center justify-between">
                <div
                  className="link link-secondary cursor-pointer"
                  onClick={() => router.push("/sign-up")}
                >
                  No account yet?
                </div>
                <button onClick={handleLogin} className="btn btn-active text-white">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}