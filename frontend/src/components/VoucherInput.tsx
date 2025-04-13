import {Input} from "./ui/input";
import {Button} from "./ui/button";

export const VoucherInput = () => {
  return (
    <div className="voucher-input bg-white px-6 py-3 rounded-lg w-full">
      <div className="flex items-center gap-4">
        <span>Mã voucher</span>
        <div className="flex flex-1 items-center justify-between bg-white rounded-full border border-gray-400">
          <Input type="text"
                 placeholder="Mã voucher"
                 className="px-4 py-2 rounded-full placeholder:italic"/>
          <Button className="w-[140px] bg-blue-500 text-white px-4 py-2 rounded-full">
            Áp dụng
          </Button>
        </div>
      </div>
    </div>
  )
}
