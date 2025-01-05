import { Loader2 } from 'lucide-react';

function LoaderChart() {
  return (
    <div className=" z-50 absolute left-0 top-0 w-full h-[100vh] bg-gray-100 flex items-center justify-center opacity-50">
      <Loader2 className="absolute flex items-center animate-spin h-8 w-8 z-10" />
    </div>
  );
}

export default LoaderChart;
