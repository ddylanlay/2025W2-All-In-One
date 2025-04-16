import React from "react";
import { Link } from "react-router";

export function Navbar(): React.JSX.Element {
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/test" className="hover:underline">Test</Link>
    </nav>
  );
}