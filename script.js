// Global common data for all products
const globalData = {
    email: "mkindustries38@gmail.com",
    phone: "+91 94170 41138, +91 93164 41138",
    website: "https://mkindustriesbti.com",
    catalog: "https://example.com/catalog"
};

// Fetch the JSON file containing products' data
fetch('products.json')
    .then(response => response.json())  // Parse the JSON data
    .then(products => {
        // Get query parameters from URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get("product");
        const month = urlParams.get("month");

        // Check if the product exists in the JSON data
        if (products[productId]) {
            const product = products[productId];

            // Populate the product-specific details
            document.getElementById("serial-no").innerText = `${productId}-${month}`; // Combining product ID and month
            document.getElementById("item").innerText = product.item;
            document.getElementById("model").innerText = product.model;
            document.getElementById("mfd").innerText = month; // Use the month from the query parameter
            document.getElementById("warranty").innerText = product.warranty;
            document.getElementById("covers").innerText = "1 Year";
            document.getElementById("mrp").innerText = product.mrp;

            // Populate the global details
            document.getElementById("email").innerText = globalData.email;
            document.getElementById("email").href = `mailto:${globalData.email}`;
            document.getElementById("phone").innerText = globalData.phone;
            document.getElementById("website").innerText = "Visit Website";
            document.getElementById("website").href = globalData.website;
            document.getElementById("catalog").innerText = "Catalog Link";
            document.getElementById("catalog").href = globalData.catalog;
        } else {
            document.body.innerHTML = "<p>Invalid Product</p>";
        }
    })
    .catch(error => {
        document.body.innerHTML = "<p>Error loading product data. Please try again later.</p>";
        console.error("Error fetching products.json:", error);
    });
