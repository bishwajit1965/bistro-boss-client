import React from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
  // TODO: provide publish key
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_PK);
  return (
    <div>
      <SectionTitle subHeading={"Please Provide"} heading={"Payment"} />
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
