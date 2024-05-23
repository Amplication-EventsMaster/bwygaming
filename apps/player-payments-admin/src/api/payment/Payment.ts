import { Customer } from "../customer/Customer";
import { Transaction } from "../transaction/Transaction";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  status?: "Option1" | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
