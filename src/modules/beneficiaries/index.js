import React from "react";
import { Route } from "react-router-dom";

import { Div } from "./../../components";
import BeneficiariesList from "./BeneficiariesList";
import SingleBeneficiary from "./SingleBeneficiary";

export default props => {
  return (
    <Div height="100%">
      <Route
        path="/beneficiaries"
        exact
        render={router =>
          <BeneficiariesList
            beneficiaries={props.beneficiaries}
            router={router}
          />}
      />
      <Route
        path="/beneficiaries/:id"
        render={({ match }) => renderBeneficiary(match, props.beneficiaries)}
      />
    </Div>
  );
};

function renderBeneficiary(match, beneficiaries) {
  const beneficiary = beneficiaries.find(
    req => "" + req.id === match.params.id
  );
  return <SingleBeneficiary {...beneficiary} />;
}
