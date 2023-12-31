//  import axios from "axios";
//  import { useEffect, useState } from "react";
//  import { getChatGpt } from "../helpers/ServiceChat";

//  export const ChatGptHome = () => {
//    const [chatgpt, setChatgpt] = useState([]);

//    const chat = async () => {
//      const resp = await getChatGpt();
//      console.log(resp.data);
//      setChatgpt(resp.data);
//    };

//    useEffect(() => {
//      chat();
//    }, []);

//    return (
//      <>
//        <div className="w-1/2  bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-12">
//          <form className="space-y-6">
//            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
//              Preguntas monitoreo inteligencia artificial
//            </h5>
//            <div>
//              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                Pregunta
//              </label>
//              <input
//                type="text"
//                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                placeholder="Hazme una pregunta concreta"
//                value={chatgpt[0]}
//                id="chatgpt[0]"
//              />
//            </div>

//            <button>enviar</button>

//            <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
//              {chatgpt[1]}
//            </p>
//          </form>
//        </div>
//      </>
//    );
//  };

import OpenAI from "openai";

import { useState } from "react";
const apiKey = import.meta.env.VITE_KEY_OPENAI;

const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

export const ChatGptHome = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [ans, setAns] = useState({});

  const findRes = async () => {
    if (!question) return;

    try {
      setLoading(true);
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
      });
      setAns(chatCompletion.choices[0].message);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="mx-12 h-90  bg-gray-300 border border-gray-600 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-12">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center mb-8 ">
          Preguntas monitoreo inteligencia artificial
        </h5>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Realiza una pregunta concreta
          </label>
          <input
            className="w-11/12 rounded-lg py-2 border border-slate-500 text-center ml-1 dark:text-black"
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button
            className="text-black bg-yellow-400 hover:bg-yellow-300 py-2 rounded-lg text-sm px-2"
            onClick={findRes}
          >
            Buscar
          </button>
        </div>

        {loading ? (
          <div >
            <svg
              aria-hidden="true"
              className="w-16 h-16 mx-auto mt-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="mt-12 border border-slate-500">
            <p className=" h-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              {ans.content}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
