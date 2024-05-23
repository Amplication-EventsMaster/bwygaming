import { Payment } from "../payment/Payment";
import { Transaction } from "../transaction/Transaction";

export type Customer = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  payments?: Array<Payment>;
  phone2: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
