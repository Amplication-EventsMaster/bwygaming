import { Customer } from "../customer/Customer";
import { Payment } from "../payment/Payment";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  payment?: Payment | null;
  transactionDate: Date | null;
  updatedAt: Date;
};
