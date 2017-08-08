import React from "react";
import styled from "styled-components";
import { Flex, Button, Div, Input, Table } from "./../../components";
import BenefeciariesListItem from "./BeneficiariesListItem";
import BeneficiariesListHeader from "./BeneficiariesListHeader";

export default props => {
  return (
    <Div px={4} py={4}>
      <Flex mb={3}>
        <Button sm>New Beneficiary</Button>
        <Input placeholder="Search Beneficiaries ..." sm width="275px" />
      </Flex>
      <BeneficiariesTable>
        <Table>
          <BeneficiariesListHeader
            titles={[
              "Fullname",
              "Phone Number",
              "Account Number",
              "Bank",
              "Total paid"
            ]}
          />
          <tbody>
            {renderTableBody(props)}
          </tbody>
        </Table>
      </BeneficiariesTable>
    </Div>
  );
};

function goToBeneficiary(history, beneficiaryId) {
  history.push(`/beneficiaries/${beneficiaryId}`);
}

function renderTableBody(props) {
  return props.beneficiaries.map((beneficiary, key) =>
    <BenefeciariesListItem
      key={key}
      {...beneficiary}
      onClick={() => goToBeneficiary(props.router.history, beneficiary.id)}
    />
  );
}

const BeneficiariesTable = styled.div`
  background-color: white;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius};
  padding: 20px 20px 40px;
`;
