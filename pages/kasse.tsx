import Products from "../components/product/Products";
import type { GetServerSideProps } from "next";
import { useAppSelector } from "../redux/hooks";
import { getProductsSelector } from "../redux/slices/productSlice";
import { useRouter } from "next/router";
import { ProductModel } from "../shared/responses/ProductResponse";
import CONFIG from "../config.json";
import { useState } from "react";
import Script from "next/script";

export const getServerSideProps: GetServerSideProps = async (context) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const mostBoughtProducts = await fetchMostBoughtProducts();

  return {
    props: { mostBoughtProducts },
  };
};

const Checkout = ({
  mostBoughtProducts,
}: {
  mostBoughtProducts: ProductModel[];
}) => {
  const products = useAppSelector(getProductsSelector);
  const router = useRouter();
  const [netsResponse, setNetsResponse] = useState<string>("");
  const [netsSuccess, setNetsSuccess] = useState(false);

  const handleCheckout = async () => {
    const amountWithoutVAT = products.reduce(
      (prev, product) => prev + product.price * product.cartAmount,
      0
    );

    const taxRate = 2500; // 25% Moms

    const order = {
      order: {
        items: products.map((p) => {
          const netTotalAmount = Math.ceil(p.price * p.cartAmount);
          const taxAmount = Math.ceil((netTotalAmount * taxRate) / 10000);
          return {
            reference: p.title,
            name: p.title,
            quantity: p.quantity,
            unit: "pcs",
            unitPrice: Math.ceil(p.price),
            taxRate: taxRate,
            taxAmount: taxAmount,
            grossTotalAmount: netTotalAmount + taxAmount,
            netTotalAmount: netTotalAmount,
          };
        }),
        amount: Math.ceil(
          amountWithoutVAT + (amountWithoutVAT * taxRate) / 10000
        ),
        currency: "DKK",
      },
    };
    const checkout = {
      checkout: {
        integrationType: "EmbeddedCheckout",
        url: "http://localhost:3000/kasse/checkout.html",
        termsUrl: "http://localhost:3000/terms.html",
      },
    };

    const data = { ...order, ...checkout };
    const request = await fetch(`${CONFIG.localUrl}/Checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const jsonString = await request.json();
    const json = JSON.parse(jsonString.result);
    setNetsResponse(json.paymentId);
    setNetsSuccess(true);
  };

  return (
    <div>
      {netsSuccess ? (
        <>
          {router.push("/checkout", {
            query: { paymentId: netsResponse },
          })}
        </>
      ) : (
        <>
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
          <Products
            heading={"Andre købte også"}
            products={mostBoughtProducts}
          />
        </>
      )}
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

export default Checkout;
