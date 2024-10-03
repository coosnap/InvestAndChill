import { insertStoke, updateStoke } from '@/api/stock';
import { Label } from '@/components/ui/label';
import { StokeAll } from '@/store/stoke';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilValue } from 'recoil';

const sizeData = [
  { item: 'None', value: '0' },
  { item: 'Large', value: '1' },
  { item: 'Mid', value: '2' },
  { item: 'Small', value: '3' },
];

function AddStoke(props) {
  const [open, setOpen] = useState(false);
  const [stoke, setStoke] = useState({});
  const [stokeDetail, setStokeDetail] = useState({});
  const [propsInfo, setPropsInfo] = useState({});

  const stokes = useRecoilValue(StokeAll);

  useEffect(() => {
    setPropsInfo(props);
  }, [props]);

  async function handleEditStoke() {
    const result = stokes.filter((e) => e.id === propsInfo.id);
    if (result && result.length > 0) {
      setStokeDetail(result[0]);
      setStoke(result[0]);
    }
  }

  async function handleSubmitStoke() {
    let action = propsInfo.action;
    if (action === 'Edit') {
      try {
        let data = { ...stoke };
        let result = await updateStoke({ data });
        if (result) {
          document.getElementById('stoke-cancel')?.click();
          propsInfo.render();
          toast.success('Update Successfully!', {
            position: 'top-right',
          });
        }
      } catch (error) {
        toast.error('Update Fail!', {
          position: 'top-right',
        });
      }
    }
    if (action === 'Add') {
      let data = { ...stoke };
      try {
        let result = await insertStoke({ data });
        if (result) {
          propsInfo.render();
          toast.success('Insert Successfully!', {
            position: 'top-right',
          });
        }
      } catch (error) {
        toast.error('Insert Fail!', {
          position: 'top-right',
        });
      }
    }
    return;
  }

  return (
    <>
      {props.action === 'Edit' ? (
        <Button
          variant="contained"
          className="cursor-pointer"
          onClick={() => (handleEditStoke(), setOpen(true))}
        >
          <FaEdit />
        </Button>
      ) : (
        <Button onClick={() => setOpen(true)} variant="contained" className="cursor-pointer">
          Add Stoke
        </Button>
      )}
      <Dialog
        sx={{
          '.MuiPaper-root': {
            maxWidth: '400px',
            width: '100%',
          },
        }}
        open={open}
      >
        <DialogTitle variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          {props.action === 'Edit' ? 'Edit' : 'Add'} Stoke
        </DialogTitle>
        <DialogContent>
          <div className="flex flex-col gap-4">
            <div className="space-y-1 flex flex-col items-start gap-1">
              <Label htmlFor="name">Size Company</Label>
              <TextField
                select
                hiddenLabel
                size="small"
                defaultValue={stokeDetail?.sizeOfCompany ?? 0}
                sx={{ width: '50%' }}
                onChange={(e) =>
                  setStoke((prev) => ({
                    ...prev,
                    sizeOfCompany: e.target.value,
                  }))
                }
              >
                {sizeData.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.item}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="space-y-1 flex flex-col items-start gap-1">
              <Label htmlFor="name">Stoke Symbol</Label>
              <TextField
                hiddenLabel
                defaultValue={stokeDetail?.symbol ?? ''}
                size="small"
                onChange={(e) => {
                  setStoke((prev) => ({
                    ...prev,
                    symbol: e.target.value,
                  }));
                }}
                fullWidth
              />
            </div>
            <div className="space-y-1 flex flex-col items-start gap-1">
              <Label htmlFor="username">Company Name</Label>
              <TextField
                hiddenLabel
                defaultValue={stokeDetail?.companyName ?? ''}
                size="small"
                onChange={(e) => {
                  setStoke((prev) => ({
                    ...prev,
                    companyName: e.target.value,
                  }));
                }}
                fullWidth
              />
            </div>
            <div className="space-y-1 flex flex-col items-start gap-1">
              <Label htmlFor="username">Note</Label>
              <TextField
                hiddenLabel
                defaultValue={stokeDetail?.note ?? ''}
                size="small"
                onChange={(e) => {
                  setStoke((prev) => ({
                    ...prev,
                    note: e.target.value,
                  }));
                }}
                fullWidth
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions sx={{ marginRight: '16px', marginBottom: '16px' }}>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmitStoke}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </>
  );
}

export default AddStoke;
