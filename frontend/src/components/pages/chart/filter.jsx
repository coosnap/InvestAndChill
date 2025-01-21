import { AddToPhotosOutlined, DeleteOutline } from '@mui/icons-material';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  Slider,
  styled,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 10 };

export const Filter = () => {
  const [age, setAge] = useState(10);
  const [value, setValue] = useState([0, 100]);

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const PrettoSlider = styled(Slider)({
    color: '#093272',
    height: 4,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 16,
      width: 16,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&::before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&::before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });

  const handleChangeValue = (mm, e) => {
    if (mm === 'min') {
      setValue([e.target.value, value[1]]);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '1.5rem',
        }}
      >
        {['ADTV - Value (Bn VND)', 'ADTV (Shares)', 'Estimated Volume vs ADTV (%)'].map((e) => (
          <div className="flex items-center justify-between w-[80%]" key={e}>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label={e} />
            </FormGroup>
            <div className="flex flex-1 justify-end gap-4">
              <Box sx={{ width: 100 }}>
                <Select value={age} onChange={handleChange} size="small">
                  <MenuItem value={10}>10 Days</MenuItem>
                  <MenuItem value={20}>20 Days</MenuItem>
                  <MenuItem value={30}>30 Days</MenuItem>
                </Select>
              </Box>
              <Box sx={{ width: 100 }}>
                <TextField
                  value={value[0]}
                  onInput={(e) => handleChangeValue('min', e)}
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box sx={{ width: 400, display: 'flex', alignItems: 'center' }}>
                <PrettoSlider
                  getAriaLabel={() => 'Temperature range'}
                  value={value}
                  onChange={handleChangeSlider}
                  valueLabelDisplay="auto"
                />
              </Box>
              <Box sx={{ width: 100 }}>
                <TextField value={value[1]} variant="outlined" size="small" />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AddToPhotosOutlined sx={{ color: 'grey' }} />
                <DeleteOutline color="disabled" />
              </Box>
            </div>
          </div>
        ))}
      </Box>
      <div className="flex justify-center">
        <Box sx={{ width: 'fit-content' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            disableColumnMenu
            sx={{
              border: 1,
              borderColor: '#EDE9DC',
              '.MuiDataGrid-row--borderBottom': { backgroundColor: 'transparent !important' },
            }}
          />
        </Box>
      </div>
    </div>
  );
};
