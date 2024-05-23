import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TransactionUpdateManyWithoutPaymentsInput } from "./TransactionUpdateManyWithoutPaymentsInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  status?: "Option1" | null;
  transactions?: TransactionUpdateManyWithoutPaymentsInput;
};
