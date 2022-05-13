import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import variables from "../assets/variables/variables";
import Navbar from "./Navbar";
import { ChevronRightIcon } from "@heroicons/react/solid";

const LectureDetails = () => {
  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();

  const [lessons] = useState(variables.lessons);
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    lessons.map((data) => {
      if (data.lesson === query.get("ders") && data.unit === query.get("unite"))
        setLesson(data);
    });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <div className="max-w-screen-md w-full mx-auto flex flex-col items-center justify-start pt-10">
        {lesson === null && <p>Böyle bir içerik bulunmuyor...</p>}
        {lesson !== null && (
          <div>
            <div className="flex flex-col space-y-5">
              <h3>{query.get("ders")}</h3>
              <div className="bg-slate-100 rounded-xl p-5">
                <strong>{lesson.unit}</strong>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
              </div>
            </div>
            <div className="w-full flex justify-end mt-5">
              <button className="flex flex-row bg-green-500 text-white text-lg font-semibold pl-5 pr-3 py-2 rounded-xl hover:bg-green-600 transition-all">
                Teste Git
                <ChevronRightIcon className="ml-2 w-7" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LectureDetails;
