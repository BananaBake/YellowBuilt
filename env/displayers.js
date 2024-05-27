/**
 * Generates the HTML for a tart (product)
 * @param {string} image - The image of the tart
 * @param {string} name - The name of the tart
 * @param {string} price - The price of the tart
 * @param {string} description - The description of the tart
 * @retruns {string} - The HTML for the tart
 */

function displayTart(image, name, description, price) {
  if (!(image && name && description && price))
    console.error(new Error("Missing tart parameters"));
  let tartHTML = `
    <center class="background product">
    <img class="product-image" src="../images/tarts/${image}.jpeg">
    <div class="product-text">
      <p class="bold">${name}</p>
      <p>${description}</p>
      <p>£${price}</p>
      <button class="add-to-cart">Add to cart</button>
    </div>
    </center>`;
  return tartHTML;
}

/**
 * Generates the HTML for a category
 * @param {string} image - The image of the category
 * @param {string} name - The name of the category
 * @param {string} description - The description of the category
 * @param {string} url - The link of to the category page
 * @retruns {string} - The HTML for the category
 */

function displayCategory(image, name, description, url) {
  if (!(image && name && description && url))
    console.error(new Error("Missing category parameters"));
  let catHTML = `
  <center class="background product">
  <a href="./categories/${url}">
    <img class="product-image" src="./images/categories/${image}.jpeg">
    <div class="product-text">
      <p class="bold">${name}</p>
      <p>${description}</p>
    </div>
  </a>
  </center>`;
  return catHTML;
}

/**
 * Generates the HTML for a list of products (or categories)
 * @param {array} products - The list of products
 * @param {string} type - The type of the list (products or categories)
 * @retruns {string} - The HTML for the list
 */

function displayProducts(products, type) {
  let productsHTML = "";
  if (type == "t") {
    products.forEach((tart) => {
      productsHTML += displayTart(
        tart.image,
        tart.name,
        tart.description,
        tart.price,
      );
    });
  } else if (type == "c") {
    products.forEach((category) => {
      productsHTML += displayCategory(
        category.image,
        category.name,
        category.description,
        category.url,
      );
    });
  }
  return productsHTML;
}

module.exports = {
  displayTart,
  displayCategory,
  displayProducts,
};
