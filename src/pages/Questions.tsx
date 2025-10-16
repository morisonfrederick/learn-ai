import { useState } from "react";
import { useLocation } from "react-router-dom";
import { type QuestionData } from "../Types/dataTypes";

function Questions() {
  /**
   * Tracks the index of the current question being displayed.
   */
  const [currentQuestion, setCurrentQuestion] = useState(0);

  /**
   * Stores the index of the selected answer option for the current question.
   * Undefined means no answer has been selected yet.
   */
  const [currentAnswer, setCurrentAnswer] = useState<number | undefined>();

  /**
   * Used for error handling and showing feedback.
   * - null → no error
   * - number → indicates the wrong answer index (used for highlighting)
   */
  const [error, setError] = useState<null | number>(null);

  /**
   * Retrieves state passed via React Router navigation.
   * Expects an object with `questionsData` of type QuestionData.
   */
  const location = useLocation();
  const state = location.state as { questionsData: QuestionData };
  const questionsData = state?.questionsData;

  /**
   * Go to the next question.
   * Resets error and clears the selected answer.
   */
  const handleNext = () => {
    if (currentQuestion < 4) {
      setError(null);
      setCurrentAnswer(undefined);
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  /**
   * Go to the previous question if not at the first one.
   * Resets error state.
   */
  const handlePrev = () => {
    setError(null);
    if (currentQuestion > 0) setCurrentQuestion((prev) => prev - 1);
  };

  /**
   * Handles answer submission:
   * - If no option is selected, nothing happens.
   * - If the selected answer is wrong, sets error with that index.
   * - If correct, nothing happens (could be extended later for scoring).
   */
  const handleAnswer = () => {
    setError(null);
    if (currentAnswer !== undefined) {
      if (
        questionsData?.questions?.[currentQuestion].answers[currentAnswer]
          .isTrue === false
      ) {
        setError(currentAnswer + 1); // mark wrong answer index
      }
    }
  };

  /**
   * Highlights the correct answer for the current question.
   * Finds the index of the true answer and updates currentAnswer.
   */
  const getCorrectAnswer = () => {
    setError(10); // custom value (not tied to options) for showing explanation
    const answers = questionsData?.questions?.[currentQuestion]?.answers;

    if (!answers) return;

    const correctAnswerIndex = answers.findIndex(
      (answer) => answer.isTrue === true
    );

    // Only set if a valid index is found (>=0)
    if (correctAnswerIndex >= 0) {
      setCurrentAnswer(correctAnswerIndex);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center px-4">
      {questionsData ? (
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8">
          {/* Quiz Topic */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
            {questionsData?.topic}
          </h1>

          {/* Current Question */}
          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6 text-center">
              {currentQuestion + 1}.{" "}
              {questionsData?.questions?.[currentQuestion].question}
            </h2>

            {/* Answer Options */}
            <div className="grid sm:grid-cols-2 gap-4">
              {questionsData?.questions?.[currentQuestion].answers.map(
                (answer, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentAnswer(index)}
                    className={`rounded-2xl px-6 py-4 text-lg font-medium cursor-pointer transition shadow-md
                      ${
                        currentAnswer === index
                          ? "bg-green-400 text-white"
                          : "bg-amber-200 text-gray-800 hover:bg-amber-300"
                      }
                      ${
                        error === index + 1
                          ? "border-2 border-red-500"
                          : "border border-transparent"
                      }`}
                  >
                    {answer?.options}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="sm:flex grid grid-cols-2 sm:justify-center m-2 gap-2 sm:gap-6 sm:mt-8">
            <button
              className="px-6 py-2 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition shadow-md"
              onClick={getCorrectAnswer}
            >
              Show
            </button>
            <button
              className="px-6 py-2 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition shadow-md"
              onClick={handleAnswer}
            >
              Submit
            </button>
            <button
              className="px-6 py-2 rounded-full bg-blue-500 text-white font-semibold  hover:bg-blue-600 transition shadow-md"
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              className="px-6 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition shadow-md"
              onClick={handleNext}
            >
              Next
            </button>
          </div>

          {/* Explanation Section (Shown when error or Show Answer is triggered) */}
          {error && (
            <p className="mt-6 text-red-600 bg-red-100 p-4 rounded-xl text-center shadow-inner">
              {questionsData?.questions?.[currentQuestion]?.explanation}
            </p>
          )}
        </div>
      ) : (
        // Fallback if no question data is loaded
        <div className="text-lg text-gray-700 font-medium">Loading...</div>
      )}
    </div>
  );
}

export default Questions;
