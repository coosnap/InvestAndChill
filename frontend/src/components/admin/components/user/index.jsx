import { getUserAll, upgradeUser } from '@/api/user';
import Modal from '@/components/common/Modal';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { UserAll } from '@/store/user';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import './style.scss';

export default function UserAdmin() {
  const [users, setUsers] = useRecoilState(UserAll);
  const [showModal, setShowModal] = useState(false);
  const [messageDialog, setMessageDialog] = useState({ status: '', message: '' });

  async function getData() {
    let result = await getUserAll();
    setUsers(result);
  }

  useEffect(() => {
    getData();
  }, []);

  function onCheckedChange(id) {
    let result = [];
    users.map((e) => {
      let data = { ...e };
      if (e.id === id) data.isVip = !data.isVip;
      result.push(data);
    });
    setUsers(result);
  }

  async function handleSaveUser(id) {
    let data = users.filter((e) => e.id === id);
    let formData = {
      id: id,
      isVip: data[0].isVip ? 1 : 0,
      fromDate: data[0].fromDate,
      toDate: data[0].toDate,
    };
    try {
      await upgradeUser(formData);
      setMessageDialog((prev) => ({ ...prev, status: 'Success', message: 'Update Successfully!' }));
      setShowModal(true);
    } catch (error) {
      setMessageDialog((prev) => ({ ...prev, status: 'Error', message: 'Update Fail!' }));
      setShowModal(true);
    }
  }

  function handleSelectDate(action, date, id) {
    let dateFormat = format(date, 'dd-MM-yyyy HH:mm:ss');
    if (action === 'to') {
      setUsers((prev) => prev.map((e) => (e.id === id ? { ...e, toDate: dateFormat } : e)));
    } else {
      setUsers((prev) => prev.map((e) => (e.id === id ? { ...e, fromDate: dateFormat } : e)));
    }
    return;
  }

  return (
    <div className="h-[calc(100vh-190px)] overflow-y-auto mt-6">
      <Table className="custom-td border bg-white">
        <TableHeader>
          <TableRow className="bg-blue-100">
            <TableHead className="text-center">User Name</TableHead>
            <TableHead className="text-center">Status Vip</TableHead>
            <TableHead className="text-center">Duration</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="text-center">{user.username}</TableCell>
              <TableCell className="text-center">
                <Switch checked={user.isVip} onCheckedChange={() => onCheckedChange(user.id)} />
              </TableCell>
              <TableCell className="flex justify-center">
                <div className="flex flex-col mr-4">
                  <p className="mb-1">From</p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-[280px] justify-start text-left font-normal bg-white',
                          !user.fromDate && 'text-muted-foreground'
                        )}
                        disabled={!user.isVip}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {user.fromDate ? user.fromDate : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={user.fromDate}
                        onSelect={(value) => handleSelectDate('from', value, user.id)}
                        initialFocus
                        className="bg-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex flex-col">
                  <p className="mb-1">To</p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-[280px] justify-start text-left font-normal bg-white',
                          !user.toDate && 'text-muted-foreground'
                        )}
                        disabled={!user.isVip}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {user.toDate ? user.toDate : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={user.toDate}
                        onSelect={(value) => handleSelectDate('to', value, user.id)}
                        initialFocus
                        className="bg-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Button variant="primary" onClick={() => handleSaveUser(user.id)}>
                  Save
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {showModal && (
        <Modal
          handleClickModal={setShowModal(false)}
          message={messageDialog.message}
          status={messageDialog.status}
        />
      )}
    </div>
  );
}
