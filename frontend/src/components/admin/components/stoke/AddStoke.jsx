import { insertStoke, updateStoke } from '@/api/stock';
import Modal from '@/components/common/Modal';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StokeAll } from '@/store/stoke';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';

function AddStoke(props) {
  const [stoke, setStoke] = useState({});
  const [stokeDetail, setStokeDetail] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [messageDialog, setMessageDialog] = useState({ status: '', message: '' });

  const stokes = useRecoilValue(StokeAll);

  async function handleEditStoke() {
    const result = stokes.filter((e) => e.id === props.id);
    if (result && result.length > 0) {
      setStokeDetail(result[0]);
      setStoke(result[0]);
    }
  }

  const handleClose = () => {
    props.render();
    setShowModal(false);
  };

  async function handleSubmitStoke() {
    if (!stoke) return;
    if (props.action === 'Edit') {
      try {
        let temp = { ...stokeDetail };
        setStoke((prev) => ({ ...prev, ...temp }));
        await updateStoke(stoke);
        document.getElementById('stoke-cancel')?.click();
        setMessageDialog((prev) => ({
          ...prev,
          status: 'Success',
          message: 'Update Successfully!',
        }));
        setShowModal(true);
      } catch (error) {
        setMessageDialog((prev) => ({ ...prev, status: 'Error', message: 'Update Fail!' }));
        setShowModal(true);
      }
    }
    if (props.action === 'Add') {
      try {
        await insertStoke(stoke);
        document.getElementById('stoke-cancel')?.click();
        setMessageDialog((prev) => ({
          ...prev,
          status: 'Success',
          message: 'Update Successfully!',
        }));
        setShowModal(true);
      } catch (error) {
        setMessageDialog((prev) => ({ ...prev, status: 'Error', message: 'Update Fail!' }));
        setShowModal(true);
      }
    }
    return;
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {props.action === 'Edit' ? (
            <Button variant="primary" className="cursor-pointer" onClick={handleEditStoke}>
              <FaEdit />
            </Button>
          ) : (
            <Button variant="primary" className="cursor-pointer">
              Add Stoke
            </Button>
          )}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="mb-4 text-center">
              {props.action === 'Edit' ? 'Edit' : 'Add'} Stoke
            </AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col gap-4">
              {props.action === 'Edit' && (
                <div className="space-y-1 flex flex-col items-start gap-1">
                  <Label htmlFor="name">Id</Label>
                  <Input
                    disabled
                    defaultValue={stokeDetail?.id ?? ''}
                    onChange={(e) => {
                      setStoke((prev) => ({
                        ...prev,
                        id: e.target.value,
                      }));
                    }}
                  />
                </div>
              )}
              <div className="space-y-1 flex flex-col items-start gap-1">
                <Label htmlFor="name">Stoke Symbol</Label>
                <Input
                  defaultValue={stokeDetail?.symbol ?? ''}
                  onChange={(e) => {
                    setStoke((prev) => ({
                      ...prev,
                      symbol: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="space-y-1 flex flex-col items-start gap-1">
                <Label htmlFor="username">Company Name</Label>
                <Input
                  defaultValue={stokeDetail?.companyName ?? ''}
                  onChange={(e) => {
                    setStoke((prev) => ({
                      ...prev,
                      companyName: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="space-y-1 flex flex-col items-start gap-1">
                <Label htmlFor="username">Note</Label>
                <Input
                  defaultValue={stokeDetail?.note ?? ''}
                  onChange={(e) => {
                    setStoke((prev) => ({
                      ...prev,
                      note: e.target.value,
                    }));
                  }}
                />
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel id="stoke-cancel">Cancel</AlertDialogCancel>
            <Button variant="primary" onClick={handleSubmitStoke}>
              Save
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {showModal && (
        <Modal
          handleClickModal={handleClose}
          message={messageDialog.message}
          status={messageDialog.status}
        />
      )}
    </div>
  );
}

export default AddStoke;
