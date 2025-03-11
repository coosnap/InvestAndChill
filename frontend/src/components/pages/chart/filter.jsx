import { getFilterChart, getMinMaxValue } from '@/api/chart';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import FilterItem from './component/filter-item';
import { useRecoilState } from 'recoil';
import { ChartFilter } from '@/store/chart';

// const paginationModel = { page: 0, pageSize: 10 };

export const Filter = () => {
  const [day, setDay] = useState(1);
  const [valueMinMax, setValueMinMax] = useState({});
  const [checkbox, setCheckbox] = useState({
    tangtruongdoanhthu: false,
    marketcap: false,
    roe: false,
    roic: false,
    pe: false,
    pb: false,
    evebitda: false,
    divyld: false,
    netcash: false,
  });

  const [chartFilter, setChartFilter] = useRecoilState(ChartFilter);
  // console.log('chartFilter', chartFilter);
  const [data, setData] = useState({ rows: [], columns: [] });

  useEffect(() => {
    (async () => {
      let result = await getMinMaxValue();
      setValueMinMax(result);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let tableList = await getFilterChart(chartFilter);
      if (tableList.message === 'Data is empty') {
        setData((prev) => ({ ...prev, rows: [] }));
        return;
      }
      let temp = tableList.map((e) => ({ ...e, id: e.stockCode }));
      setData({
        columns: [
          { field: 'stockCode', headerName: 'Mã cổ phiếu' },
          { field: 'pi791', headerName: 'TT DTT YoY (%)', flex: 1, type: 'number' },
          { field: 'pi792', headerName: 'TT DTT vs TB 2 năm YoY (%)', flex: 1, type: 'number' },
          { field: 'pi793', headerName: 'TT DTT vs TB 3 năm YoY (%)', flex: 1, type: 'number' },
          { field: 'marketcap', headerName: 'Vốn hóa', type: 'number' },
          { field: 'roe', headerName: 'ROE (%)', type: 'number' },
          { field: 'roic', headerName: 'ROIC (%)', type: 'number' },
          { field: 'pe', headerName: 'PE', type: 'number' },
          { field: 'pb', headerName: 'PB', type: 'number' },
          { field: 'evebitda', headerName: 'EV/EBITDA', flex: 1, type: 'number' },
          { field: 'divyld', headerName: 'Tỉ suất cổ tức', width: 150, type: 'number' },
          { field: 'netcashmc', headerName: 'Tiền ròng/Vốn hóa', flex: 1, type: 'number' },
        ],
        rows: temp,
      });
    })();
  }, [chartFilter]);

  return (
    <div className="flex gap-4 pt-6 justify-center">
      <div className="flex flex-col flex-1">
        <div className="flex flex-col items-center gap-2 h-40 overflow-auto w-[80%] m-auto">
          <FilterItem
            data={{
              label: 'Tăng trưởng doanh thu',
              min:
                day === 1
                  ? valueMinMax.pi791Min
                  : day === 2
                  ? valueMinMax.pi792Min
                  : valueMinMax.pi793Min,
              max:
                day === 1
                  ? valueMinMax.pi791Max
                  : day === 2
                  ? valueMinMax.pi792Max
                  : valueMinMax.pi793Max,
            }}
            field="tangtruongdoanhthu"
            day={day}
            setDay={setDay}
            filterSelect={checkbox.tangtruongdoanhthu}
            setFilterSelect={setCheckbox}
          />
          <FilterItem
            data={{
              label: 'Vốn Hóa',
              min: valueMinMax.marketcapMin,
              max: valueMinMax.marketcapMax,
            }}
            field="marketcap"
            filterSelect={checkbox.marketcap}
            setFilterSelect={setCheckbox}
          />
          <FilterItem
            data={{
              label: 'ROE',
              min: valueMinMax.roeMin,
              max: valueMinMax.roeMax,
            }}
            field="roe"
            filterSelect={checkbox.roe}
            setFilterSelect={setCheckbox}
          />
          <FilterItem
            data={{
              label: 'ROIC',
              min: valueMinMax.pi24Min,
              max: valueMinMax.pi24Max,
            }}
            field="pi24"
            filterSelect={checkbox.roic}
            setFilterSelect={setCheckbox}
          />
          <FilterItem
            data={{
              label: 'PE',
              min: valueMinMax.peMin,
              max: valueMinMax.peMax,
            }}
            field="pe"
            filterSelect={checkbox.pe}
            setFilterSelect={setCheckbox}
          />
          <FilterItem
            data={{
              label: 'PB',
              min: valueMinMax.pbMin,
              max: valueMinMax.pbMax,
            }}
            field="pb"
            filterSelect={checkbox.pb}
            setFilterSelect={setCheckbox}
          />
          <FilterItem
            data={{
              label: 'EVEBITDA',
              min: valueMinMax.evebitdaMin,
              max: valueMinMax.evebitdaMax,
            }}
            field="evebitda"
            filterSelect={checkbox.evebitda}
            setFilterSelect={setCheckbox}
          />
          <FilterItem
            data={{
              label: 'DivYld',
              min: valueMinMax.divyldMin,
              max: valueMinMax.divyldMax,
            }}
            field="divyld"
            filterSelect={checkbox.divyld}
            setFilterSelect={setCheckbox}
          />
          <FilterItem
            data={{
              label: 'NetCash/MC',
              min: valueMinMax.netcashmcMin,
              max: valueMinMax.netcashmcMax,
            }}
            field="netcash"
            filterSelect={checkbox.netcash}
            setFilterSelect={setCheckbox}
          />
        </div>
        <div className="flex justify-center mt-4">
          <div style={{ height: 430, width: '90%' }}>
            <DataGrid
              {...data}
              columnBufferPx={50}
              disableVirtualization
              disableColumnMenu
              sx={{
                '.MuiDataGrid-columnHeader': {
                  backgroundColor: '#FFF8DC',
                },
                '.MuiDataGrid-scrollbarFiller': {
                  backgroundColor: '#FFF8DC',
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
