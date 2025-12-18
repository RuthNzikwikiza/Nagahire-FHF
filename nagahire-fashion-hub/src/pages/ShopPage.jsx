import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ShopPage.css";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/products/`)
      .then((res) => res.json())
      .then((data) => setProducts(data.results || data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [API_URL]);

  const handleBook = (product) => {
    navigate("/booking", {
      state: {
        message: `Hello Anitha, I want to book this product: ${product.title}.`,
        product,
      },
    });
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop Products</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">RWF {product.price}</p>

            <button className="book-btn" onClick={() => handleBook(product)}>
              Book
            </button>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="no-results">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
