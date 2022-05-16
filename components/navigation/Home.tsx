import NextLink from "next/link";
const Home = () => {
  return (
    <NextLink href="/">
      <button type="button" className="whitespace-nowrap">
        Erantissen
      </button>
    </NextLink>
  );
};

export default Home;
