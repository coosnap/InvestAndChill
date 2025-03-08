export const columns = [
  { field: 'stockCode', headerName: 'Mã cổ phiếu', width: '100', sortable: false },
  { field: 'year', headerName: 'Năm', width: '60', type: 'number', sortable: false },
  { field: 'quarter', headerName: 'Quý', width: '60', type: 'number', sortable: false },
  {
    field: 'marketcap',
    headerName: 'Vốn hóa',
    width: '100',
    type: 'number',
    sortable: false,
  },
  { field: 'pb', headerName: 'PB', width: '100', type: 'number', sortable: false },
  { field: 'pe', headerName: 'PE', width: '100', type: 'number', sortable: false },
  {
    field: 'roe',
    headerName: 'ROE (%)',
    width: '80',
    type: 'number',
    sortable: false,
  },
  {
    field: 'evebitda',
    headerName: 'EV/EBITDA',
    type: 'number',
    sortable: false,
  },
  {
    field: 'divyld',
    headerName: 'Tỉ suất cổ tức',
    width: '110',
    type: 'number',
    sortable: false,
  },
];

export const columns0 = [
  ...columns,
  {
    field: 'pi77',
    headerName: 'Capex TTM/Gross PPE',
    width: '170',
    type: 'number',
    sortable: false,
  },
  {
    field: 'pi78',
    headerName: 'Capex TTM/Asset',
    width: '140',
    type: 'number',
    sortable: false,
  },
];

export const columns1 = [
  ...columns,
  {
    field: 'pi75',
    headerName: 'Presales/Sales Traiing',
    width: '210',
    type: 'number',
    sortable: false,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
];

export const columns2 = [
  ...columns,
  {
    field: 'pi68',
    headerName: 'Interest Expense TTM/EBIT TTM',
    width: '230',
    type: 'number',
    sortable: false,
  },
  {
    field: 'pi69',
    headerName: 'Net Debt/EBITDA TTM',
    width: '170',
    type: 'number',
    sortable: false,
  },
];

export const columns3 = [
  ...columns,
  {
    field: 'pi70',
    headerName: 'D&A TTM/EBITDA TTM',
    width: '180',
    type: 'number',
    sortable: false,
  },
  {
    field: 'pi73',
    headerName: 'Net PPE/Avg DA 3Y',
    width: '160',
    type: 'number',
    sortable: false,
  },
];

export const columns4 = [
  ...columns,
  {
    field: 'pi793',
    headerName: 'PI793',
    width: '100',
    type: 'number',
    sortable: false,
  },
];
