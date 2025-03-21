import { SortValue } from '@/store/pattern';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { Dialog, Popover, TextField } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import SortItem from './sort-item';

export const SortPopupComponent = (props) => {
  const { columns, tableData, setStringCondition } = props;
  const [searchValue, setSearchValue] = useState('');
  const [dataChooseSort, setDataChooseSort] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElPopover, setAnchorElPopover] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const [sortValue, setSortValue] = useRecoilState(SortValue);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const openPopover = Boolean(anchorElPopover);
  const idPopover = openPopover ? 'simple-popover' : undefined;

  const dragItem = useRef(null);
  const draggedOverItem = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpenDialog(!openDialog);
  };

  const handleClickPopover = (event) => {
    setAnchorElPopover(anchorElPopover ? null : event.currentTarget);
  };

  const handleRemove = (value) => {
    let temp = [...sortValue];
    const findItem = sortValue.findIndex((item) => item.headerName === value.headerName);
    temp.splice(findItem, 1);
    setSortValue([...temp]);
  };

  const handleSort = () => {
    const listItemClone = [...sortValue];
    const temp = listItemClone[dragItem.current];
    listItemClone[dragItem.current] = listItemClone[draggedOverItem.current];
    listItemClone[draggedOverItem.current] = temp;
    setSortValue(listItemClone);
  };

  const afterSortData = useMemo(() => {
    let temp = columns?.filter(
      (item) => sortValue.findIndex((e) => e.headerName === item.headerName) === -1
    );
    return temp.map((item) => ({
      id: item.field,
      field: item.field,
      headerName: item.headerName,
      adesc: 'asc',
    }));
  }, [columns, sortValue]);

  useEffect(() => {
    setDataChooseSort([...afterSortData]);
  }, [afterSortData]);

  useEffect(() => {
    let strCond = '';
    for (let i = 0; i < sortValue.length; i++) {
      strCond += '&sort=' + sortValue[i].field + ',' + sortValue[i].adesc;
    }
    setStringCondition(strCond.replace('stockCode', 'Stock_code'));
  }, [sortValue]);

  const handleChooseSortItem = (item) => {
    setSortValue([...sortValue, { field: item.field, headerName: item.headerName, adesc: 'asc' }]);
    setAnchorElPopover(null);
    setSearchValue('');
  };

  const handleRemoveAllSort = () => {
    setSortValue([{ field: 'stockCode', headerName: 'Mã cổ phiếu', adesc: 'asc' }]);
  };

  const handleFindItem = (value) => {
    setSearchValue(value);
    const findItem = afterSortData.filter((item) => item.headerName.toLowerCase().includes(value));
    setDataChooseSort(findItem);
  };

  return (
    <div>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        className="border border-gray rounded-full mb-2 p-1"
        disabled={tableData.length === 0}
      >
        <SwapVertIcon />
      </button>
      <Dialog
        id={id}
        open={openDialog}
        anchorel={anchorEl}
        hideBackdrop
        sx={{
          '& .MuiDialog-container': {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          },

          '& .MuiPaper-root': {
            position: 'absolute',
            top: '115px',
            right: 0,
            boxShadow: 'none',
            backgroundColor: 'rgba(255, 248, 220, 0.7)',
          },
        }}
      >
        <div className="rounded">
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
                <SortItem item={item} handleRemove={handleRemove} columns={columns} />
              </div>
            ))}
          </div>
          <div className="flex flex-col ml-4 gap-2">
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
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{
                '& .MuiPopover-paper': {
                  position: 'relative',
                  top: '148px !important',
                  left: '57% !important',
                  boxShadow: 'none',
                  backgroundColor: 'rgba(255, 248, 220, 0.7)',
                  maxHeight: '300px',
                  maxWidth: '300px',
                },
              }}
            >
              <div className="px-4 pt-4">
                <TextField
                  value={searchValue}
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  onChange={(e) => handleFindItem(e.target.value)}
                />
                <div className="flex flex-col py-3">
                  {dataChooseSort &&
                    dataChooseSort?.map((item, index) => (
                      <div
                        className="cursor-pointer hover:bg-[#ffeda3] px-3 py-2"
                        key={item.field}
                        onClick={() => handleChooseSortItem(item)}
                      >
                        {item.headerName}
                      </div>
                    ))}
                </div>
              </div>
            </Popover>
            <button className="flex items-center text-sm w-[92px]" onClick={handleRemoveAllSort}>
              <DeleteIcon fontSize="small" />
              <span className="ml-1">Delete sort</span>
            </button>
          </div>
          <div className="flex justify-end mr-4 pb-4 cursor-pointer" onClick={handleClick}>
            Close
          </div>
        </div>
      </Dialog>
    </div>
  );
};
