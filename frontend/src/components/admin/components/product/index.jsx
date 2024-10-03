import { getProductAll } from '@/api/product';
import Loader from '@/components/common/Loader';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
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
import { ProductItem } from '@/store/product';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useSetRecoilState } from 'recoil';
import ProductUpdate from './ProductUpdate';

export default function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const setProduct = useSetRecoilState(ProductItem);

  function handleEditProduct(id) {
    let temp = products.filter((e) => e.id === id);
    setProduct(temp);
  }

  async function getData() {
    setIsLoading(true);
    try {
      const result = await getProductAll();
      setProducts(result);
    } catch (error) {
      setProducts([]);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Table className="custom-td border mt-6 bg-white">
        <TableHeader>
          <TableRow className="bg-blue-100">
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">MinimumBudget</TableHead>
            <TableHead className="text-center">CommitmentTime</TableHead>
            <TableHead className="text-center">NavFee</TableHead>
            <TableHead className="text-center">AcountFeeForWebsite</TableHead>
            <TableHead className="text-center">ProfitRateCommitment</TableHead>
            <TableHead className="text-center">Bonus</TableHead>
            <TableHead className="text-center">Description</TableHead>
            <TableHead className="text-center">Action</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products &&
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="text-center">{product.name}</TableCell>
                <TableCell className="text-center">{product.minimumBudget}</TableCell>
                <TableCell className="text-center">{product.commitmentTime}</TableCell>
                <TableCell className="text-center">{product.navFee}</TableCell>
                <TableCell className="text-center">{product.acountFeeForWebsite}</TableCell>
                <TableCell className="text-center">{product.profitRateCommitment}</TableCell>
                <TableCell className="text-center">{product.bonus}</TableCell>
                <TableCell className="text-center">{product.description}</TableCell>
                <TableCell className="text-center">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="primary" onClick={() => handleEditProduct(product.id)}>
                        <FaEdit />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-screen w-[90%] h-[90%] overflow-y-auto">
                      <AlertDialogHeader className="bg-slate-100">
                        <AlertDialogTitle className="text-center pt-6">
                          <h5 className="text-[#232A46] font-semibold">Update Product</h5>
                        </AlertDialogTitle>
                        <div className="pb-4">
                          <ProductUpdate id={product.id} getData={() => getData()} />
                        </div>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel id="product-update">Cancel</AlertDialogCancel>
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
