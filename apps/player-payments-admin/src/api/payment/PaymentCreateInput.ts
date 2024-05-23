import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TransactionCreateNestedManyWithoutPaymentsInput } from "./TransactionCreateNestedManyWithoutPaymentsInput";

export type PaymentCreateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  status?: "Option1" | null;
  transactions?: TransactionCreateNestedManyWithoutPaymentsInput;
};
