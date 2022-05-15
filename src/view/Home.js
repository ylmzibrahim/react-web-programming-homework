import React, { useState } from "react";
import Navbar from "./Navbar";
import Slides from "./Slides";
import variables from "../assets/variables/variables";

const Home = () => {
  const [lessons] = useState(variables.lessons);
  const [lessonNames] = useState(variables.lessonNames);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <div className="max-w-screen-lg w-full mx-auto p-3">
        <h1 className="text-center font-bold my-8">DERSLER</h1>
        {/* Shows all lectures on different slide */}
        {lessonNames.length !== 0 &&
          lessonNames.map((lessonName, index) => (
            <Slides key={index} lessons={lessons} lessonName={lessonName} />
          ))}

      </div>
    </div>
  );
};

export default Home;
