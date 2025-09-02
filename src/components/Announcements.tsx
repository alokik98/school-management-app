"use client";

import Image from "next/image";

// TEMPORARY EVENTS
const events = [
    {
        id: 1,
        title: "Math Exam",
        time: "10:00 AM - 12:00 PM",
        description: "Final math exam for grade 10",
    },
    {
        id: 2,
        title: "Parent-Teacher Meeting",
        time: "2:00 PM - 4:00 PM",
        description: "Discuss student progress and concerns",
    },
    {
        id: 3,
        title: "Science Fair",
        time: "All Day",
        description: "Annual science fair showcasing student projects",
    }
]

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400"> View All</span>
      </div>
      <div className="flex flex-col gap-4  mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">lorem ipsum</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-02-01</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quas ab blanditiis tempora deleniti consectetur</p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">lorem ipsum</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-02-01</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quas ab blanditiis tempora deleniti consectetur</p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">lorem ipsum</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-02-01</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quas ab blanditiis tempora deleniti consectetur</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
