import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { type AnswerOptions } from "../Types/dataTypes";
import Navbar from "../components/Navbar";

function Mainpage() {
  const API = import.meta.env.VITE_API_BASE_URL;

  const [query, setQuery] = useState("");
  const [answerOptions, setAnswerOptions] = useState<AnswerOptions>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    console.log("question send to backend");

    const res = await axios.post(`${API}`, { query });
    if (res && res.data) {
      setLoading(false);
      setAnswerOptions(res.data);
    }
  };

  const handleSelection = async (selection: string) => {
    setLoading(true);
    const res = await axios.post(`${API}/selection`, { selection });
    if (res && res.data) {
      setLoading(false);
      navigate("/questions", { state: { questionsData: res.data } });
    }
  };

  useEffect(() => {
    console.log("msg send");
  }, [setLoading]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Learn Anything 🚀
          </h1>

          {/* Input Section */}
          <div className="flex flex-col items-center">
            <textarea
              className="w-full min-h-40 rounded-xl border border-gray-300 bg-gray-50 p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
              placeholder="Enter a topic or question..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="mt-5 px-6 py-2 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition shadow-md"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

          {/* Options Section */}
          {loading === false ? (
            answerOptions && (
              <div className="mt-8 grid gap-4">
                {answerOptions.options?.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelection(option)}
                    className="cursor-pointer rounded-xl bg-gradient-to-r from-amber-200 to-amber-300 px-6 py-4 text-lg font-medium text-gray-800 shadow-md hover:scale-105 hover:shadow-lg transition transform"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Mainpage;
