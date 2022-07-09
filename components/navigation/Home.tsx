import NextLink from "next/link";
const Home = () => {
  return (
    <NextLink href="/">
      <button
        type="button"
        className="whitespace-nowrap text-5xl text-green-700 font-bold hover:text-green-500 transition-all"
      >
        Erantissen
      </button>
    </NextLink>
  );
};

export default Home;
