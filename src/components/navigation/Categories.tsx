import Category from "./Category";

const Categories = () => {
  return (
    <div className="flex space-x-6 w-full">
      <Category categoryName="Sundhed" path="sundhed" isFooter={false} />
      <Category categoryName="Skønhed" path="skoenhed" isFooter={false} />
      <Category
        categoryName="Mad & Drikke"
        path="mad og drikke"
        isFooter={false}
      />
      <Category
        categoryName="Personlig Pleje"
        path="personlig pleje"
        isFooter={false}
      />
      <Category categoryName="Tilbud" path="tilbud" isFooter={false} />
    </div>
  );
};

export default Categories;
