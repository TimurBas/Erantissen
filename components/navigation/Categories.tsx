import Category from "./Category";

const Categories = () => {
  return (
    <div className="flex space-x-6 w-full">
      <Category categoryName="Sundhed" path="sundhed" />
      <Category categoryName="Skønhed" path="skoenhed" />
      <Category categoryName="Mad & Drikke" path="mad og drikke" />
      <Category categoryName="Personlig Pleje" path="personlig pleje" />
      <Category categoryName="Tilbud" path="tilbud" />
    </div>
  );
};

export default Categories;
