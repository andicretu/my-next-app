'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LikeButton from "./like-button";
import { Button } from "@/components/ui/button";
import { UserStatisticsChart } from "./UserStatisticsChart";
import { useState } from "react";

interface HeaderProps {
  title?: string;
}

function Header({ title }: HeaderProps) {
  return <h1 className="text-4xl font-bold text-blue-500">{title || "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [showChart, setShowChart] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Header title="Develop. Preview. Ship." />

      <div className="mt-6 space-y-4">
        {names.map((name) => (
          <Card key={name} className="w-64">
            <CardHeader>
              <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">A pioneer in computing.</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-4">
        <LikeButton />
      </div>

      <Button onClick={() => setShowChart(!showChart)} className="mt-4">
        {showChart ? "Hide Chart" : "Show Chart"}
      </Button>

      {showChart && (
        <div className="mt-6 w-full max-w-lg">
          <UserStatisticsChart />
        </div>
      )}
    </div>
  );
}
