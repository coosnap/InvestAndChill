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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { getQuestionDetail, insertQuestion, updateQuestion } from "@/api/question";

function AddQuestion(props) {
  const [question, setQuestion] = useState({});
  const [questionDetail, setQuestionDetail] = useState({});

  async function handleEditQuestion() {
    const result = await getQuestionDetail(props.id);
    if (result) {
      setQuestionDetail(result);
      setQuestion(result);
    };
  }

  async function handleSubmitQuestion() {
    if (!question) return;
    if (props.action === "Edit") {
      let temp = { ...questionDetail };
      setQuestion(prev => ({ ...prev, ...temp }));
      await updateQuestion(question);
      document.getElementById("question-cancel")?.click();
      props.render();
    }
    if (props.action === "Add") {
      await insertQuestion(question);
      document.getElementById("question-cancel")?.click();
      props.render();
    }
    return;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {props.action === "Edit" ?
          <Button variant="primary" onClick={handleEditQuestion}>
            <FaEdit />
          </Button>
          :
          <Button variant="primary">
            Add Question
          </Button>
        }
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4 text-center">{props.action === "Edit" ? "Edit" : "Add"} Question</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4">
            {props.action === "Edit" &&
              <span className="space-y-1">
                <Label htmlFor="name">Id</Label>
                <Input
                  disabled
                  defaultValue={questionDetail?.id ?? ""}
                />
              </span>
            }
            <span className="space-y-1">
              <Label htmlFor="name">Question Content</Label>
              <Input
                defaultValue={questionDetail?.questionContent ?? ""}
                onChange={(e) => {
                  setQuestion((prev) => ({
                    ...prev,
                    questionContent: e.target.value,
                  }));
                }} />
            </span>
            <span className="space-y-1">
              <Label htmlFor="username">Answer</Label>
              <Input
                defaultValue={questionDetail?.answer ?? ""}
                onChange={(e) => {
                  setQuestion((prev) => ({
                    ...prev,
                    answer: e.target.value,
                  }));
                }} />
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel id="question-cancel">Cancel</AlertDialogCancel>
          <Button variant="primary" onClick={handleSubmitQuestion}>Save</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AddQuestion;