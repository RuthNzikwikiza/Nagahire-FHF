import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/products.css";

const Men = () => {
  const navigate = useNavigate();

  const [menProducts, setMenProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? menProducts : menProducts.slice(0, 2);

  useEffect(() => {
  fetch("https://nagahire-fhb-1.onrender.com/api/products/?category=men")
    .then((res) => res.json())
    .then((data) => {
      setMenProducts(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching men products:", error);
      setLoading(false);
    });
}, []);

  const bookProduct = (product) => {
    navigate("/booking", {
      state: {
        product,
        message: "Hello Anitha, I want to book this men style.",
      },
    });
  };

  return (
    <div className="products-page">
      <h1>Men's Collection</h1>
      <p className="subtitle">
        Redefining men's fashion with bold details.<br />
        Styles made to elevate your look.
      </p>

      {loading && <p className="status-text">Loading products...</p>}

      {!loading && menProducts.length === 0 && (
        <p className="status-text">No products available yet.</p>
      )}

      {!loading && menProducts.length > 0 && (
        <>
          <div className="products-grid">
            {visibleProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="description">{product.description}</p>
               <p className="price">
  {Number(product.price).toLocaleString()} RWF
</p>
                <button onClick={() => bookProduct(product)}>
                  Book this style
                </button>
              </div>
            ))}
          </div>

          <div className="toggle-btn">
            <button onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show less" : "Show all products"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Men;
