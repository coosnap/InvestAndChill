import { deleteArticle, getArticleAll } from '@/api/article';
import Loader from '@/components/common/Loader';
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
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TabDefault } from '@/store/common';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

export default function TableArticle() {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const setTabDefault = useSetRecoilState(TabDefault);

  async function getData() {
    setIsLoading(true);
    try {
      const result = await getArticleAll();
      if (result) {
        setArticles(result);
        setIsLoading(false);
      }
    } catch (error) {
      setArticles([]);
      setIsLoading(false);
    }
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

  async function handleEditArtical(id) {
    navigate(`/admin?articalId=${id}`);
    setTabDefault('add-article');
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="w-1/4 mt-4">
        <TextField
          value={inputValue || ''}
          name="title"
          className="w-full bg-white"
          placeholder="Stoke Id"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <Table className="custom-td border mt-4">
        <TableHeader>
          <TableRow className="bg-blue-100">
            <TableHead className="text-center border">Stock Id</TableHead>
            <TableHead className="text-center border">Title</TableHead>
            <TableHead className="text-center border">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles &&
            articles.map((article) => (
              <TableRow key={article.id}>
                <TableCell className="text-center border">
                  {article?.stockId?.symbol || ''}
                </TableCell>
                <TableCell className="text-center border">{article?.title || ''}</TableCell>
                <TableCell className="h-full flex justify-center">
                  <Button variant="primary" onClick={() => handleEditArtical(article.id)}>
                    <FaEdit />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" className="ml-2">
                        <RiDeleteBinLine />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your question
                          and remove your data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-500 hover:bg-red-400"
                          onClick={() => handleDelete(article.id)}
                        >
                          Ok
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
