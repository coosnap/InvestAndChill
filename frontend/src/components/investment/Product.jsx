import { FaCheck } from "react-icons/fa";

const packageServ = [
  { id: '1', name: 'Basic', descr: 'Đăng ký hoàn toàn miễn phí, trải nghiệm tính năng ở mức độ cơ bản', cost: 'Miễn phí', title: 'Các tính năng hàng đầu:', content: 'Mức độ giới hạn quảng cáo thấp nhất' },
  { id: '2', name: 'Basic', descr: 'Đăng ký hoàn toàn miễn phí, trải nghiệm tính năng ở mức độ cơ bản', cost: 'Miễn phí', title: 'Các tính năng hàng đầu:', content: 'Mức độ giới hạn quảng cáo thấp nhất' },
  { id: '3', name: 'Basic', descr: 'Đăng ký hoàn toàn miễn phí, trải nghiệm tính năng ở mức độ cơ bản', cost: 'Miễn phí', title: 'Các tính năng hàng đầu:', content: 'Mức độ giới hạn quảng cáo thấp nhất' },
  { id: '4', name: 'Basic', descr: 'Đăng ký hoàn toàn miễn phí, trải nghiệm tính năng ở mức độ cơ bản', cost: 'Miễn phí', title: 'Các tính năng hàng đầu:', content: 'Mức độ giới hạn quảng cáo thấp nhất' },
]

function Product() {
  return (
    <div className="flex justify-center bg-[#EBEDF4]">
      <div className="container h-[100vh] pt-6">
        <div className="text-center mb-8">
          <h2 className="text-[#232A46] font-semibold text-4xl">Các gói dịch vụ</h2>
        </div>
        <div className="gap-6 flex">
          {packageServ.map(e =>
            <div key={e.id} className="w-1/4 h-full bg-white rounded-lg flex flex-col items-center gap-y-8 py-4 px-2">
              <h3 className="text-2xl font-semibold text-gray-900">{e.name}</h3>
              <p className="text-md text-center text-gray-900">{e.descr}</p>
              <h2 className="text-4xl text-center text-[#098DFE] font-semibold">{e.cost}</h2>
              <ul>
                <p className="text-start font-semibold text-black mb-2">{e.title}</p>
                <li className="flex items-center">
                  <FaCheck color="blue" />
                  <span className="ml-2 text-black">{e.content}</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;