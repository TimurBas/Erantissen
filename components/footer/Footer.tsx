import Category from "../navigation/Category";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-3 mr-25 ml-25">
        <div>
          <h1 className="text-center mb-2">Navigation</h1>
          <div className="flex flex-col">
            <Category categoryName="Hjem" path="" />
            <Category categoryName="Åbningstider" path="aabningstider" />
            <Category categoryName="Kontakt" path="kontakt" />
            <Category
              categoryName="Handelsbetingelser"
              path="handelsbetingelser"
            />
          </div>
        </div>
        <div>
          <h1 className="text-center mb-2">Information</h1>
          <div className="flex flex-col justify-center items-center">
            <div className="flex ">
              <p>Klostervej 8B, 8680 Ry</p>
            </div>
            <div className="flex ">
              <p>+45 86 89 28 83</p>
            </div>
            <div className="flex ">
              <p>info@erantissen.dk</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center mb-2">Sociale Medier</h1>
        </div>
      </div>
    </div>
  );
};
export default Footer;
