import NextLink from "next/link";
const Home = () => {
  return (
    <NextLink href="/">
      <button
        type="button"
        className="whitespace-nowrap font-bold sm:text-2xl md:text-5xl text-green-700 dark:text-primary hover:text-green-600 dark:hover:text-green-200 transition-all"
      >
        Erantissen
      </button>
    </NextLink>
  );
};

export default Home;
