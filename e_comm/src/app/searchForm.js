"use client";
import { useState } from 'react';

export default function SearchForm() {
  const [category, setCategory] = useState("all");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.searchInput.value;
    
    window.location.href = `/products?search=${encodeURIComponent(query)}&cat=${encodeURIComponent(category)}`;
  };

  return (
    <form className="search-container" onSubmit={handleSearchSubmit}>
      <input 
        type="text"  name="searchInput" placeholder="Search"  className="search-input" 
      />
      
      <div className="category-dropdown">
        <select 
          className="header-select"  value={category} onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All category</option>
          {/* These values map directly to our products data structure */}
          <option value="automobiles">Automobiles</option>
          <option value="clothes">Clothes and wear</option>
          <option value="home">Home interiors</option>
          <option value="tech">Computer and tech</option>
        </select>
      </div>
      
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}