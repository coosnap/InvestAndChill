import { atom } from 'recoil';

export const SortValue = atom({
  key: 'SortValue',
  default: [{ field: 'stockCode', headerName: 'Mã cổ phiếu', adesc: 'asc' }],
});
