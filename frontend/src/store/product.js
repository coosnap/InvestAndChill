import { atom } from "recoil";

export const ProductItem = atom({
  key: "ProductItem",
  default: [{
    "name": "Star-T",
    "description": "Khách hàng sau khi được tư vấn về thu nhập và chi tiêu sẽ quyết định đầu tư vào hàng tháng một lượng vốn. Duy trì trong 12 tháng, dòng tiền nạp đều.",
    "commitmentTime": "12",
    "minimumBudget": "10000000",
    "profitRateCommitment": "15",
    "acountFeeForWebsite": "5",
    "bonus": "Không",
    "navFee": "1"
  }],
});