import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

export const DataGridComponent = (props) => {
  const { tableData, columns } = props;

  const paginationModel = { page: 0, pageSize: 100 };

  return (
    <div className="h-[510px] min-w-[calc(100vw-390px)]">
      <DataGrid
        rows={tableData}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[25, 50, 100]}
        disableColumnMenu
        rowHeight={35}
        sx={{
          border: 1,
          borderColor: '#EDE9DC',
          '.MuiDataGrid-row--borderBottom': { backgroundColor: '#FFF8DC !important' },
        }}
      />
    </div>
  );
};
