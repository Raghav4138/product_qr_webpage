# **Product QR Webpage**

This repository hosts a **dynamic webpage** designed to display product details by fetching information based on URL query parameters. The project is ideal for use cases like QR-based warranty tracking systems.

---

## **Project Overview**

The webpage uses:
- **HTML/CSS** for structure and styling.
- **JavaScript** for fetching and dynamically displaying product data.
- A **JSON file** (`products.json`) to store product information.

The webpage is optimized for batch-specific tracking, allowing easy management of warranty and manufacturing details using query parameters.

---

## **Features**
- Displays product details dynamically based on URL parameters.
- Keeps the JSON file compact by handling the manufacturing date dynamically via the query string.
- Provides a user-friendly layout for customers to view their product and warranty details.

---

## **Directory Structure**
```bash
product_qr_webpage/
├── assets/          # Contains static assets like the logo
│   └── logo.png     # Company logo
├── index.html       # Main HTML file for the webpage
├── products.json    # JSON file storing product data
├── script.js        # JavaScript file for handling dynamic behavior
├── style.css        # CSS file for styling the webpage
```

## **Usage**
### 1. Add Product Details in products.json
- The products.json file stores product-specific details in the following structure:

```json
{
    "<productId>": {
        "item": "Product Name",
        "model": "Model Number",
        "warranty": "Warranty Period",
        "mrp": "Price"
    }
}
```

Example:
```json
{
    "HF32C": {
        "item": "Copper Model HF32C",
        "model": "HF32C",
        "warranty": "1 Year",
        "mrp": "₹3500"
    },
    "AL2025": {
        "item": "Aluminium Model AL2025",
        "model": "AL2025",
        "warranty": "1 Year",
        "mrp": "₹4500"
    }
}
```
### 2. Update the URL Query Parameters
- The webpage fetches data based on the following URL format:

```bash
https://raghav4138.github.io/product_qr_webpage/?product=<productId>&month=<monthDetails>
```
- Replace <productId> with the product's unique ID (e.g., HF32C).
- Replace <monthDetails> with the manufacturing month (e.g., Jan2025).
- Example: To display details for Copper Model HF32C manufactured in January 2025, use:

```bash
https://raghav4138.github.io/product_qr_webpage/?product=HF32C&month=Jan2025
```
## **Local Development**
To test the project locally:

Clone the repository:
```
git clone https://github.com/Raghav4138/product_qr_webpage.git
```
Open index.html in any browser.

## Contributions
Contributions are welcome! If you'd like to enhance the project, feel free to fork the repository, make changes, and submit a pull request.

## License
This project is licensed under the MIT License.

Feel free to contact me at rgvkansal@gmail.com for any queries or feedback!
