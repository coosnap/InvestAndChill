import { deleteStock, getStockAll } from '@/api/stock';
import Loader from '@/components/common/Loader';
import {
  AlertDialog,
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
import { StokeAll } from '@/store/stoke';
import { useEffect, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useRecoilState } from 'recoil';
import AddStoke from './AddStoke';

export default function TableStoke() {
  const [isLoading, setIsLoading] = useState(true);

  const [stokes, setStokes] = useRecoilState(StokeAll);

  async function getData() {
    setIsLoading(true);
    try {
      const result = await getStockAll();
      console.log(result);
      setStokes(result);
    } catch (error) {
      setStokes([]);
    }
    setIsLoading(false);
  }

  async function handleDelete(id) {
    setIsLoading(true);
    try {
      let result = await deleteStock({ id });
      document.getElementById('stock-delete-cancel')?.click();
      if (result) {
        getData();
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="my-8">
        <AddStoke render={() => getData()} action="Add" />
      </div>
      <Table className="custom-td border bg-white">
        <TableHeader>
          <TableRow className="bg-blue-100">
            <TableHead className="text-center">Symbol</TableHead>
            <TableHead className="text-center">Company Name</TableHead>
            <TableHead className="text-center">Note</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stokes &&
            stokes.map((stoke) => (
              <TableRow key={stoke.id}>
                <TableCell className="text-center">{stoke.symbol}</TableCell>
                <TableCell className="text-center">{stoke.companyName}</TableCell>
                <TableCell className="text-center">{stoke.note}</TableCell>
                <TableCell className="flex justify-center">
                  <div className="cursor-pointer flex">
                    <AddStoke render={getData} action="Edit" id={stoke.id} />
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" className="ml-2">
                        <RiDeleteBinLine />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Cảnh báo</AlertDialogTitle>
                        <AlertDialogDescription>
                          Bạn có muốn xóa công ty này không?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel id="stoke-delete-cancel">Cancel</AlertDialogCancel>
                        <Button variant="destructive" onClick={() => handleDelete(stoke.id)}>
                          Ok
                        </Button>
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
