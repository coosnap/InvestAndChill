import { deleteQuestion, getQuestionAll } from "@/api/question";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react";
import AddQuestion from "./AddQuestion";
import Loader from "@/components/common/Loader";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";

export default function TableQuestion() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    setIsLoading(true);
    try {
      const result = await getQuestionAll();
      setQuestions(result);
    } catch (error) {
      setQuestions([]);
    }
    setIsLoading(false);
  }

  async function handleDelete(id) {
    setIsLoading(true);
    try {
      let result = await deleteQuestion(id);
      if (result) {
        getData();
      }
    } catch (error) {
      return error;
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      {isLoading && <Loader />}
      <div className="cursor-pointer my-8">
        <AddQuestion render={getData} action="Add" />
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow className="bg-blue-100">
            <TableHead className="text-center border">Question Content</TableHead>
            <TableHead className="text-center border">Answer</TableHead>
            <TableHead className="text-center border">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {questions && questions.map((question) => (
            <TableRow key={question.id}>
              <TableCell className="text-center border">{question.questionContent}</TableCell>
              <TableCell className="text-center border">{question.answer}</TableCell>
              <TableCell className="flex">
                <div className="cursor-pointer">
                  <AddQuestion render={getData} action="Edit" id={question.id} />
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="ml-2"><RiDeleteBinLine /></Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        question and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-red-500 hover:bg-red-400" onClick={() => handleDelete(question.id)}>Ok</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
