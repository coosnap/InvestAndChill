export const columns = [
  { field: 'stockCode', headerName: 'Stock Code', width: '130' },
  { field: 'year', headerName: 'Year' },
  { field: 'quarter', headerName: 'Quarter' },
  { field: 'marketcap', headerName: 'Marketcap', width: '130' },
  { field: 'pb', headerName: 'PB' },
  { field: 'pe', headerName: 'PE' },
  {
    field: 'roe',
    headerName: 'ROE',
  },
];

export const columns0 = [
  ...columns,
  {
    field: 'pi77',
    headerName: 'Capex TTM/Gross PPE',
    width: '210',
  },
  {
    field: 'pi78',
    headerName: 'Capex TTM/Asset',
    width: '170',
  },
];

export const columns1 = [
  ...columns,
  {
    field: 'pi75',
    headerName: 'Presales/Sales Traiing',
    width: '210',
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
    width: '210',
  },
  {
    field: 'pi69',
    headerName: 'Net Debt/EBITDA TTM',
    width: '210',
  },
];

export const columns3 = [
  ...columns,
  {
    field: 'pi70',
    headerName: 'D&A TTM/EBITDA TTM',
    width: '210',
  },
  {
    field: 'pi73',
    headerName: 'Net PPE/Avg DA 3Y',
    width: '210',
  },
];

export const columns4 = [
  ...columns,
  {
    field: 'pi793',
    headerName: 'PI793',
    width: '210',
  },
];
