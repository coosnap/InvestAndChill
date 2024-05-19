import { upgradeUser } from "@/api/user";
import Modal from "@/components/common/Modal";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserAll } from "@/store/user";
import moment from "moment";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function UserAdmin() {
  const [users, setUsers] = useRecoilState(UserAll);
  const [showModal, setShowModal] = useState(false);
  const [defaultSelect, setDefaultSelect] = useState("");
  const [messageDialog, setMessageDialog] = useState({ status: "", message: "" });

  function onCheckedChange(id) {
    let result = [];
    users.map(e => {
      let data = { ...e };
      if (e.id === id) data.isVip = !data.isVip;
      result.push(data);
    });
    setUsers(result);
  }

  function onValueSelectChange(value, id) {
    let from = moment().format("YYYY-MM-DD HH:mm:ss");
    let to = moment(from).add(value, 'M').format("YYYY-MM-DD HH:mm:ss");
    console.log(to)
    let result = [];
    users.map(e => {
      let data = { ...e };
      if (e.id === id) {
        data.fromDate = from;
        data.toDate = to;
      };
      result.push(data);
    });
    setUsers(result);
  }

  async function handleSaveUser(id) {
    let data = users.filter(e => e.id === id);
    let formData = {
      id: id,
      isVip: data[0].isVip,
      fromDate: data[0].fromDate,
      toDate: data[0].toDate
    }
    try {
      await upgradeUser(formData);
      setMessageDialog(prev => ({ ...prev, status: "Success", message: "Update Successfully!" }));
      setShowModal(true);
    } catch (error) {
      setMessageDialog(prev => ({ ...prev, status: "Error", message: "Update Fail!" }));
      setShowModal(true);
    }
  }

  // function convertValue() {
  //   let result = users.map(e => {
  //     if (e.isVip) {
  //       let from = moment(e.fromDate).format("YYYY-MM-DD HH:mm:ss");
  //       let to = moment(e.toDate).format("YYYY-MM-DD HH:mm:ss");
  //       // let diff = from.diff(to, 'month');
  //       console.log(moment(e.fromDate).format("YYYY-MM-DD HH:mm:ss"), moment(e.toDate).format("YYYY-MM-DD HH:mm:ss"))
  //     }
  //   });

  //   return result;
  // }
  // useEffect(() => {
  //   convertValue();
  // }, [])

  return (
    <>
      <Table className="border mt-6">
        <TableHeader>
          <TableRow className="bg-blue-100">
            <TableHead className="text-center">User Name</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Status Vip</TableHead>
            <TableHead className="text-center">Duration</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="text-center">{user.username}</TableCell>
              <TableCell className="text-center">{user.email}</TableCell>
              <TableCell className="text-center">
                <Switch
                  checked={user.isVip}
                  onCheckedChange={() => onCheckedChange(user.id)}
                />
              </TableCell>
              <TableCell className="flex justify-center">
                <Select defaultValue={defaultSelect} disabled={user.isVip ? false : true} onValueChange={(value) => onValueSelectChange(value, user.id)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="bg-white">
                      <SelectItem value="3">3 month</SelectItem>
                      <SelectItem value="6">6 month</SelectItem>
                      <SelectItem value="9">9 month</SelectItem>
                      <SelectItem value="12">1 year</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="text-center">
                <Button variant="primary" onClick={() => handleSaveUser(user.id)}>Save</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {showModal && <Modal handleClickModal={setShowModal(false)} message={messageDialog.message} status={messageDialog.status} />}
    </>
  )
}
