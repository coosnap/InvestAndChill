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
import AddArticle from "./AddArticle";
import Loader from "@/components/common/Loader";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { deleteArticle, getArticleAll } from "@/api/article";

export default function TableArticle() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    setIsLoading(true);
    const result = await getArticleAll();
    setArticles(result);
    setIsLoading(false);
  }

  async function handleDelete(id) {
    setIsLoading(true);
    let result = await deleteArticle(id);
    if (result) {
      getData();
    }
    setIsLoading(false);
    return;
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
        <AddArticle render={getData} action="Add" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell className="font-medium">{article.id}</TableCell>
              <TableCell>{article.title}</TableCell>
              <TableCell className="w-[50%]">{article.content}</TableCell>
              <TableCell className="flex">
                <div className="cursor-pointer">
                  <AddArticle render={getData} action="Edit" id={article.id} />
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
                      <AlertDialogAction className="bg-red-500 hover:bg-red-400" onClick={() => handleDelete(article.id)}>Ok</AlertDialogAction>
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