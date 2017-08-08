import React from "react";
import styled from "styled-components";
import { Avatar, Flex, Div, Card, Text, Hr, Button } from "./../../components";
import { firstTwoLetters } from "./../../utils";
import SingleBeneficiaryHeader from "./SingleBeneficiaryHeader";
import SingleBeneficiaryHistory from "./SingleBeneficiaryHistory";

export default props => {
  return (
    <Div height="100%">
      <SingleBeneficiaryHeader name={props.name} />
      <Flex alignItems="flex-start" mb={6}>
        <Div width="50%" pl={5} pr={3} style={{ marginTop: "105px" }}>
          <Card>
            <Flex mt={5} mb={7} justifyContent="center">
              <Avatar circle height="105px" width="105px">
                {firstTwoLetters(props.name)}
              </Avatar>
            </Flex>
            <ProfileRow label="Name" value={props.name} />
            <ProfileRow label="Phone" value={props.phone} />
            <ProfileRow label="Email" value={props.email} />
            <ProfileRow label="Account No." value={props.accountNumber} />
            <ProfileRow label="Bank" value={props.bank} />
            <Flex justifyContent="center">
              <Button sm mt={6} mb={4}>
                Edit Beneficiary
              </Button>
            </Flex>
          </Card>
        </Div>
        <Div width="50%" pl={3} pr={5} style={{ marginTop: "105px" }}>
          <Card>
            <CardHeader title="Recent Requests" />
            <SingleBeneficiaryHistory />
          </Card>
        </Div>
      </Flex>
    </Div>
  );
};

const CardHeader = props => {
  return (
    <div>
      <Text fontSize={4} mb={4}>
        {props.title}
      </Text>
      <Hr />
    </div>
  );
};

const ProfileRow = props => {
  return (
    <StyledProfileRow>
      <Div width="50%" px={3}>
        <Text align="right" color="textMuted" fontSize={3}>
          {props.label}
        </Text>
      </Div>
      <Div width="50%" px={3} fontSize={3}>
        {props.value}
      </Div>
    </StyledProfileRow>
  );
};

const StyledProfileRow = styled(Flex)`
  border-bottom: 1px solid ${({ theme }) => theme.bg};
  padding: 20px 0;
`;
