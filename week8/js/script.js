console.log('I am script.js');

async function lookupProduct() {
    console.log('I am looking up the product');

    // Get the barcode from the input element

    const barcodeValue = document.getElementById('barcodeInput').value

    const resultDivElement = document.getElementById('result')

    if (!barcodeValue) {
        resultDivElement.innerHTML = 'Enter a barcode';
        return;
    }

    // test number: 737628064502 | 4061462073267 | 5020411121151
    const url = `https://world.openfoodfacts.org/api/v0/product/${barcodeValue}.json`;

    console.log(url);

    try {

        const response = await fetch(url); // retreive from the url
        const data = await response.json(); // extract the data part of the response which is json
        console.log(data) // log it out so you can see it

        if (data.status == 1) {
            const product = data.product;
            const name = product.product_name || "No name available";
            const ingredients = product.ingredients_text || "No ingredient list available";
            const image = product.image_front_small_url;

            resultDivElement.innerHTML =`
            <h2>${name}</h2>
            <p><strong>Ingredients: ${ingredients} </p>
            <img src="${image}" />
            `;

        } else {

            resultDivElement.innerHTML = "<p>Product not found</p>";
        } // end if 



    } catch (error) {

        console.error('Error fetching product', error);
        resultDivElement.innerHTML = "<p>Error fetching product data</p>";

    } // end catch


    // Get a reference to the div where we will place the result

    //CAll an api which looks up the barcode and renders the result



}