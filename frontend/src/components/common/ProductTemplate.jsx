import { Button } from '../ui/button';

function ProductTemplate(props) {
  const handleClick = (id) => {
    props.handleClickBuy(id);
  };

  return (
    <div className="flex vm:flex-wrap sm:flex-nowrap justify-center vm:gap-2 sm:gap-6">
      {props.products.map((e) => (
        <div
          key={e.id}
          className={`${props.cls} bg-white rounded-lg flex flex-col items-center gap-y-8 py-4 px-2`}
        >
          <h6 className="text-center text-[rgb(84, 91, 102)] font-semibold">{e.name}</h6>
          <p className="text-center font-semibold text-[#098DFE]">
            Tối thiểu:{' '}
            {e.minimumBudget.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
          </p>
          <p>Thời gian: {e.commitmentTime} tháng</p>
          <p className="text-center text-red-600">Thưởng: {e.bonus}</p>
          <p className="text-center text-gray-900">Phí: {e.navFee}</p>
          <p className="text-center text-grey-500">
            Tỷ lệ lợi nhuận cam kết: {e.profitRateCommitment}%
          </p>
          <p className="text-center text-grey-500">
            Tài khoản miễn phí cho website: {e.acountFeeForWebsite}
          </p>
          <p className="ml-2 text-black text-center">{e.description}</p>
          <Button
            variant="primary"
            className="w-[90%] vm:mb-0 sm:mb-4"
            onClick={() => handleClick(e.id)}
          >
            Mua
          </Button>
        </div>
      ))}
    </div>
  );
}

export default ProductTemplate;
