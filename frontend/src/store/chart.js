import { atom } from 'recoil';

export const ChartFilter = atom({
  key: 'ChartFilter',
  default: {
    tangtruongdoanhthu: '',
    tangtruongdoanhthuMin: null,
    tangtruongdoanhthuMax: null,
    marketcapMin: null,
    marketcapMax: null,
    roeMin: null,
    roeMax: null,
    pi24Min: null,
    pi24Max: null,
    peMin: null,
    peMax: null,
    pbMin: null,
    pbMax: null,
    evebitdaMin: null,
    evebitdaMax: null,
    divyldMin: null,
    divyldMax: null,
    netcashmcMin: null,
    netcashmcMax: null,
  },
});

export const PatternFilter = atom({
  key: 'PatternFilter',
  default: {
    marketcapMin: null,
    marketcapMax: null,
  },
});
