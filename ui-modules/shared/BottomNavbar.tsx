import React from "react";
import { Link } from "react-router";

export function BottomNavBar(): React.JSX.Element {
  return (
    <nav className="fixed bottom-0 left-0 w-full p-4 bg-gray-800 text-white flex gap-4 justify-center z-50 border-t border-gray-700">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
    </nav>
  );
}