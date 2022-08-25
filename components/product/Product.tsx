import { ProductModel } from "../../shared/responses/ProductResponse";
import NextLink from "next/link";
import { addProductToCart } from "../../redux/slices/productSlice";
import { useAppDispatch } from "../../redux/hooks";

const Product = ({ info }: { info: ProductModel }) => {
  console.log(info.subcategoryTitle);
  const dispatch = useAppDispatch();
  const productPath = `/${info.categoryTitle}/${info.subcategoryTitle}/${info.title}`;
  return (
    <div>
      <NextLink href={productPath}>
        <div className="hover:cursor-pointer">
          <div className="flex items-center justify-center">
            <img className="" src={info.imageUrl} />
          </div>
          <div className="flex flex-col h-[100px] mt-5">
            <h1 className="text-xl font-bold">{info.title}</h1>
            <p className="max-w-[250px]">{info.description}</p>
          </div>
        </div>
      </NextLink>
      <div className="flex items-center mt-7">
        <h1 className="mr-5 font-bold">{info.price} DKK</h1>
        <button
          onClick={() => dispatch(addProductToCart({ ...info, cartAmount: 1 }))}
          className="px-2 py-2 transition-all bg-green-500 rounded-md hover:bg-green-700"
          type="button"
        >
          <p className="font-semibold">Tilføj til kurven</p>
        </button>
      </div>
    </div>
  );
};

export default Product;
