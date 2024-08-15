import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Filter from "../../Components/Filter";
import Hero from "../../Components/Hero";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Pagination from "../../Components/Pagination";
import ProductGrid from "../../Components/ProductGrid";
import SearchBar from "../../Components/SearchBar";
import Sort from "../../Components/Sort";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Home = () => {
  const axiosPublic = useAxiosPublic();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("dateNewestFirst");
  const [appliedFilters, setAppliedFilters] = useState({
    brand: "",
    category: "",
    priceRange: [0, 1500],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosPublic("/products");
        const data = response.data;
        setProducts(data);
        setFilteredProducts(data); // Initially set to all products

        const uniqueBrands = [...new Set(data.map((product) => product.Brand))];
        const uniqueCategories = [
          ...new Set(data.map((product) => product.Category)),
        ];

        setBrands(uniqueBrands);
        setCategories(uniqueCategories);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [axiosPublic]);

  useEffect(() => {
    applyFiltersAndSort();
  }, [searchTerm, appliedFilters, sortOption]);

  const applyFiltersAndSort = () => {
    let updatedProducts = products;

    // Apply search
    if (searchTerm) {
      updatedProducts = updatedProducts.filter((product) =>
        product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply brand filter
    if (appliedFilters.brand) {
      updatedProducts = updatedProducts.filter(
        (product) => product.Brand === appliedFilters.brand
      );
    }

    // Apply category filter
    if (appliedFilters.category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.Category === appliedFilters.category
      );
    }

    // Apply price range filter
    const [minPrice, maxPrice] = appliedFilters.priceRange;
    updatedProducts = updatedProducts.filter(
      (product) => product.Price >= minPrice && product.Price <= maxPrice
    );

    // Apply sorting
    if (sortOption === "priceLowHigh") {
      updatedProducts.sort((a, b) => a.Price - b.Price);
    } else if (sortOption === "priceHighLow") {
      updatedProducts.sort((a, b) => b.Price - a.Price);
    } else {
      updatedProducts.sort(
        (a, b) =>
          new Date(b.ProductCreationDate) - new Date(a.ProductCreationDate)
      );
    }

    setFilteredProducts(updatedProducts);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
    // Reset filters and sort when a new search is performed
    setAppliedFilters({ brand: "", category: "", priceRange: [0, 1500] });
    setSortOption("dateNewestFirst");
  };

  const handleFilter = (filters) => {
    setAppliedFilters(filters);
    setCurrentPage(1);
  };

  const handleSort = (sortOption) => {
    setSortOption(sortOption);
  };

  const handleFilterReset = () => {
    // Reset filters, search term, and sort
    setAppliedFilters({ brand: "", category: "", priceRange: [0, 1500] });
    setSearchTerm("");
    setSortOption("dateNewestFirst");
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <p className="container m-auto">
        Error fetching products: {error.message}
      </p>
    );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div>
      <Helmet>
        <title>Home - Tap Shop</title>
      </Helmet>
      <Hero />
      <div className="p-4">
        <h1 className="font-bold text-5xl mb-10 text-center text-primary">
          Browse Our Products
        </h1>
        <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
        <div className="my-4 flex flex-wrap gap-4 items-center justify-center">
          <Sort onSort={handleSort} sortOption={sortOption} />
          <Filter
            onFilter={handleFilter}
            onFilterReset={handleFilterReset}
            brands={brands}
            categories={categories}
          />
        </div>
        {currentProducts.length > 0 ? (
          <>
            <ProductGrid products={currentProducts} />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <p className="text-center text-lg font-bold uppercase">
            NO PRODUCT FOUND.....
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;