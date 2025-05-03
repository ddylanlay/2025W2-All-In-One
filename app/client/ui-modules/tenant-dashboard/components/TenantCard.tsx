// components/TenantCard.tsx
import React from "react";

interface TenantCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  progressPercentage?: number;
}

const TenantCard: React.FC<TenantCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  buttonText,
  onButtonClick,
  progressPercentage,
}) => {
  return (
    <div className="rounded-lg border border-gray-200 p-6 bg-white shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-700 font-medium">{title}</h3>
        {icon && <span className="text-gray-500">{icon}</span>}
      </div>

      <div className="mb-2">
        <div className="text-3xl font-bold">{value}</div>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      {progressPercentage !== undefined && (
        <div className="h-2 bg-gray-200 rounded-full mb-4">
          <div
            className="h-full bg-black rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      )}

      {buttonText && (
        <button
          onClick={onButtonClick}
          className="w-full py-2 px-4 border border-gray-300 rounded-md text-center hover:bg-gray-50 transition-colors"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default TenantCard;
