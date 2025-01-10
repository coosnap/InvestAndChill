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
import { StokeAll } from '@/store/stoke';
import { useEffect, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Virtuoso } from 'react-virtuoso';
import { useRecoilState } from 'recoil';
import AddStoke from './AddStoke';

export default function TableStoke() {
  const [isLoading, setIsLoading] = useState(true);

  const [stokes, setStokes] = useRecoilState(StokeAll);

  async function getData() {
    setIsLoading(true);
    try {
      const result = await getStockAll('article');
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
      <table className="w-full">
        <thead className="bg-[#DBEAFE]">
          <tr className="flex py-2">
            <th className="w-20 pl-4">Symbol</th>
            <th className="flex flex-1 justify-center">Company Name</th>
            <th className="w-40">Note</th>
            <th className="w-40">Action</th>
          </tr>
        </thead>
        <tbody className="relative">
          <Virtuoso
            className="!h-96 w-full !absolute bg-white"
            data={stokes}
            itemContent={(_, stoke) => (
              <tr key={stoke.id} className="flex justify-between items-center py-1 border-b">
                <td className="w-20 border-none pl-4">{stoke.symbol}</td>
                <td className="flex flex-1 justify-center border-none">{stoke.companyName}</td>
                <td className="w-40 border-none">{stoke.note}</td>
                <td className="w-40 flex justify-center border-none pr-4">
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
                </td>
              </tr>
            )}
          />
        </tbody>
      </table>
    </>
  );
}
