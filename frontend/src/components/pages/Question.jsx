import { getQuestionAll } from "@/api/question";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    <div className="h-[calc(100vh-98px)] bg-[#FCFDFE]">
      <div className="mt-8 mb-12">
        <h2 className="text-3xl text-center text-[#232A46] font-semibold">FAQs - Câu hỏi thường gặp</h2>
      </div>
      <div className="flex flex-col items-center">
        <div className=" w-1/2 text-center">
          <Accordion type="single" collapsible className="w-full">
            {questionData.map((e, index) =>
              <AccordionItem key={index + 1} value={index + 1} className="bg-blue-300 text-center px-6 rounded-lg mb-6">
                <AccordionTrigger className="text-xl text-center">{e.questionContent}</AccordionTrigger>
                <AccordionContent className="text-xl">
                  {e.answer}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Question;