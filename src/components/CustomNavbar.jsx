"use client";

import Link from "next/link";

const CustomNavbar = () => {
    return (
        <nav className="bg-blue-500 pt-4 pb-4 px-10 flex justify-between items-center">
            <div><h2 className="text-xl font-semibold font-mono">Work Manager</h2></div>
            <div>
                <ul className="flex gap-8">
                    <li><Link href="/">Home</Link></li>
                    <li className="text-blue-400">|</li>
                    <li><Link href="add-task">Add Task</Link></li>
                    <li className="text-blue-400">|</li>
                    <li><Link href="/show-tasks">Show Tasks</Link></li>
                </ul>
            </div>
            <div className="flex gap-4 items-center justify-center">
                <button className="bg-blue-600 p-2 rounded">Login</button>
                <Link href={"/signUp"}><button className="bg-blue-600 p-2 rounded">SignUp</button></Link>
            </div>
        </nav>
    );
};

export default CustomNavbar;