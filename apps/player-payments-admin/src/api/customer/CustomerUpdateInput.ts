import { PaymentUpdateManyWithoutCustomersInput } from "./PaymentUpdateManyWithoutCustomersInput";
import { TransactionUpdateManyWithoutCustomersInput } from "./TransactionUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  payments?: PaymentUpdateManyWithoutCustomersInput;
  phone2?: string | null;
  transactions?: TransactionUpdateManyWithoutCustomersInput;
};
