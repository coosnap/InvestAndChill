import { getQuestionAll } from "@/api/question";
import { useEffect, useState } from "react";

function Question() {
  const [questionData, setQuestionData] = useState([]);

  async function getData() {
    let question = await getQuestionAll();
    setQuestionData(question);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="h-[100vh] px-10 py-10 bg-[#FCFDFE]">
      <div className="mt-8 mb-12">
        <h2 className="text-3xl text-center text-[#232A46] font-semibold">FAQs - Câu hỏi thường gặp</h2>
      </div>
      {questionData.map((e, index) =>
        <div key={e.id} className="mb-8 flex justify-center">
          <div className="w-1/2 p-4 border rounded-xl bg-[#232A46]">
            <div tabIndex={index} className="collapse collapse-plus">
              <div className="collapse-title text-white text-2xl font-semibold">
                {e.questionContent}
              </div>
              <div className="collapse-content">
                <p className="text-white text-lg">{e.answer}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;