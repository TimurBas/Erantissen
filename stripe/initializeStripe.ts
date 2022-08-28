import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      "pk_test_51Laz4cEUjePeoHs8DvP3gKW2CITtIM0olWYvmUPugkItQtoToSKvoYRoR8QBfrQaEfAXNXHcbOo6ZRCoB9wIxFRO00tqO4Lng2"
    );
  }
  return stripePromise;
};

export default initializeStripe;
