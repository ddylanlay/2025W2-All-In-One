import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface ProfileFooterProps {
  firstName: string;
  lastName: string;
  title: string;
  profileImage?: string;
}

export function ProfileFooter({ firstName, lastName, title, profileImage }: ProfileFooterProps): React.JSX.Element {
  const name = `${firstName} ${lastName}`;

  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <Avatar className="w-12 h-12">
        <AvatarImage
          src={profileImage}
          alt={name}
          className="object-cover"
        />
        <AvatarFallback className="bg-gray-200" />
      </Avatar>
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-base text-gray-500 font-medium">{title}</div>
      </div>
    </div>
  );
}
