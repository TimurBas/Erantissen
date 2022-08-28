import Products from "../components/product/Products";
import type { GetServerSideProps } from "next";
import { useAppSelector } from "../redux/hooks";
import { getProductsSelector } from "../redux/slices/productSlice";
import { useRouter } from "next/router";
import { ProductModel } from "../shared/responses/ProductResponse";
import CONFIG from "../config.json";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";
import initializeStripe from "../stripe/initializeStripe";

export const getServerSideProps: GetServerSideProps = async (context) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const mostBoughtProducts = await fetchMostBoughtProducts();
  return {
    props: { mostBoughtProducts },
  };
};

const Kasse = ({
  mostBoughtProducts,
}: {
  mostBoughtProducts: ProductModel[];
}) => {
  const products = useAppSelector(getProductsSelector);
  const router = useRouter();
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    async function getStripe() {
      const stripe = await initializeStripe();
      setStripe(stripe);
    }

    getStripe();
  }, []);

  const handleCheckout = async () => {
    const amountWithoutVAT = products.reduce(
      (prev, product) => prev + product.price * product.cartAmount,
      0
    );

    const taxRate = 2500; // 25% Moms

    const requestObj = {
      cancel_url: "http://localhost:3000/kasse",
      success_url: "http://localhost:3000/checkout-success",
      mode: "payment",
      line_items: products.map((p) => {
        return {
          price: {
            currency: "DKK",
            product: "prod_id31231",
            unit_amount: p.price,
          },
          quantity: p.cartAmount,
          tax_rates: {
            display_name: "MOMS",
            inclusive: false,
            percentage: 25,
            country: "DK",
          },
        };
      }),
    };

    const request = await fetch(`${CONFIG.localUrl}/Checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestObj),
    });
    const json = await request.json();
  };

  return (
    <div>
      {products.length == 0 ? (
        <div className="flex flex-col items-center justify-center mt-24 mb-24 gap-y-16">
          <h1 className="text-4xl font-bold">Din indkøbsliste er tom!</h1>
          <button
            className="px-5 py-3 text-xl font-semibold text-white transition-all bg-green-500 rounded-full hover:bg-green-700"
            onClick={() => router.push("/")}
          >
            Til Erantissen
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-4 mb-4 gap-y-16">
          <Products heading="Indkøbsliste" products={products} />
          <button
            className="px-5 py-3 text-xl font-semibold text-white transition-all bg-green-500 rounded-full hover:bg-green-700"
            onClick={handleCheckout}
          >
            Køb nu
          </button>
        </div>
      )}
      <Products heading={"Andre købte også"} products={mostBoughtProducts} />
    </div>
  );
};

const fetchMostBoughtProducts = async () => {
  const req = await fetch(`${CONFIG.localUrl}/Product/MostBoughtProducts`, {
    method: "GET",
  });
  const res = await req.json();
  return res;
};

export default Kasse;
