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
        const batchId = urlParams.get("batch");

        if (products[batchId]) {
            const product = products[batchId];

            // Populate the product-specific details
            document.getElementById("serial-no").innerText = batchId;
            document.getElementById("item").innerText = product.item;
            document.getElementById("model").innerText = product.model;
            document.getElementById("mfd").innerText = product.mfd;
            document.getElementById("warranty").innerText = product.warranty;
            document.getElementById("covers").innerText = product.covers;
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
            document.body.innerHTML = "<p>Invalid Batch or Product</p>";
        }
    })
    .catch(error => {
        document.body.innerHTML = "<p>Error loading product data. Please try again later.</p>";
        console.error("Error fetching products.json:", error);
    });
