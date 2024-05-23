import { PaymentCreateNestedManyWithoutCustomersInput } from "./PaymentCreateNestedManyWithoutCustomersInput";
import { TransactionCreateNestedManyWithoutCustomersInput } from "./TransactionCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  payments?: PaymentCreateNestedManyWithoutCustomersInput;
  phone2?: string | null;
  transactions?: TransactionCreateNestedManyWithoutCustomersInput;
};
