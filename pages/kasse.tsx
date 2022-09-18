import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CONFIG from "../config.json";
import { useAppSelector } from "../redux/hooks";
import { getProductsSelector } from "../redux/slices/productSlice";
import Form from "../components/cart/Form";

type EmbeddedResponse = {
  id: string; // The current session id
  invoice: string; // Invoice/charge handle
  customer: string; // Customer handle
  subscription: string; // Subscription handle
  payment_method: string; // Payment method if a new one is created
  error: string; // The error code
};

declare var Reepay: any;

const Cart = () => {
  const [reepay, setReepay] = useState<any>(null);
  const [id, setId] = useState("");
  const router = useRouter();
  const products = useAppSelector(getProductsSelector);

  useEffect(() => {
    var rp = new Reepay.EmbeddedCheckout(null, {
      html_element: "reepay-checkout",
    });

    setReepay(rp);
  }, []);

  useEffect(() => {
    if (id) {
      reepay.addEventHandler(Reepay.Event.Accept, (data: EmbeddedResponse) => {
        console.log(data);
        router.push({
          pathname: "/kasse/success",
          query: {
            id: id,
          },
        });
      });
      reepay.addEventHandler(Reepay.Event.Error, (data: EmbeddedResponse) => {
        console.log(data);
        // TODO TELL THAT SOMETHING WENT WRONG AND GO TO CHECKOUT AGAIN
      });
    }
  }, [id]);

  const createRequestObject = () => {
    return {
      locale: "da_DK",
      payment_methods: ["card", "mobilepay"],
      order: {
        handle: "order-23232322",
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
  };

  const handleCheckout = async () => {
    const requestObj = createRequestObject();

    const response = await fetch(`${CONFIG.localUrl}/Checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestObj),
    });
    const json = await response.json();
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
        <div className="grid grid-cols-[60%_40%] w-full mt-10 mb-10">
          <div className="ml-48">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center mt-8 mb-8 flex-start gap-y-8 basis-2/3">
                <h1 className="text-4xl font-bold">Dine oplysninger</h1>
                <Form />
              </div>
              <button
                className="px-5 py-3 text-xl font-semibold text-white transition-all bg-green-500 rounded-full hover:bg-green-700"
                onClick={handleCheckout}
              >
                Fortsæt til betaling
              </button>
            </div>
          </div>
          <div className="mr-48">hej</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cart;
