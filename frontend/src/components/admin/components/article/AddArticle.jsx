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
import { getArticleDetail, insertArticle, updateArticle } from "@/api/article";
import { Textarea } from "@/components/ui/textarea";

function AddArticle(props) {
  const [article, setArticle] = useState({});
  const [articleDetail, setArticleDetail] = useState({});

  async function handleEditArticle() {
    const result = await getArticleDetail(props.id);
    if (result) {
      setArticleDetail(result);
      setArticle(result);
    };
  }

  async function handleSubmitArticle() {
    if (!article) return;
    if (props.action === "Edit") {
      let temp = { ...articleDetail };
      setArticle(prev => ({ ...prev, ...temp }));
      await updateArticle(article);
      props.render();
    }
    if (props.action === "Add") {
      await insertArticle(article);
      props.render();
    }
    return;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {props.action === "Edit" ?
          <Button onClick={handleEditArticle}>
            <FaEdit />
          </Button>
          :
          <Button>
            Add Article
          </Button>
        }
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4 text-center">{props.action === "Edit" ? "Edit" : "Add"} Article</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4">
            {props.action === "Edit" &&
              <span className="space-y-1">
                <Label htmlFor="name">Id</Label>
                <Input
                  disabled
                  defaultValue={articleDetail?.id ?? ""}
                />
              </span>
            }
            <span className="space-y-1">
              <Label htmlFor="name">Title</Label>
              <Textarea
                defaultValue={articleDetail?.title ?? ""}
                onChange={(e) => {
                  setArticle((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }));
                }} />
            </span>
            <span className="space-y-1">
              <Label htmlFor="username">Content</Label>
              <Textarea
                className="h-[125px]"
                defaultValue={articleDetail?.content ?? ""}
                onChange={(e) => {
                  setArticle((prev) => ({
                    ...prev,
                    content: e.target.value,
                  }));
                }} />
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmitArticle}>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AddArticle;