"use client";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const page = () => {
  return (
    <main className="flex flex-col h-screen w-screen bg-gray-800">
      {/* <Header /> */}

      <div className="flex flex-grow items-center justify-center">
        <div className="text-white uppercase">Back-end developer</div>
      </div>
      <Navigation />
    </main>
  );
};

export default page;
