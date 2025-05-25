// UserList.tsx
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import GroupIcon from "@mui/icons-material/Group";
import HeaderAdmin from "../layouts/headerAdmin";
import Users from "./AddUser";

// type definition
type User = {
  name: string;
  score: number;
  email?: string;
  role?: string;
};

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const mockData: User[] = [
      { name: "Alice", score: 92, email: "alice@mail.com", role: "Admin" },
      { name: "Bob", score: 85, email: "bob@mail.com", role: "User" },
      { name: "Charlie", score: 78, email: "charlie@mail.com", role: "User" },
      { name: "Diana", score: 88, email: "diana@mail.com", role: "Moderator" },
    ];
    const timeout = setTimeout(() => {
      setUsers(mockData);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container w-screen">
      <HeaderAdmin/>
      <div className="flex w-full">
    <Users/>
    <section className="bg-white rounded-2xl shadow-md p-4">
      <div className="flex items-center mb-6">
        <GroupIcon className="text-blue-600 mr-2" />
        <h2 className="text-2xl font-semibold text-blue-800">Liste des Utilisateurs</h2>
      </div>

      <div className="divide-y">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4"
          >
            <div className="flex items-center space-x-4">
              <Avatar
                src={`https://i.pravatar.cc/150?img=${index + 1}`}
                alt={user.name}
                className="w-12 h-12 border border-gray-300 shadow-sm"
              />
              <div>
                <p className="font-semibold text-gray-800 text-base">{user.name}</p>
                <p className="text-sm text-gray-500">Score: <span className="font-medium text-green-600">{user.score}</span></p>
                {user.email && (
                  <p className="text-xs text-gray-400">{user.email}</p>
                )}
                {user.role && (
                  <p className="text-xs text-indigo-500 italic">{user.role}</p>
                )}
              </div>
            </div>
            <Button
              variant="outlined"
              size="small"
              className="rounded-xl px-4 py-1 text-sm border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Voir
            </Button>
          </div>
        ))}
      </div>
    </section>
    </div>
    </div>
  );
};
