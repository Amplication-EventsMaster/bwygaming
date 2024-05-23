import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { PaymentTitle } from "../payment/PaymentTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput source="payment.id" reference="Payment" label="payment">
          <SelectInput optionText={PaymentTitle} />
        </ReferenceInput>
        <DateTimeInput label="transactionDate" source="transactionDate" />
      </SimpleForm>
    </Edit>
  );
};
