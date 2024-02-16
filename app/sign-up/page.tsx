"use client";
import { useAuth } from "@common/auth/AuthProvider";
import Loader from "@common/utils/Loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import userbase from "userbase-js";
import "../globals.css";

export default function SignupForm() {
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

    async function handleSignup() {
        setIsLoading(true);

        try {
            const response2 = await userbase.signUp({
                username,
                password,
                rememberMe: "local",
                email: "client@nyu.edu",
                profile: {
                    scwAddress: "0x",
                    pk: "0x",
                    v: "1",
                },
            });
            const userInfo = {
                username: username,
                isLoggedIn: true,
                userId: response2.userId,
                scwAddress: "0x",
            };

            login(userInfo);
            router.push("/");
        } catch {
            setIsLoading(false);
            setError(error);
        }
    }

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100 font-mono">
                    <div className="w-full max-w-sm">
                        <form
                            className="bg-white rounded px-8 pt-6 pb-8 mb-24 font-mono"
                            onSubmit={(e) => handleSignup(e)}
                        >
                            <label
                                className="block text-center text-[#29233c] font-bold mb-4 text-xl"
                                htmlFor="username"
                            >
                                Sign Up
                            </label>
                            <div className="mb-4 text-xl">
                                <input
                                    className="input input-bordered input-primary w-full bg-white text-black"
                                    onChange={(e) => setUsername(e.target.value)}
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-6 text-xl">
                                <input
                                    className="input input-bordered input-primary w-full bg-white text-black"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
                            <div className="flex items-center justify-end">
                                <div
                                    className="link link-secondary cursor-pointer"
                                    onClick={() => router.push("/login")}
                                >
                                    Already have an account?
                                </div>
                                <button type="button" className="btn btn-active text-white" onClick={() => handleSignup()}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}