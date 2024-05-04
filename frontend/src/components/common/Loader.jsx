import { Loader2 } from "lucide-react"

function Loader() {
  return (
    <div className="absolute left-0 top-0 w-[100vw] h-[100vh] bg-gray-100 flex items-center justify-center">
      <Loader2 className="absolute flex items-center animate-spin h-8 w-8 z-10" />
    </div>
  );
}

export default Loader;