import { TabChart } from './component/tab';

export const Charts = () => {
  return (
    <div className="w-[90%] flex flex-col gap-8 mx-auto mt-8 pb-8">
      <div className="text-[2rem] font-bold">Vietcombank</div>
      <TabChart />
    </div>
  );
};
