import { SortValue } from '@/store/pattern';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';

function SortItem(props) {
  const { item, handleRemove, columns } = props;

  const [fieldValue, setFieldValue] = useState(item.field);
  const [itemValue, setItemValue] = useState(item.adesc);
  const [sortValue, setSortValue] = useRecoilState(SortValue);

  const handleChangeHeaderName = (event) => {
    let value = event.target.value;
    setFieldValue(value);
    let replaceItem = [...sortValue];
    let indexItem = replaceItem.findIndex((e) => e.field === item.field);
    switch (value) {
      case 'stockCode':
        setSortValue((prev) =>
          [...prev].map((e) => {
            if (e.field === replaceItem[indexItem].field) {
              return {
                ...e,
                field: 'stockCode',
                headerName: 'Mã cổ phiếu',
              };
            } else return e;
          })
        );
        break;
      case 'marketcap':
        setSortValue((prev) =>
          [...prev].map((e) => {
            if (e.field === replaceItem[indexItem].field) {
              return {
                ...e,
                field: 'marketcap',
                headerName: 'Vốn hóa',
              };
            } else return e;
          })
        );
        break;
      case 'pb':
        setSortValue((prev) =>
          [...prev].map((e) => {
            if (e.field === replaceItem[indexItem].field) {
              return {
                ...e,
                field: 'pb',
                headerName: 'PB',
              };
            } else return e;
          })
        );
        break;
      case 'pe':
        setSortValue((prev) =>
          [...prev].map((e) => {
            if (e.field === replaceItem[indexItem].field) {
              return {
                ...e,
                field: 'pe',
                headerName: 'PE',
              };
            } else return e;
          })
        );
        break;
      case 'roe':
        setSortValue((prev) =>
          [...prev].map((e) => {
            if (e.field === replaceItem[indexItem].field) {
              return {
                ...e,
                field: 'roe',
                headerName: 'ROE (%)',
              };
            } else return e;
          })
        );
        break;
      case 'evebitda':
        setSortValue((prev) =>
          [...prev].map((e) => {
            if (e.field === replaceItem[indexItem].field) {
              return {
                ...e,
                field: 'evebitda',
                headerName: 'EV/EBITDA',
              };
            } else return e;
          })
        );
        break;
      case 'divyld':
        setSortValue((prev) =>
          [...prev].map((e) => {
            if (e.field === replaceItem[indexItem].field) {
              return {
                ...e,
                field: 'divyld',
                headerName: 'Tỉ suất cổ tức',
              };
            } else return e;
          })
        );
        break;
      case 'pi77':
        setSortValue((prev) =>
          [...prev].map((e) => {
            if (e.field === replaceItem[indexItem].field) {
              return {
                ...e,
                field: 'pi77',
                headerName: 'Capex TTM/Gross PPE',
              };
            } else return e;
          })
        );
        break;
      case 'pi78':
        setSortValue((prev) =>
          [...prev].map((e) => {
            if (e.field === replaceItem[indexItem].field) {
              return {
                ...e,
                field: 'pi78',
                headerName: 'Capex TTM/Asset',
              };
            } else return e;
          })
        );
        break;
      default:
        break;
    }
  };

  const handleChangeAdesc = (event) => {
    let value = event.target.value;
    setItemValue(value);
    let replaceItem = [...sortValue];
    let indexItem = replaceItem.findIndex((e) => e.field === item.field);
    setSortValue((prev) =>
      [...prev].map((e) => {
        if (e.field === replaceItem[indexItem].field) {
          return {
            ...e,
            adesc: value,
          };
        } else return e;
      })
    );
  };

  const handleRemoveSort = () => {
    handleRemove(itemValue);
  };

  const disabledItem = useCallback(
    (option) => {
      return (sortValue?.length > 0 && sortValue?.some((e) => e.field === option.field)) || false;
    },
    [fieldValue, sortValue]
  );

  return (
    <div className="flex gap-4 pr-4 pl-2 py-2">
      <FormControl>
        <Select
          value={fieldValue}
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
          {columns &&
            columns?.map(
              (option) =>
                (option.field !== 'quarter' || option.field !== 'year') && (
                  <MenuItem key={option.field} value={option.field} disabled={disabledItem(option)}>
                    {option.headerName}
                  </MenuItem>
                )
            )}
        </Select>
      </FormControl>
      <FormControl>
        <Select
          value={itemValue}
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

export default SortItem;
