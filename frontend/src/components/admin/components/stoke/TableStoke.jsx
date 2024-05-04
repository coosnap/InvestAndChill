import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { getStockAll } from "@/api/stock";
import AddStoke from "./AddStoke";

export default function TableStoke() {
  const [stokes, setStokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    setIsLoading(true);
    const result = await getStockAll();
    setStokes(result);
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
        <AddStoke action="Add" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Note</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stokes.map((stoke) => (
            <TableRow key={stoke.id}>
              <TableCell className="font-medium">{stoke.id}</TableCell>
              <TableCell>{stoke.symbol}</TableCell>
              <TableCell>{stoke.companyName}</TableCell>
              <TableCell>{stoke.note}</TableCell>
              <TableCell>
                <div className="cursor-pointer">
                  <AddStoke action="Edit" id={stoke.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
