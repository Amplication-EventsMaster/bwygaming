import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  payment?: PaymentWhereUniqueInput | null;
  transactionDate?: Date | null;
};
