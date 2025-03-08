import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { Autocomplete, Dialog, Popover, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import SortItem from './sort-item';

export const SortPopupComponent = (props) => {
  const { columns } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElPopover, setAnchorElPopover] = useState(null);
  const [sortValue, setSortValue] = useState([
    { field: 'stockCode', headerName: 'Mã cổ phiếu', adesc: 'asc' },
    { field: 'year', headerName: 'Năm', adesc: 'asc' },
  ]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const openPopover = Boolean(anchorElPopover);
  const idPopover = openPopover ? 'simple-popover' : undefined;

  const dragItem = useRef(null);
  const draggedOverItem = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickPopover = (event) => {
    setAnchorElPopover(anchorElPopover ? null : event.currentTarget);
  };

  const handleRemove = (value) => {
    const findItem = sortValue.findIndex((item) => item.headerName === value.headerName);
    setSortValue(sortValue.splice(findItem - 1, 1));
  };

  const handleSort = () => {
    const listItemClone = [...sortValue];
    const temp = listItemClone[dragItem.current];
    listItemClone[dragItem.current] = listItemClone[draggedOverItem.current];
    listItemClone[draggedOverItem.current] = temp;
    setSortValue(listItemClone);
  };

  return (
    <div>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        className="border border-gray rounded-full mb-2 p-1"
      >
        <SwapVertIcon />
      </button>
      <Dialog
        onClose={handleClick}
        id={id}
        open={open}
        anchorel={anchorEl}
        hideBackdrop
        sx={{
          '& .MuiDialog-container': {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          },

          '& .MuiPaper-root': {
            top: '115px',
            left: '115px',
            boxShadow: 'none',
          },
        }}
      >
        <div className="bg-[#f9eec1] rounded">
          <div className="pt-3">
            {sortValue.map((item, index) => (
              <div
                key={item.headerName}
                className="flex items-center ml-2 cursor-pointer"
                draggable
                onDragStart={() => (dragItem.current = index)}
                onDragEnter={() => (draggedOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}
              >
                <DragIndicatorIcon fontSize="small" />
                <SortItem columns={columns} item={item} handleRemove={handleRemove} />
              </div>
            ))}
          </div>
          <div className="flex flex-col ml-4 pb-4 gap-2">
            <button
              className="flex items-center text-sm w-[92px]"
              aria-describedby={id}
              onClick={handleClickPopover}
            >
              <AddIcon fontSize="small" />
              <span className="ml-1">Add sort</span>
            </button>
            <Popover
              id={idPopover}
              open={openPopover}
              anchorEl={anchorElPopover}
              onClose={handleClickPopover}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              sx={{
                '& .MuiPopover-paper': {
                  top: '275px !important',
                  left: '143px !important',
                  boxShadow: 'none',
                },
              }}
            >
              <div className="bg-[#ffeea8] h-[200px] p-4">
                <Autocomplete
                  disablePortal
                  size="small"
                  options={[{ label: 'The Shawshank Redemption', year: 1994 }]}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </Popover>
            <button className="flex items-center text-sm w-[92px]" onClick={() => {}}>
              <DeleteIcon fontSize="small" />
              <span className="ml-1">Delete sort</span>
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
