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
import Loader from "@/components/common/Loader";
import { deleteStock, getStockAll } from "@/api/stock";
import AddStoke from "./AddStoke";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";

export default function TableStoke() {
  const [stokes, setStokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    setIsLoading(true);
    try {
      const result = await getStockAll();
      setStokes(result);
    } catch (error) {
      setStokes([]);
    }
    setIsLoading(false);
  }

  async function handleDelete(id) {
    setIsLoading(true);
    let result = await deleteStock(id);
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
        <AddStoke render={getData} action="Add" />
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow className="bg-blue-100">
            <TableHead className="text-center">Symbol</TableHead>
            <TableHead className="text-center">Company Name</TableHead>
            <TableHead className="text-center">Note</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stokes.map((stoke) => (
            <TableRow key={stoke.id}>
              <TableCell className="text-center">{stoke.symbol}</TableCell>
              <TableCell className="text-center">{stoke.companyName}</TableCell>
              <TableCell className="text-center">{stoke.note}</TableCell>
              <TableCell className="flex justify-center">
                <div className="cursor-pointer">
                  <AddStoke render={getData} action="Edit" id={stoke.id} />
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
                      <AlertDialogAction className="bg-red-500 hover:bg-red-400" onClick={() => handleDelete(stoke.id)}>Ok</AlertDialogAction>
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
