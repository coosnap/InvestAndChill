import { getQuestionAll, getQuestionDetail } from "@/api/question";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react";
import AddQuestion from "./AddQuestion";
import Loader from "@/components/common/Loader";

export default function TableQuestion() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    setIsLoading(true);
    const result = await getQuestionAll();
    setQuestions(result);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="cursor-pointer my-8">
        <AddQuestion action="Add" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Question Content</TableHead>
            <TableHead>Answer</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {questions.map((question) => (
            <TableRow key={question.id}>
              <TableCell className="font-medium">{question.id}</TableCell>
              <TableCell>{question.questionContent}</TableCell>
              <TableCell>{question.answer}</TableCell>
              <TableCell>
                <div className="cursor-pointer">
                  <AddQuestion action="Edit" id={question.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
