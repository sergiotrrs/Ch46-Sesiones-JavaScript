import { domainName } from "./domainName";

const url = `${domainName()}/api/v1/Products`;

const getProducts = async (url) => {
  const response = await fetch(url);

  if (response.status !== 200) {
    const serverError = await response.json();
    throw serverError.message;
  }

  const products = (await response.json())._embedded.products;

  const listProducts = products.map(({ name, image, price }) => {
    return `
                <div class="col-lg-3 col-md-4 col-sm-5">
                    <div class="card m-2 rounded shadow-sm">
                        <div class="card-body"><strong>${name} </strong></div>
                        <img src="${image}" class="card-img-top" alt="${name}">
                        <div class="card-body">$ ${price} M.N.</div>
                    </div>                
                </div>
            `;
  });

  return listProducts.join("");
};

export { getProducts };
