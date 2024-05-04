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
      updateQuestion(question);
    }
    if (props.action === "Add") {
      insertQuestion(question);
    }
    return;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {props.action === "Edit" ?
          <Button onClick={handleEditQuestion}>
            <FaEdit />
          </Button>
          :
          <Button>
            Add Question
          </Button>
        }
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4 text-center">{props.action === "Edit" ? "Edit" : "Add"} Question</AlertDialogTitle>
          <AlertDialogDescription>
            {props.action === "Edit" &&
              <div className="space-y-1">
                <Label htmlFor="name">Id</Label>
                <Input
                  defaultValue={questionDetail?.id ?? ""}
                  onChange={(e) => {
                    if (props.action === "Edit") {
                      setQuestion((prev) => ({
                        ...prev,
                        id: e.target.value,
                      }));
                    }
                    setQuestion((prev) => ({
                      ...prev,
                      id: e.target.value,
                    }));
                  }} />
              </div>
            }
            <div className="space-y-1">
              <Label htmlFor="name">Question Content</Label>
              <Input
                defaultValue={questionDetail?.questionContent ?? ""}
                onChange={(e) => {
                  setQuestion((prev) => ({
                    ...prev,
                    questionContent: e.target.value,
                  }));
                }} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Answer</Label>
              <Input
                defaultValue={questionDetail?.answer ?? ""}
                onChange={(e) => {
                  setQuestion((prev) => ({
                    ...prev,
                    answer: e.target.value,
                  }));
                }} />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmitQuestion}>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AddQuestion;