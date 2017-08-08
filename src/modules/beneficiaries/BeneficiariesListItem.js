import React from "react";
import PropTypes from "prop-types";
import { Tr, Td, Text } from "./../../components";
import { naira } from "./../../utils";

function BeneficiaryItemRow({
  id,
  name,
  phone,
  email,
  bank,
  accountNumber,
  totalPaid,
  onClick
}) {
  return (
    <Tr link onClick={onClick}>
      <Td>
        {name}
      </Td>
      <Td>
        {phone}
      </Td>
      <Td>
        {accountNumber}
      </Td>
      <Td>
        {bank}
      </Td>
      <Td>
        <Text color="textInfo">
          {naira(totalPaid)}
        </Text>
      </Td>
    </Tr>
  );
}

BeneficiaryItemRow.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string,
  bank: PropTypes.string,
  accountNumber: PropTypes.any,
  totalPaid: PropTypes.number
};

export default BeneficiaryItemRow;
