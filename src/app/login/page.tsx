"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            alert(result.error);
        } else {
            router.push("/");
        }
    };

    return (
        <div className="bg-gray-200 font-sans text-gray-700 min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-8 flex">
                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl text-center mb-12 font-thin">Company</h1>

                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                        <div className="p-8">
                            <form onSubmit={handleSubmit}>
                                {/* Email Input */}
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                    />
                                </div>

                                {/* Password Input */}
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition">
                                    Login
                                </button>
                            </form>
                        </div>

                        {/* Links */}
                        <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                            <a href="#" className="font-medium text-indigo-500 hover:underline">
                                Create account
                            </a>
                            <a href="#" className="text-gray-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
