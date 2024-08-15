import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import LoadingSpinner from "../../Components/LoadingSpinner";
import ProductGrid from "../../Components/ProductGrid";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Brand = () => {
  const axiosPublic = useAxiosPublic();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosPublic("/products");
        const data = response.data;
        setProducts(data);

        const uniqueBrands = [...new Set(data.map((product) => product.Brand))];
        setBrands(uniqueBrands);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [axiosPublic]);

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <p className="container m-auto">
        Error fetching products: {error.message}
      </p>
    );

  return (
    <div className="p-4">
      <Helmet>
        <title>Brands - Tap Shop</title>
      </Helmet>
      <h1 className="font-bold text-5xl my-10 text-center text-primary">
          Shop by <span className="text-green-500">Brands</span>
        </h1>
      {brands.map((brand) => (
        <div key={brand} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center underline text-yellow-500">{brand}</h2>
          <ProductGrid
            products={products.filter((product) => product.Brand === brand)}
          />
        </div>
      ))}
    </div>
  );
};

export default Brand;
