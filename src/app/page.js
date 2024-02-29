"use client";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const page = () => {
  return (
    <main className="flex flex-col h-screen w-screen bg-gray-500">
      {/* <Header /> */}

      <div className="flex flex-grow w-full">
        <div className="text-red-500">div1</div>
      </div>
      <Navigation />
    </main>
  );
};

export default page;
