import CONFIG from "../../config.json";

const fetchHeros = async () => {
  var data = apiFetch(`/Hero`, "GET")
  return data
};
  
const fetchMostBoughtProducts = async () => {
  var data = apiFetch(`/Product/MostBoughtProducts`, "GET")
  return data
};

const fetchCategory = async (categoryTitle: string) => {
  var data = apiFetch(`/Category/${categoryTitle}`, "GET")
  return data
};

const fetchSubcategory = async (subcategoryTitle: string) => {
  var data = apiFetch(`/Subcategory/${subcategoryTitle}`, "GET")
  return data
};

const fetchProduct = async (productTitle: string) => {
  var data = apiFetch(`/Product/${productTitle}`, "GET")
  return data
};

const fetchAllProducts = async () => {
  var data = apiFetch(`/Product`, "GET")
  return data
}

const apiFetch = async (endpoint: string, httpVerb: string) => {
  const response = await fetch(`${CONFIG.localUrl}${endpoint}`, {
    method: httpVerb,
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  return data;
}

export {fetchAllProducts, fetchHeros, fetchMostBoughtProducts, fetchCategory, fetchSubcategory, fetchProduct}