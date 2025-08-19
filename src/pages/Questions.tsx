import { useState } from "react";
import { questionsData } from "../sampleData/data";
function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState<number | undefined>();
  const [error, setError] = useState<number | boolean>(false);

  const handleNext = () => {
    setError(false);
    setCurrentAnswer(undefined);
    setCurrentQuestion((prev) => {
      return prev + 1;
    });
  };
  const handleAnswer = () => {
    setError(false);
    if (currentAnswer) {
      if (
        questionsData?.questions?.[currentQuestion].answers[currentAnswer]
          .isTrue === false
      ) {
        setError(currentAnswer);
      }
    }
  };

  return (
    <div className="mx-5 sm:mx-[10%] md:mx-[20%] text-center ">
      <h1 className="text-3xl mt-5 sm:text-5xl">{questionsData?.topic}</h1>
      <div className="mt-5">
        <h1 className="my-3 text-2xl">
          {questionsData?.questions?.[currentQuestion].question}
        </h1>
        <div className="grid sm:grid-cols-2 gap-3">
          {questionsData?.questions?.[currentQuestion].answers.map(
            (answer, index) => (
              <div
                key={index}
                className={` rounded-2xl cursor-pointer ${
                  currentAnswer === index ? "bg-green-400" : "bg-amber-200"
                } ${
                  error === index ? "border-2 border-red-500" : "border-none"
                }`}
                onClick={() => setCurrentAnswer(index)}
              >
                {answer?.options}
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex justify-center gap-5">
        {" "}
        <div
          className="mt-5 rounded-2xl bg-blue-500 w-20 cursor-pointer text-white"
          onClick={handleAnswer}
        >
          Submit
        </div>{" "}
        <div
          className="mt-5 rounded-2xl bg-blue-500 w-20 cursor-pointer text-white"
          onClick={handleNext}
        >
          Next
        </div>
      </div>
      {error && (
        <p>{questionsData?.questions?.[currentQuestion]?.explanation}</p>
      )}
    </div>
  );
}

export default Questions;
