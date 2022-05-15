import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import variables from "../assets/variables/variables";
import Navbar from "./Navbar";
import TestProperties from "./TestProperties";
import { ChevronRightIcon } from "@heroicons/react/solid";

const TestPage = () => {
  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();

  const [tests, setTests] = useState(variables.tests);
  const [currentTest, setCurrentTest] = useState(0);
  const [userAnswers, setUserAnswers] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [totalQuestionNumber, setTotalQuestionNumber] = useState(10);
  const [timeCounter, setTimeCounter] = useState(1);

  // Variables about choice type questions
  const [randomChoiceArray, setRandomChoiceArray] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState(null);
  let choiceArray = [];

  // Variables about fill type questions
  const [fillSentence, setFillSentence] = useState([]);
  const [randomFillArray, setRandomFillArray] = useState([]);
  const [selectedFill, setSelectedFill] = useState(null);

  const [mapReady, setMapReady] = useState(false);
  const [dataReady, setDataReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (variables.lessonNames.includes(query.get("ders"))) GetTestsWithLesson();
    else setErrorMessage("Böyle bir ders bulunamadı!");
  }, []);

  useEffect(() => {
    if (mapReady) setDataReady(true);
  }, [tests]);

  useEffect(() => {
    if (tests.length !== 0) {
      if (tests[currentTest].type === "choice") {
        choiceArray.push(tests[currentTest].answer1);
        if (tests[currentTest].answer1 !== "")
          choiceArray.push(tests[currentTest].answer2);
        if (tests[currentTest].answer2 !== "")
          choiceArray.push(tests[currentTest].answer3);
        if (tests[currentTest].answer3 !== "")
          choiceArray.push(tests[currentTest].answer4);
        if (tests[currentTest].answer4 !== "")
          choiceArray.push(tests[currentTest].answer5);
        setRandomChoiceArray(shuffle(choiceArray));
      }
      // else if (tests[currentTest].type === "fill") {
      //   setFillSentence(
      //     tests[currentTest].question.replace(/\+.*\+/, "......")
      //   );
      //   let fillAnswerArray = shuffle(tests[currentTest].answer.split(","));
      //   fillAnswerArray = fillAnswerArray.filter((e) => String(e).trim());
      //   setRandomFillArray(fillAnswerArray);
      // }
      //   else if (tests[currentTest].type === "calculation") {

      //   }
    }
  }, [currentTest, tests]);

  // If time's up
  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (currentTest <= 10) {
        setTimeCounter(timeCounter + 1);
      }
    }, 1000);
    return () => clearTimeout(timer1);
  }, [timeCounter]);

  // Shuffle array
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const GetTestsWithLesson = async () => {
    let tempTests = [];
    var promise1 = tests.map((test, index) => {
      if (test.lesson === query.get("ders")) tempTests.push(test);
    });
    await Promise.all(promise1).then(() => {
      setMapReady(true);
      setTests(tempTests);
      setTotalQuestionNumber(tempTests.length);
    });
  };

  const changeSelectedChoice = (i) => {
    setSelectedChoice(i);
  };

  const ToAnswerQuestion = (answer, index) => {
    if (answer !== undefined) {
      let tempUserAnswers = [...userAnswers];
      tempUserAnswers[index] = answer;
      setUserAnswers(tempUserAnswers);
      setSelectedChoice(null);
    }
    setCurrentTest(currentTest + 1);
  };

  useEffect(() => {
    console.log(userAnswers);
  }, [userAnswers]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <div className="max-w-screen-lg p-3 w-full mx-auto flex flex-col items-center justify-start pt-10">
        {errorMessage !== null && <p>{errorMessage}</p>}
        {errorMessage === null && !dataReady && <p>Yükleniyor...</p>}
        {errorMessage === null && dataReady && (
          <div className="max-w-screen-lg w-full flex flex-row space-x-5 xs:space-x-0 xs:space-y-2 xs:flex-col">
            <div className="max-w-screen-lg w-full flex flex-col">
              <div className="font-bold xs:font-semibold bg-gradient-to-tr from-pink-500/90 to-sky-500/90 px-5 xs:px-3 py-3 xs:py-2 left-0 absolute text-white w-fit ml-auto rounded-r-xl">
                <h1 className="xs:text-base">
                  {query.get("ders").toUpperCase().replace("-", " ")}
                </h1>
              </div>

              <div className="mt-16 max-w-screen-lg w-full p-5 bg-slate-100 rounded-xl shadow-xl">
                <div className="max-w-screen-lg w-full">
                  <div className="h-12 text-idlac-blue rounded-lg bg-idlac-blue-soft/10 flex items-center justify-center">
                    {currentTest + 1 + ". " + tests[currentTest].title}
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="m-5">{tests[currentTest].question}</p>

                    {/* Choice Type Question UI */}
                    {tests[currentTest].type === "choice" && (
                      <div className="bg-idlac-blue-soft/10 mx-5 p-3 rounded-lg space-y-1">
                        {randomChoiceArray.map((sentence, i) => (
                          <div
                            key={i}
                            className="font-semibold flex items-center flex-row p-1 cursor-pointer"
                            onClick={() => changeSelectedChoice(i)}
                          >
                            <div
                              className={
                                "border rounded-full w-4 h-4 border-slate-500 mr-2 " +
                                (selectedChoice === i ||
                                (userAnswers[currentTest] !== null &&
                                  userAnswers[currentTest] === sentence)
                                  ? "bg-slate-400/95"
                                  : "bg-white")
                              }
                            />
                            <p>{sentence}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <button
                      className="mt-5 flex flex-row bg-gradient-to-tr from-green-500 to-teal-500 text-white font-semibold pl-5 pr-3 py-2 rounded-xl hover:from-green-600 hover:to-teal-600 transition-all"
                      onClick={() =>
                        ToAnswerQuestion(
                          randomChoiceArray[selectedChoice],
                          currentTest
                        )
                      }
                    >
                      {currentTest !== totalQuestionNumber - 1
                        ? "İleri"
                        : "Testi Bitir"}
                      <ChevronRightIcon className="ml-2 w-6" />
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center justify-center mx-4"></div>
                </div>
              </div>
            </div>
            <TestProperties
              currentTest={currentTest + 1}
              userAnswers={userAnswers}
              changeCurrentTest={setCurrentTest}
              timeCounter={timeCounter}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
