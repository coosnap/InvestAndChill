import { getQuestionAll } from "@/api/question";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";

function Question() {
  const [questionData, setQuestionData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    setIsLoading(true);
    try {
      let question = await getQuestionAll();
      if (question) {
        setQuestionData(question);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      {isLoading && <Loader />}
      <div className="h-[calc(100vh-98px)] bg-[#FCFDFE]">
        <div className="pt-8 mb-12">
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
    </>
  );
}

export default Question;