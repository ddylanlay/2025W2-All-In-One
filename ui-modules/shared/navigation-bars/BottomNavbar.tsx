import React from "react";
import { Link } from "react-router";
import { PropManagerLogoIcon } from "../icons/PropManagerLogoIcon";

export function BottomNavbar(): React.JSX.Element {
  return (
    <footer className="bg-[#111827] text-white py-4 mt-8">
      <div className="flex justify-between items-center px-6">
        {/* Left-aligned logo */}
        <Link to="/">
          <div className="flex items-center gap-2">
            <PropManagerLogoIcon variant="light" />
            <span className="geist-h1">Prop Manager</span>{" "}
            {/* Applying Geist Header 1 */}
          </div>
        </Link>

        {/* Right-aligned links */}
        <div className="flex gap-6 ml-auto">
          <Link to="/about" className="hover:underline geist-body">
            About
          </Link>
          <Link to="/contact" className="hover:underline geist-body">
            Contact
          </Link>
          <Link to="/privacy-policy" className="hover:underline geist-body">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline geist-body">
            Terms
          </Link>
        </div>
      </div>

      {/* Centered copyright text */}
      <div className="text-center mt-4">
        <p className="geist-body">© 2025 PropManager. All rights reserved.</p>
      </div>
    </footer>
  );
}
