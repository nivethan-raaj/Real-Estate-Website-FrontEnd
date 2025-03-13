import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import React from "react";
interface User {
  id: number;
  name: string;
  username: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <main className="flex flex-col justify-center">
      <div className="p-3">
        <Header />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 p-3">
        {users.map((user) => (
          <Card
            className="border-black text-center gap-y-5 rounded-md"
            key={user.id}
          >
            <CardHeader className="text-red-500 bg-slate-500 pb-5 mb-4 rounded-t-md">
              {user.name}
            </CardHeader>
            <CardTitle className="pt-3">{user.username}</CardTitle>
            <CardDescription>How are you</CardDescription>
            <CardContent>What are you doin</CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </main>
  );
};

export default UserPage;
