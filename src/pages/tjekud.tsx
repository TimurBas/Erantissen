import Products from "../components/product/Products";
import type { GetServerSideProps } from "next";
import { useAppSelector } from "../redux/hooks";
import { getProductsSelector } from "../redux/slices/productSlice";
import { useRouter } from "next/router";
import { ProductModel } from "../shared/responses/ProductResponse";
import ArrowToRootPage from "../components/cart/ArrowToRootPage";
import CartProduct from "../components/cart/CartProduct";
import { useState } from "react";
import { fetchMostBoughtProducts } from "../client/client";

export const getServerSideProps: GetServerSideProps = async (context) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const mostBoughtProducts = await fetchMostBoughtProducts();
  return {
    props: { mostBoughtProducts },
  };
};

type TitleToPriceMapper = {
  title: string;
  price: number;
};

const Checkout = ({
  mostBoughtProducts,
}: {
  mostBoughtProducts: ProductModel[];
}) => {
  const products = useAppSelector(getProductsSelector);
  const router = useRouter();
  const [priceAcc, setPriceAcc] = useState<TitleToPriceMapper[]>([]);

  let productsPriceAccObj = products.map((product) => {
    return {
      price: product.cartAmount * product.price,
      title: product.title,
    };
  });

  if (productsPriceAccObj.length != 0) {
    productsPriceAccObj = productsPriceAccObj.filter(
      (obj) => !Object.values(priceAcc).some((val) => val.title == obj.title)
    );
  }

  return (
    <div>
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
        <>
          <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
              <div className="w-3/4 bg-white px-10 py-10 dark:bg-[#133832]">
                <div className="flex justify-between border-b pb-8">
                  <h1 className="font-semibold text-2xl">Kurv</h1>
                  {products.length == 1 ? (
                    <h2 className="font-semibold text-2xl">
                      {products.length} vare
                    </h2>
                  ) : (
                    <h2 className="font-semibold text-2xl">
                      {products.length} varer
                    </h2>
                  )}
                </div>
                <div className="flex mt-10 mb-5">
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5 dark:text-stone-50">
                    Produkt
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 dark:text-stone-50">
                    Kvantitet
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 dark:text-stone-50">
                    Pris
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 dark:text-stone-50">
                    I alt
                  </h3>
                </div>
                {products.map((p) => (
                  <CartProduct key={p.title} product={p} setPriceAcc={setPriceAcc} />
                ))}
                <ArrowToRootPage />
              </div>

              <div
                id="summary"
                className="w-1/4 px-8 py-10 bg-footer dark:bg-white"
              >
                <h1 className="font-semibold text-2xl border-b pb-8 text-white dark:text-black">
                  Ordreoversigt
                </h1>
                <div>
                  <div>
                    <label className="font-medium inline-block mb-5 mt-10 text-sm uppercase text-white dark:text-black">
                      Produkter
                    </label>
                  </div>
                  <label className="font-medium inline-block mb-5 mt-10 text-sm uppercase text-white dark:text-black">
                    Levering
                  </label>

                  <select className="block p-2 text-gray-600 w-full text-sm dark:text-stone-100 dark:bg-green-600">
                    <option>Hent dine varer i butikken +0.00 DKK</option>
                    <option>Levering til din adresse +50.00 DKK</option>
                  </select>
                </div>
                <div className="border-t mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase text-white dark:text-black">
                    <span>I alt</span>
                    <span>
                      {priceAcc.length == 0
                        ? products
                            .map(
                              (product) => product.cartAmount * product.price
                            )
                            .reduce((acc, totalPrice) => acc + totalPrice)
                            .toFixed(2)
                        : (
                            parseFloat(
                              priceAcc
                                .map(
                                  (titleAndPriceObj) => titleAndPriceObj.price
                                )
                                .reduce((acc, price) => acc + price)
                                .toFixed(2)
                            ) +
                            parseFloat(
                              productsPriceAccObj
                                .map((obj) => obj.price)
                                .reduce((acc, price) => acc + price)
                                .toFixed(2)
                            )
                          ).toFixed(2)}
                      DKK
                    </span>
                  </div>
                  <button
                    className="bg-green-600 font-semibold hover:bg-green-500 py-3 text-sm text-white uppercase w-full"
                    onClick={() => {
                      router.push("/kasse");
                    }}
                  >
                    Fortsæt til betaling
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Products heading="Andre købte også" products={mostBoughtProducts} />
        </>
      )}
    </div>
  );
};

export default Checkout;
