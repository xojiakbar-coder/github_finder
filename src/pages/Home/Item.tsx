import React from "react";
import { User } from "@/utils/users";

const Item: React.FC<User> = ({
  login = "",
  avatar_url = "",
  html_url = "",
}: User) => {
  return (
    <div className="flex flex-col w-full items-center bg-navbar_bg rounded-xl py-[24px] border border-gray-600 hover:bg-hover cursor-pointer transition duration-300 ease-in-out">
      <img
        src={avatar_url}
        alt={login}
        className="w-20 h-20 rounded-full mx-auto"
      />
      <h3 className="mt-4 text-center text-lg font-semibold text-white">
        {login}
      </h3>
      <a
        href={html_url}
        className="block text-center text-blue-500 mt-2 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Profile
      </a>
    </div>
  );
};

export default Item;
