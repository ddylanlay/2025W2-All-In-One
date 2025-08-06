import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../../theming-shadcn/Button";
import { useRoleBasedNavigation } from "../hooks/useRoleBasedNavigation";

interface UnauthorizedPageProps {
  requiredRole?: string;
  currentRole?: string;
}

export const UnauthorizedPage: React.FC<UnauthorizedPageProps> = ({
  requiredRole,
  currentRole,
}) => {
  const navigate = useNavigate();
  const { getDashboardPath } = useRoleBasedNavigation();

  const handleGoToDashboard = () => {
    navigate(getDashboardPath());
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Access Denied
        </h1>
        
        <p className="text-gray-600 mb-6">
          You don't have permission to access this page.
          {requiredRole && currentRole && (
            <span className="block mt-2 text-sm">
              Required role: <span className="font-semibold">{requiredRole}</span>
              <br />
              Your role: <span className="font-semibold">{currentRole}</span>
            </span>
          )}
        </p>
        
        <div className="space-y-3">
          <Button onClick={handleGoToDashboard} className="w-full">
            Go to Dashboard
          </Button>
          <Button variant="outline" onClick={handleGoHome} className="w-full">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}; 