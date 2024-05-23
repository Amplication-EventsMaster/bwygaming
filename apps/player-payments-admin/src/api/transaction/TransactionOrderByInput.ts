import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  paymentId?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
};
