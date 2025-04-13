import {Button} from '../ui/button';

function ProductTemplate(props) {

  /**
   * click event
   * @param id
   */
  const onClick = (id) => {
    props.handleClickBuy(id);
  };

  return (
    <div className="pricing-list">
      <div className="pricing-list-container flex vm:flex-wrap sm:flex-nowrap justify-center vm:gap-2 sm:gap-6">
        {props.products.map((pricing) => (
          <div key={pricing.id}
               className={`pricing-item ${props.cls} bg-white rounded-lg flex flex-col items-center gap-y-8 py-4 px-2`}>
            <h5 className="text-center text-[rgb(84, 91, 102)] font-semibold">{pricing.name}</h5>
            <p className="text-center font-semibold text-[#098DFE]">
              Tối thiểu: {' '}
              {pricing.minimumBudget.toLocaleString('it-IT', {style: 'currency', currency: 'VND'})}
            </p>
            <p>Thời gian: {pricing.commitmentTime} tháng</p>
            <p className="text-center text-red-600">Thưởng: {pricing.bonus}</p>
            <p className="text-center text-gray-900">Phí: {pricing.navFee}</p>
            <p className="text-center text-grey-500">
              Tỷ lệ lợi nhuận cam kết: {pricing.profitRateCommitment}%
            </p>
            <p className="text-center text-grey-500">
              Tài khoản miễn phí cho website: {pricing.acountFeeForWebsite}
            </p>
            <p className="ml-2 text-black text-center">{pricing.description}</p>
            <Button variant="primary"
                    className="w-[90%] vm:mb-0 sm:mb-4"
                    onClick={() => onClick(pricing.id)}>
              Mua
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductTemplate;
