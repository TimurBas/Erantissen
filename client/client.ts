import CONFIG from "../config.json";

const fetchHeros = async () => {
    const req = await fetch(`${CONFIG.localUrl}/Hero`, { method: "GET" });
    const res = req.json();
    return res;
  };
  
const fetchMostBoughtProducts = async () => {
    const req = await fetch(`${CONFIG.localUrl}/Product/MostBoughtProducts`, {
        method: "GET",
    });
    const res = await req.json();
    return res;
};

const fetchCategory = async (categoryTitle: string) => {
    const req = await fetch(`${CONFIG.localUrl}/Category/${categoryTitle}`, {
        method: "GET",
    });
    const res = req.json();
    return res;
};

const fetchSubcategory = async (subcategoryTitle: string) => {
    const req = await fetch(
      `${CONFIG.localUrl}/Subcategory/${subcategoryTitle}`,
      {
        method: "GET",
      }
    );
    const res = await req.json();
    return res;
  };

const fetchProduct = async (productTitle: string) => {
    const req = await fetch(`${CONFIG.localUrl}/Product/${productTitle}`, {
      method: "GET",
    });
    const res = await req.json();
    return res;
};

const fetchAllProducts = async () => {
  const response = await fetch(`${CONFIG.localUrl}/Product`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const json = await response.json();
  return json;
}

export {fetchAllProducts, fetchHeros, fetchMostBoughtProducts, fetchCategory, fetchSubcategory, fetchProduct}