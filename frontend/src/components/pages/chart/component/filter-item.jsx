import { ChartFilter, PatternFilter } from '@/store/chart';
import { Unstable_NumberInput as NumberInput } from '@mui/base';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  Slider,
  styled,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

const InputRoot = styled('div')(
  ({ theme }) => `
  border-radius: 8px;
  border: 1px solid grey;
  padding: 4px;
`
);

const InputElement = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 4px;
  outline: 0;
`
);

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#07298D',
  height: 5,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 16,
    width: 16,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 2,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 4,
  },
  '& .MuiSlider-rail': {
    color: '#7E8B9E',
    opacity: 1,
    height: 4,
  },
}));

const FilterItem = (props) => {
  const min = props.data.min;
  const max = props.data.max;
  const [value, setValue] = useState([0, 100]);
  const setChartFilter = useSetRecoilState(ChartFilter);
  const setPatternFilter = useSetRecoilState(PatternFilter);

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
  };

  const handleCommitSlider = (event, newValue) => {
    if (props.field === 'tangtruongdoanhthu') {
      if (props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          tangtruongdoanhthu: props.day === 1 ? 'pi791' : props.day === 2 ? 'pi792' : 'pi793',
          tangtruongdoanhthuMin: Number(newValue[0]).toFixed(1),
          tangtruongdoanhthuMax: Number(newValue[1]).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          tangtruongdoanhthu: null,
          tangtruongdoanhthuMin: null,
          tangtruongdoanhthuMax: null,
        }));
      }
    }
    if (props.field === 'marketcap') {
      if (props.setFilterSelect) {
        if (props.filterSelect) {
          setChartFilter((prev) => ({
            ...prev,
            marketcapMin: Number(newValue[0]).toFixed(1),
            marketcapMax: Number(newValue[1]).toFixed(1),
          }));
        } else {
          setChartFilter((prev) => ({
            ...prev,
            marketcapMin: null,
            marketcapMax: null,
          }));
        }
      } else {
        setPatternFilter((prev) => ({
          ...prev,
          marketcapMin: Number(newValue[0]).toFixed(1),
          marketcapMax: Number(newValue[1]).toFixed(1),
        }));
      }
    }
    if (props.field === 'roe') {
      if (props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          roeMin: Number(newValue[0]).toFixed(1),
          roeMax: Number(newValue[1]).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          roeMin: null,
          roeMax: null,
        }));
      }
    }
    if (props.field === 'pi24') {
      if (props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          pi24Min: Number(newValue[0]).toFixed(1),
          pi24Max: Number(newValue[1]).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          pi24Min: null,
          pi24Max: null,
        }));
      }
    }
    if (props.field === 'pe') {
      if (props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          peMin: Number(newValue[0]).toFixed(1),
          peMax: Number(newValue[1]).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          peMin: null,
          peMax: null,
        }));
      }
    }
    if (props.field === 'pb') {
      if (props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          pbMin: Number(newValue[0]).toFixed(1),
          pbMax: Number(newValue[1]).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          pbMin: null,
          pbMax: null,
        }));
      }
    }
    if (props.field === 'evebitda') {
      if (props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          evebitdaMin: Number(newValue[0]).toFixed(1),
          evebitdaMax: Number(newValue[1]).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          evebitdaMin: null,
          evebitdaMax: null,
        }));
      }
    }
    if (props.field === 'divyld') {
      if (props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          divyldMin: Number(newValue[0]).toFixed(1),
          divyldMax: Number(newValue[1]).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          divyldMin: null,
          divyldMax: null,
        }));
      }
    }
    if (props.field === 'netcash') {
      if (props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          netcashMin: Number(newValue[0]).toFixed(1),
          netcashMax: Number(newValue[1]).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          netcashMin: null,
          netcashMax: null,
        }));
      }
    }
  };

  const handleChangeEnter = (e, pos) => {
    let value = e.target.value - 0;
    if (props.field === 'tangtruongdoanhthu') {
      if (pos === 'min') {
        setChartFilter((prev) => ({
          ...prev,
          tangtruongdoanhthuMin: Number(value).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          tangtruongdoanhthuMax: Number(value).toFixed(1),
        }));
      }
    }
    if (props.field === 'marketcap') {
      if (props.setFilterSelect) {
        if (pos === 'min') {
          setChartFilter((prev) => ({
            ...prev,
            marketcapMin: Number(value).toFixed(1),
          }));
        } else {
          setChartFilter((prev) => ({
            ...prev,
            marketcapMax: Number(value).toFixed(1),
          }));
        }
      } else {
        if (pos === 'min') {
          setPatternFilter((prev) => ({
            ...prev,
            marketcapMin: Number(value).toFixed(1),
          }));
        } else {
          setPatternFilter((prev) => ({
            ...prev,
            marketcapMax: Number(value).toFixed(1),
          }));
        }
      }
    }
    if (props.field === 'roe') {
      if (pos === 'min') {
        setChartFilter((prev) => ({
          ...prev,
          roeMin: Number(value).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          roeMax: Number(value).toFixed(1),
        }));
      }
    }
    if (props.field === 'pi24') {
      if (pos === 'min') {
        setChartFilter((prev) => ({
          ...prev,
          pi24Min: Number(value).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          pi24Max: Number(value).toFixed(1),
        }));
      }
    }
    if (props.field === 'pe') {
      if (pos === 'min') {
        setChartFilter((prev) => ({
          ...prev,
          peMin: Number(value).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          peMax: Number(value).toFixed(1),
        }));
      }
    }
    if (props.field === 'pb') {
      if (pos === 'min') {
        setChartFilter((prev) => ({
          ...prev,
          pbMin: Number(value).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          pbMax: Number(value).toFixed(1),
        }));
      }
    }
    if (props.field === 'evebitda') {
      if (pos === 'min') {
        setChartFilter((prev) => ({
          ...prev,
          evebitdaMin: Number(value).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          evebitdaMax: Number(value).toFixed(1),
        }));
      }
    }
    if (props.field === 'divyld') {
      if (pos === 'min') {
        setChartFilter((prev) => ({
          ...prev,
          divyldMin: Number(value).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          divyldMax: Number(value).toFixed(1),
        }));
      }
    }
    if (props.field === 'netcash') {
      if (pos === 'min') {
        setChartFilter((prev) => ({
          ...prev,
          netcashMin: Number(value).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          netcashMax: Number(value).toFixed(1),
        }));
      }
    }
  };

  const handleChangeDay = (event) => {
    props.setDay(event.target.value);
  };

  const handleClickCheckBox = () => {
    if (props.field === 'tangtruongdoanhthu') {
      props.setFilterSelect((prev) => ({ ...prev, tangtruongdoanhthu: !props.filterSelect }));
      if (!props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          tangtruongdoanhthu: props.day === 1 ? 'pi791' : props.day === 2 ? 'pi792' : 'pi793',
          tangtruongdoanhthuMin: Number(min).toFixed(1),
          tangtruongdoanhthuMax: Number(max).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          tangtruongdoanhthu: null,
          tangtruongdoanhthuMin: null,
          tangtruongdoanhthuMax: null,
        }));
      }
    }
    if (props.field === 'marketcap') {
      props.setFilterSelect((prev) => ({ ...prev, marketcap: !props.filterSelect }));
      if (!props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          marketcapMin: Number(min).toFixed(1),
          marketcapMax: Number(max).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          marketcapMin: null,
          marketcapMax: null,
        }));
      }
    }
    if (props.field === 'roe') {
      props.setFilterSelect((prev) => ({ ...prev, roe: !props.filterSelect }));
      if (!props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          roeMin: Number(min).toFixed(1),
          roeMax: Number(max).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          roeMin: null,
          roeMax: null,
        }));
      }
    }
    if (props.field === 'pi24') {
      props.setFilterSelect((prev) => ({ ...prev, roic: !props.filterSelect }));
      if (!props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          pi24Min: Number(min).toFixed(1),
          pi24Max: Number(max).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          pi24Min: null,
          pi24Max: null,
        }));
      }
    }
    if (props.field === 'pe') {
      props.setFilterSelect((prev) => ({ ...prev, pe: !props.filterSelect }));
      if (!props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          peMin: Number(min).toFixed(1),
          peMax: Number(max).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          peMin: null,
          peMax: null,
        }));
      }
    }
    if (props.field === 'pb') {
      props.setFilterSelect((prev) => ({ ...prev, pb: !props.filterSelect }));
      if (!props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          pbMin: Number(min).toFixed(1),
          pbMax: Number(max).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          pbMin: null,
          pbMax: null,
        }));
      }
    }
    if (props.field === 'evebitda') {
      props.setFilterSelect((prev) => ({ ...prev, evebitda: !props.filterSelect }));
      if (!props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          evebitdaMin: Number(min).toFixed(1),
          evebitdaMax: Number(max).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          evebitdaMin: null,
          evebitdaMax: null,
        }));
      }
    }
    if (props.field === 'divyld') {
      props.setFilterSelect((prev) => ({ ...prev, divyld: !props.filterSelect }));
      if (!props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          divyldMin: Number(min).toFixed(1),
          divyldMax: Number(max).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          divyldMin: null,
          divyldMax: null,
        }));
      }
    }
    if (props.field === 'netcash') {
      props.setFilterSelect((prev) => ({ ...prev, netcash: !props.filterSelect }));
      if (!props.filterSelect) {
        setChartFilter((prev) => ({
          ...prev,
          netcashMin: Number(min).toFixed(1),
          netcashMax: Number(max).toFixed(1),
        }));
      } else {
        setChartFilter((prev) => ({
          ...prev,
          netcashMin: null,
          netcashMax: null,
        }));
      }
    }
  };

  const handleChangeValue = (mm, e) => {
    if (mm === 'min') {
      setValue([e.target.value - 0, value[1]]);
    }
    if (mm === 'max') {
      setValue([value[0], e.target.value - 0]);
    }
  };

  useEffect(() => {
    setValue([props.data.min, props.data.max]);
  }, [props.data.min, props.data.max]);

  return (
    <div className={`flex items-center justify-between ${!props.setFilterSelect ? '' : 'w-full'}`}>
      {props.setFilterSelect && (
        <FormGroup>
          <FormControlLabel
            control={<Checkbox value={false} onClick={handleClickCheckBox} />}
            label={props.data.label}
          />
        </FormGroup>
      )}
      <div className={`flex gap-4 ${!props.setFilterSelect ? '' : 'flex-1 justify-end'}`}>
        {props.day && (
          <div className="flex">
            <Select
              disabled={!props.filterSelect}
              value={props.day}
              onChange={handleChangeDay}
              size="small"
            >
              <MenuItem value={1}>TT DTT YoY</MenuItem>
              <MenuItem value={2}>TT DTT vs TB 2 năm YoY</MenuItem>
              <MenuItem value={3}>TT DTT vs TB 3 năm YoY</MenuItem>
            </Select>
          </div>
        )}
        <div className={`flex ${!props.setFilterSelect ? '' : 'min-w-20'}`}>
          <NumberInput
            slots={{
              root: InputRoot,
              input: InputElement,
            }}
            sx={{
              position: 'relative',
              width: '8rem',
              height: '2.4rem',
              '& > .base-NumberInput-input': {
                position: 'absolute',
                top: '3px',
                width: !props.setFilterSelect ? '7.5rem' : '100%',
              },
            }}
            margin="normal"
            disabled={!props.filterSelect && props.setFilterSelect}
            value={value[0]}
            onInput={(e) => handleChangeValue('min', e)}
            variant="outlined"
            onKeyDown={(e) => {
              if (e.code === 'Enter') {
                handleChangeEnter(e, 'min');
              }
            }}
          />
        </div>
        <Box
          sx={{
            width: props.filterSelect ? 360 : 250,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <AirbnbSlider
            disabled={!props.filterSelect && props.setFilterSelect}
            value={value}
            min={min}
            max={max}
            step={1}
            onChange={handleChangeSlider}
            onChangeCommitted={handleCommitSlider}
          />
        </Box>
        <div className={`flex ${!props.setFilterSelect ? 'min-w-5' : 'min-w-20'}`}>
          <NumberInput
            slots={{
              root: InputRoot,
              input: InputElement,
            }}
            sx={{
              position: 'relative',
              width: '8rem',
              height: '2.4rem',
              '& > .base-NumberInput-input': {
                position: 'absolute',
                top: '3px',
                width: '7.5rem',
              },
            }}
            disabled={!props.filterSelect && props.setFilterSelect}
            value={value[1]}
            onInput={(e) => handleChangeValue('max', e)}
            variant="outlined"
            size="small"
            onKeyDown={(e) => {
              if (e.code === 'Enter') {
                handleChangeEnter(e, 'max');
              }
            }}
          />
        </div>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AddToPhotosOutlined sx={{ color: 'grey' }} />
          <DeleteOutline color="disabled" />
        </Box> */}
      </div>
    </div>
  );
};

export default FilterItem;
