import { Button } from '../ui/button';

function ProductTemplate(props) {
  const handleClick = (id) => {
    props.handleClickBuy(id);
  };

  return (
    <div className="flex gap-6">
      {props.products.map((e) => (
        <div
          key={e.id}
          className={`${props.cls} bg-white rounded-lg flex flex-col items-center gap-y-8 py-4 px-2`}
        >
          <p className="text-4xl text-center text-[rgb(84, 91, 102)] font-semibold">{e.name}</p>
          <p className="text-center text-2xl font-semibold text-[#098DFE]">
            Tối thiểu:{' '}
            {e.minimumBudget.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
          </p>
          <p>Thời gian: {e.commitmentTime} tháng</p>
          <p className="text-lg text-center text-red-600">Thưởng: {e.bonus}</p>
          <p className="text-lg text-center text-gray-900">Phí: {e.navFee}</p>
          <p className="text-lg text-center text-grey-500">
            Tỷ lệ lợi nhuận cam kết: {e.profitRateCommitment}%
          </p>
          <p className="text-lg text-center text-grey-500">
            Tài khoản miễn phí cho website: {e.acountFeeForWebsite}
          </p>
          <p className="ml-2 text-sx text-black text-center">{e.description}</p>
          <Button variant="primary" className="w-[120px] mb-4" onClick={() => handleClick(e.id)}>
            Mua
          </Button>
        </div>
      ))}
    </div>
  );
}

export default ProductTemplate;
