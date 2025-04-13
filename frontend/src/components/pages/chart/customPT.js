export const columns = [
  {field: 'stockCode', headerName: 'Mã cổ phiếu', width: '100', sortable: false},
  {field: 'year', headerName: 'Năm', width: '60', type: 'number', sortable: false},
  {field: 'quarter', headerName: 'Quý', width: '60', type: 'number', sortable: false},
  {
    field: 'marketcap',
    headerName: 'Vốn hóa',
    width: '100',
    type: 'number',
    sortable: false,
    valueGetter: (value, row) =>
      `${
        !row.marketcap?.toString()?.includes('.')
          ? row.marketcap?.toLocaleString() + '.0'
          : row.marketcap?.toLocaleString()
      }`,
  },
  {
    field: 'pb',
    headerName: 'PB',
    width: '100',
    type: 'number',
    sortable: false,
    valueGetter: (value, row) =>
      `${
        !row.pb?.toString()?.includes('.')
          ? row?.pb?.toLocaleString() + '.00'
          : row?.pb?.toString()?.split('.')[1]?.length === 1
            ? row?.pb?.toLocaleString() + '0'
            : row?.pb?.toLocaleString()
      }`,
  },
  {
    field: 'pe',
    headerName: 'PE',
    width: '100',
    type: 'number',
    sortable: false,
    valueGetter: (value, row) =>
      `${
        !row.pe?.toString()?.includes('.')
          ? row?.pe?.toLocaleString() + '.00'
          : row?.pe?.toString()?.split('.')[1]?.length === 1
            ? row?.pe?.toLocaleString() + '0'
            : row?.pe?.toLocaleString()
      }`,
  },
  {
    field: 'roe',
    headerName: 'ROE (%)',
    width: '80',
    type: 'number',
    sortable: false,
    valueGetter: (value, row) =>
      `${
        !row.roe?.toString()?.includes('.')
          ? row?.roe?.toLocaleString() + '.0'
          : row?.roe?.toLocaleString()
      }`,
  },
  {
    field: 'evebitda',
    headerName: 'EV/EBITDA',
    type: 'number',
    sortable: false,
    valueGetter: (value, row) =>
      `${
        !row.evebitda?.toString()?.includes('.')
          ? row?.evebitda?.toLocaleString() + '.00'
          : row?.evebitda?.toString()?.split('.')[1]?.length === 1
            ? row?.evebitda?.toLocaleString() + '0'
            : row?.evebitda?.toLocaleString()
      }`,
  },
  {
    field: 'divyld',
    headerName: 'Tỉ suất cổ tức',
    width: '110',
    type: 'number',
    sortable: false,
    valueGetter: (value, row) =>
      `${
        !row.divyld?.toString()?.includes('.')
          ? row?.divyld?.toLocaleString() + '.0'
          : row?.divyld?.toLocaleString()
      }`,
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
    valueGetter: (value, row) =>
      `${
        !row.pi77?.toString()?.includes('.')
          ? row?.pi77?.toLocaleString() + '.0'
          : row?.pi77?.toLocaleString()
      }`,
  },
  {
    field: 'pi78',
    headerName: 'Capex TTM/Asset',
    width: '140',
    type: 'number',
    sortable: false,
    valueGetter: (value, row) =>
      `${
        !row.pi78?.toString()?.includes('.')
          ? row?.pi78?.toLocaleString() + '.0'
          : row?.pi78?.toLocaleString()
      }`,
  },
];

export const columns1 = [
  ...columns,
  {
    field: 'pi75',
    headerName: 'Chiếm dụng vốn/DTT 12T',
    width: '210',
    type: 'number',
    sortable: false,
    valueGetter: (value, row) =>
      `${
        !row.pi75?.toString()?.includes('.')
          ? row?.pi75?.toLocaleString() + '.0'
          : row?.pi75?.toLocaleString()
      }`,
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
    valueGetter: (value, row) =>
      `${
        !row.pi68?.toString()?.includes('.')
          ? row?.pi68?.toLocaleString() + '.0'
          : row?.pi68?.toLocaleString()
      }`,
  },
  {
    field: 'pi69',
    headerName: 'Net Debt/EBITDA TTM',
    width: '170',
    type: 'number',
    sortable: false,
    valueGetter: (value, row) =>
      `${
        !row.pi69?.toString()?.includes('.')
          ? row?.pi69?.toLocaleString() + '.0'
          : row?.pi69?.toLocaleString()
      }`,
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
    valueGetter: (value, row) =>
      `${
        !row.pi70?.toString()?.includes('.')
          ? row?.pi70?.toLocaleString() + '.0'
          : row?.pi70?.toLocaleString()
      }`,
  },
  {
    field: 'pi73',
    headerName: 'Net PPE/Avg DA 3Y',
    width: '160',
    type: 'number',
    sortable: false,
    valueGetter: (value, row) =>
      `${
        !row.pi73?.toString()?.includes('.')
          ? row?.pi73?.toLocaleString() + '.0'
          : row?.pi73?.toLocaleString()
      }`,
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
    valueGetter: (value, row) =>
      `${
        !row.pi793?.toString()?.includes('.')
          ? row?.pi793?.toLocaleString() + '.0'
          : row?.pi793?.toLocaleString()
      }`,
  },
];
