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
      updateStoke(stoke);
    }
    if (props.action === "Add") {
      insertStoke(stoke);
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
          <AlertDialogDescription>
            {props.action === "Edit" &&
              <div className="space-y-1">
                <Label htmlFor="name">Id</Label>
                <Input
                  defaultValue={stokeDetail?.id ?? ""}
                  onChange={(e) => {
                    if (props.action === "Edit") {
                      setStoke((prev) => ({
                        ...prev,
                        id: e.target.value,
                      }));
                    }
                    setStoke((prev) => ({
                      ...prev,
                      id: e.target.value,
                    }));
                  }} />
              </div>
            }
            <div className="space-y-1">
              <Label htmlFor="name">Stoke Symbol</Label>
              <Input
                defaultValue={stokeDetail?.symbol ?? ""}
                onChange={(e) => {
                  setStoke((prev) => ({
                    ...prev,
                    symbol: e.target.value,
                  }));
                }} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Company Name</Label>
              <Input
                defaultValue={stokeDetail?.companyName ?? ""}
                onChange={(e) => {
                  setStoke((prev) => ({
                    ...prev,
                    companyName: e.target.value,
                  }));
                }} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Note</Label>
              <Input
                defaultValue={stokeDetail?.note ?? ""}
                onChange={(e) => {
                  setStoke((prev) => ({
                    ...prev,
                    note: e.target.value,
                  }));
                }} />
            </div>
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