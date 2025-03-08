import CloseIcon from '@mui/icons-material/Close';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

export default function SortItem(props) {
  const { columns, item, handleRemove } = props;

  const [itemValue, setItemValue] = useState(item);

  const handleChangeHeaderName = (event) => {
    let value = event.target.value;
    setItemValue((prev) => ({ ...prev, headerName: event.target.value }));
  };

  const handleChangeAdesc = (event) => {
    let value = event.target.value;
    setItemValue((prev) => ({ ...prev, adesc: event.target.value }));
  };

  const handleRemoveSort = () => {
    handleRemove(itemValue);
  };

  return (
    <div className="flex gap-4 pr-4 pl-2 py-2">
      <FormControl>
        <Select
          value={itemValue.field}
          size="small"
          onChange={handleChangeHeaderName}
          style={{ height: 30 }}
          sx={{
            border: '1px solid gray',
            '& fieldset': {
              border: 'none',
            },
          }}
        >
          {columns?.map((item, index) => (
            <MenuItem key={index} value={item.field}>
              {item.headerName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <Select
          value={itemValue.adesc}
          size="small"
          onChange={handleChangeAdesc}
          style={{ height: 30 }}
          sx={{
            border: '1px solid gray',
            '& fieldset': {
              border: 'none',
            },
          }}
        >
          <MenuItem value="asc">Tăng</MenuItem>
          <MenuItem value="desc">Giảm</MenuItem>
        </Select>
      </FormControl>
      <button onClick={handleRemoveSort}>
        <CloseIcon fontSize="12px" />
      </button>
    </div>
  );
}
