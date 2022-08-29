import Products from "../components/product/Products";
import type { GetServerSideProps } from "next";
import { useAppSelector } from "../redux/hooks";
import { getProductsSelector } from "../redux/slices/productSlice";
import { useRouter } from "next/router";
import { ProductModel } from "../shared/responses/ProductResponse";
import CONFIG from "../config.json";
import { useEffect, useState } from "react";

declare var Reepay: any;

export const getServerSideProps: GetServerSideProps = async (context) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const mostBoughtProducts = await fetchMostBoughtProducts();
  return {
    props: { mostBoughtProducts },
  };
};

type EmbeddedResponse = {
  id: string; // The current session id
  invoice: string; // Invoice/charge handle
  customer: string; // Customer handle
  subscription: string; // Subscription handle
  payment_method: string; // Payment method if a new one is created
  error: string; // The error code
};

const Kasse = ({
  mostBoughtProducts,
}: {
  mostBoughtProducts: ProductModel[];
}) => {
  const products = useAppSelector(getProductsSelector);
  const router = useRouter();
  const [reepay, setReepay] = useState<any>(null);
  const [id, setId] = useState("");

  useEffect(() => {
    var rp = new Reepay.EmbeddedCheckout(null, {
      html_element: "reepay-checkout",
    });
    rp.addEventHandler(Reepay.Event.Accept, (data: EmbeddedResponse) => {
      console.log(data);
    });
    rp.addEventHandler(Reepay.Event.Error, (data: EmbeddedResponse) => {
      console.log(data);
      // TODO TELL THAT SOMETHING WENT WRONG AND GO TO CHECKOUT AGAIN
    });
    setReepay(rp);
  }, []);

  const handleCheckout = async () => {
    const requestObj = {
      locale: "da_DK",
      payment_methods: ["card", "mobilepay"],
      order: {
        handle: "order-12345679723",
        customer: {
          handle: "customer-123",
          first_name: "John",
          last_name: "Doe",
          phone: "+4531313131",
        },
        order_lines: products.map((p) => {
          return {
            ordertext: p.title,
            amount: Math.ceil(p.price),
            quantity: p.cartAmount,
            vat: 0.25,
            amount_incl_vat: false,
          };
        }),
        currency: "DKK",
      },
    };

    const request = await fetch(`${CONFIG.localUrl}/Checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestObj),
    });
    const json = await request.json();
    var id = json.id;
    setId(id);
    reepay.show(id);
  };

  return (
    <div>
      <div
        className={`flex items-center justify-center ${
          id == "" ? "w-0 h-0" : "w-auto h-auto mt-8 mb-8"
        }`}
      >
        <div
          id="reepay-checkout"
          className={` ${id == "" ? "hidden" : "w-[500px] h-[500px] block"}`}
        ></div>
      </div>
      {id == "" ? (
        <>
          {products.length == 0 ? (
            <div className="flex flex-col items-center justify-center mt-24 gap-y-16">
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
              <Products
                heading={"Andre købte også"}
                products={mostBoughtProducts}
              />
            </div>
          )}
        </>
      ) : (
        <div></div>
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

export default Kasse;
