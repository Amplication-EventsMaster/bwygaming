import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  payment?: PaymentWhereUniqueInput | null;
  transactionDate?: Date | null;
};
