const header = [
  { title: '' },
  { title: 'Tên' },
  { title: 'Mã giao dịch' },
  { title: 'Giá' },
]

const column = [
  { no: '1', name: 'Cy Ganderton', code: 'A', cost: '1000' },
  { no: '2', name: 'Hart Hagerty', code: 'B', cost: '2000' },
  { no: '3', name: 'Brice Swyre', code: 'C', cost: '3000' },
]

function Product() {
  return (
    <div className="h-[100vh] pt-6 bg-white">
      <div className="text-center">
        <h2 className="text-[#232A46] font-semibold text-4xl">Sản phẩm</h2>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Product;