import { ProductModel } from "../../shared/responses/ProductResponse";
import NextLink from "next/link";
import { useRouter } from "next/router";

const Product = ({ info }: { info: ProductModel }) => {
  // const { pathname } = useRouter();
  const fullPath = `/${info.categoryTitle}/${info.subCategoryTitle}/${info.title}`;
  return (
    <NextLink href={fullPath}>
      <div className="hover:cursor-pointer">
        <div className="flex justify-center items-center">
          <img className="" src={info.imageUrl} />
        </div>
        <div className="flex flex-col h-[100px] mt-5">
          <h1 className="font-bold text-xl">{info.title}</h1>
          <p className="max-w-[250px]">{info.description}</p>
        </div>
        <div className="flex items-center mt-7">
          <h1 className="mr-5 font-bold">{info.price} DKK</h1>
          <button
            className="bg-green-500 py-2 px-2 rounded-md hover:bg-green-700 transition-all"
            type="button"
          >
            <p className="font-semibold">Tilføj til kurven</p>
          </button>
        </div>
      </div>
    </NextLink>
  );
};

export default Product;
