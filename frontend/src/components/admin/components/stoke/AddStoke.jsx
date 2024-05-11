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
import { getStokeDetail, insertStoke, updateStoke } from "@/api/stock";

function AddStoke(props) {
  const [stoke, setStoke] = useState({});
  const [stokeDetail, setStokeDetail] = useState({});

  async function handleEditStoke() {
    const result = await getStokeDetail(props.id);
    if (result) {
      setStokeDetail(result);
      setStoke(result);
    };
  }

  async function handleSubmitStoke() {
    if (!stoke) return;
    if (props.action === "Edit") {
      let temp = { ...stokeDetail };
      setStoke(prev => ({ ...prev, ...temp }));
      await updateStoke(stoke);
      props.render();
    }
    if (props.action === "Add") {
      await insertStoke(stoke);
      props.render();
    }
    return;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {props.action === "Edit" ?
          <Button onClick={handleEditStoke}>
            <FaEdit />
          </Button>
          :
          <Button>
            Add Stoke
          </Button>
        }
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4 text-center">{props.action === "Edit" ? "Edit" : "Add"} Stoke</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4">
            {props.action === "Edit" &&
              <span className="space-y-1">
                <Label htmlFor="name">Id</Label>
                <Input
                  disabled
                  defaultValue={stokeDetail?.id ?? ""}
                  onChange={(e) => {
                    setStoke((prev) => ({
                      ...prev,
                      id: e.target.value,
                    }));
                  }} />
              </span>
            }
            <span className="space-y-1">
              <Label htmlFor="name">Stoke Symbol</Label>
              <Input
                defaultValue={stokeDetail?.symbol ?? ""}
                onChange={(e) => {
                  setStoke((prev) => ({
                    ...prev,
                    symbol: e.target.value,
                  }));
                }} />
            </span>
            <span className="space-y-1">
              <Label htmlFor="username">Company Name</Label>
              <Input
                defaultValue={stokeDetail?.companyName ?? ""}
                onChange={(e) => {
                  setStoke((prev) => ({
                    ...prev,
                    companyName: e.target.value,
                  }));
                }} />
            </span>
            <span className="space-y-1">
              <Label htmlFor="username">Note</Label>
              <Input
                defaultValue={stokeDetail?.note ?? ""}
                onChange={(e) => {
                  setStoke((prev) => ({
                    ...prev,
                    note: e.target.value,
                  }));
                }} />
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmitStoke}>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AddStoke;