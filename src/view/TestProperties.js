import React, { useState, useEffect } from "react";

const TestProperties = ({
  currentTest,
  userAnswers,
  changeCurrentTest,
  timeCounter,
  score
}) => {
  const [selectedQuestions, setSelectedQuestions] = useState(0);

  useEffect(() => {
    const tempTotal = removeNull(userAnswers).length;
    setSelectedQuestions(tempTotal);
  }, [userAnswers]);

  const removeNull = (array) => {
    return array.filter((x) => x !== null);
  };

  return (
    <div className="flex flex-col max-w-[250px] xs:max-w-screen-lg w-full bg-slate-100 rounded-lg shadow-xl p-3">
      {/* Questions Answered */}
      <div className="flex flex-col space-y-2">
        <div className="border rounded-md border-slate-400">
          <p className="text-center text-slate-500 text-lg">
            Questions Answered
          </p>
        </div>
        <table className="w-full">
          <tbody className=" overflow-hidden">
            {[...Array(2)].map((_, i) => (
              <tr key={i}>
                {[...Array(5)].map((_, j) => (
                  <td
                    key={j}
                    onClick={() => changeCurrentTest(i * 5 + (j + 1) - 1)}
                    className={
                      "border border-slate-400 text-slate-500 text-center align-middle w-1/5 cursor-pointer " +
                      (currentTest === i * 5 + (j + 1)
                        ? "bg-slate-300"
                        : userAnswers[i * 5 + (j + 1) - 1] !== null
                        ? "bg-green-500 !text-white"
                        : "")
                    }
                  >
                    {i * 5 + (j + 1)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total: {selectedQuestions}</p>
      </div>

      <hr className="w-10/12 mx-auto border-slate-400 my-3" />

      {/* Time Elapsed */}

      <div className="flex flex-col space-y-2">
        <div className="border rounded-md border-slate-400">
          <p className="text-center text-slate-500 text-lg">Time Elapsed</p>
        </div>
        <div className="border rounded-md flex flex-row">
          <div className="w-1/3 text-center border-r">
            <p className="text-xl">
              {(parseInt(timeCounter / (60 * 60)) < 10 ? "0" : "") +
                (parseInt(timeCounter / (60 * 60)) % 60)}
            </p>
            <p className="text-sm">hrs</p>
          </div>
          <div className="w-1/3 text-center border-r">
            <p className="text-xl">
              {(parseInt(timeCounter / 60) < 10 ? "0" : "") +
                (parseInt(timeCounter / 60) % 60)}
            </p>
            <p className="text-sm">mins</p>
          </div>
          <div className="w-1/3 text-center">
            <p className="text-xl">
              {(timeCounter < 10 ? "0" : "") + timeCounter%60}
            </p>
            <p className="text-sm">secs</p>
          </div>
        </div>
      </div>

      <hr className="w-10/12 mx-auto border-slate-400 my-3" />

      <div className="flex flex-col space-y-2">
        <div className="border rounded-md border-slate-400">
          <p className="text-center text-slate-500 text-lg">
          Score
          </p>
        </div>
        <p>Total: {score}</p>
      </div>
      {/* In this homework, user be able to change the answer any time. So decides to don't show score at the quiz */}
    </div>
  );
};

export default TestProperties;
