import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import LoadingSpinner from "../../Components/LoadingSpinner";
import ProductGrid from "../../Components/ProductGrid";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Categories = () => {
  const axiosPublic = useAxiosPublic();
  
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosPublic("/products");
        const data = response.data;
        setProducts(data);

        const uniqueCategories = [
          ...new Set(data.map((product) => product.Category)),
        ];

        setCategories(uniqueCategories);

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
    <div>
      <Helmet>
        <title>Categories - Tap Shop</title>
      </Helmet>
      <div className="p-4">
        <h1 className="font-bold text-5xl my-10 text-center text-primary">
          Shop by <span className="text-green-500">Category</span>
        </h1>
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="underline text-3xl font-bold text-yellow-500 mb-6 text-center">
              {category}
            </h2>
            <ProductGrid
              products={products.filter(
                (product) => product.Category === category
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
