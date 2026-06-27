"use client";
import { useState, useMemo, useEffect } from 'react';
import { productsData } from '../../productsData';

export default function ProductListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("Featured");

  const categories = ["Automobiles", "Clothing", "Home interiors", "Electronics"];

  const brandsByCategory = {
    "All": ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo", "Nike", "Adidas", "Canon", "IKEA"],
    "Automobiles": ["Apple", "Tesla", "BMW", "Garmin"],
    "Clothing": ["Nike", "Adidas", "Zara", "Samsung", "Lenovo"], 
    "Home interiors": ["IKEA", "Pocco", "HomeGoods"],
    "Electronics": ["Samsung", "Apple", "Huawei", "Lenovo", "Canon"]
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const searchParam = params.get("search");
      const catParam = params.get("cat");

      if (searchParam) setSearchQuery(searchParam);
      
      if (catParam && catParam !== "all") {
        const normalizedParam = catParam.toLowerCase();
        if (normalizedParam === "tech" || normalizedParam === "computer and tech") {
          setSelectedCategory("Electronics");
        } else if (normalizedParam === "clothes" || normalizedParam === "clothes and wear") {
          setSelectedCategory("Clothing");
        } else if (normalizedParam === "automobiles") {
          setSelectedCategory("Automobiles");
        } else if (normalizedParam === "home" || normalizedParam === "home interiors") {
          setSelectedCategory("Home interiors");
        }
        setSelectedBrands([]); 
      }
    }
  }, []);

  const handleCheckboxChange = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter(item => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  // Filtering engine 
  const filteredProducts = useMemo(() => {
    return productsData
      .filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              product.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || 
                                product.category.toLowerCase() === selectedCategory.toLowerCase();
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const matchesVerified = !verifiedOnly || product.verified;
        
        return matchesSearch && matchesCategory && matchesBrand && matchesVerified;
      })
      .sort((a, b) => {
        if (sortBy === "Price Low") return a.price - b.price;
        if (sortBy === "Price High") return b.price - a.price;
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedBrands, verifiedOnly, sortBy]);

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh', paddingBottom: '40px', fontFamily: 'sans-serif' }}>
      
      {/* Active Filter Strip Indicator banner */}
      {(searchQuery || selectedCategory !== "All") && (
        <div style={{ background: '#e1f0ff', padding: '12px 20px', textAlign: 'center', fontSize: '14px', color: '#0d6efd', borderBottom: '1px solid #ccd8e5' }}>
          Active Filters: {searchQuery && <span>Search: <strong>"{searchQuery}"</strong></span>} 
          {selectedCategory !== "All" && <span> {searchQuery && " | "} Category: <strong>"{selectedCategory}"</strong></span>}
          <button 
            onClick={() => { 
              setSearchQuery(""); 
              setSelectedCategory("All");
              setSelectedBrands([]);
              window.history.replaceState({}, '', '/products'); 
            }} 
            style={{ marginLeft: '16px', background: 'none', border: 'none', color: '#ff3b30', cursor: 'pointer', textDecoration: 'underline', fontWeight: '500' }}
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Catalog Breadcrumbs */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '15px 20px', color: '#8b96a5', fontSize: '14px' }}>
        Home &gt; Catalog &gt; <span style={{ color: '#505050' }}>{selectedCategory}</span>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', gap: '24px' }}>
        
        {/* SIDEBAR BLOCK */}
        <aside style={{ width: '240px', flexShrink: 0 }}>
          <div style={{ borderTop: '1px solid #e3e8ee', padding: '14px 0' }}>
            <h4 style={{ display: 'flex', justifyContent: 'space-between', margin: '0 0 12px 0', fontSize: '16px', color: '#1c1c1c' }}>Category ^</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button onClick={() => { setSelectedCategory("All"); setSelectedBrands([]); }} style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', width: '100%', cursor: 'pointer', color: selectedCategory === "All" ? '#0d6efd' : '#505050', fontSize: '15px' }}>All Products</button>
              </li>
              {categories.map(cat => (
                <li key={cat}>
                  <button onClick={() => { setSelectedCategory(cat); setSelectedBrands([]); }} style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', width: '100%', cursor: 'pointer', color: selectedCategory.toLowerCase() === cat.toLowerCase() ? '#0d6efd' : '#505050', fontSize: '15px', fontWeight: selectedCategory.toLowerCase() === cat.toLowerCase() ? '500' : 'normal' }}>{cat}</button>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ borderTop: '1px solid #e3e8ee', padding: '14px 0' }}>
            <h4 style={{ display: 'flex', justifyContent: 'space-between', margin: '0 0 12px 0', fontSize: '16px', color: '#1c1c1c' }}>Brands ^</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {(brandsByCategory[selectedCategory] || brandsByCategory["All"]).map(brand => (
                <label key={brand} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1c1c1c', fontSize: '15px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => handleCheckboxChange(brand, selectedBrands, setSelectedBrands)} style={{ width: '18px', height: '18px', accentColor: '#0d6efd' }} />
                  {brand}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* PRODUCTS MAIN LISTING GRID FEED */}
        <main style={{ flexGrow: 1 }}>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e3e8ee', borderRadius: '6px', padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '15px', color: '#1c1c1c' }}>
              <span style={{ fontWeight: 'bold' }}>{filteredProducts.length}</span> items found in <span style={{ fontWeight: '500' }}>{selectedCategory}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '15px' }}>
                <input type="checkbox" checked={verifiedOnly} onChange={(e) => setVerifiedOnly(e.target.checked)} style={{ width: '16px', height: '16px', accentColor: '#0d6efd' }} /> Verified only
              </label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ border: '1px solid #e3e8ee', padding: '6px 12px', borderRadius: '4px', background: '#fff', fontSize: '14px', cursor: 'pointer' }}>
                <option value="Featured">Featured</option>
                <option value="Price Low">Price: Low to High</option>
                <option value="Price High">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* THE GRID VIEW */}
          {filteredProducts.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  onClick={() => window.location.href = `/products/${product.id}`} 
                  style={{ backgroundColor: '#ffffff', border: '1px solid #e3e8ee', borderRadius: '6px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0,0,0,0.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                >
                  <div>
                    <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', backgroundColor: '#fafafa', borderRadius: '4px' }}>
                      <img src={product.image} alt={product.title} style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1c1c1c', marginBottom: '6px' }}>
                      ${product.price.toFixed(2)}
                    </div>
                    <h3 style={{ fontSize: '14px', margin: '0 0 4px 0', fontWeight: 'normal', color: '#505050', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '38px' }}>
                      {product.title}
                    </h3>
                    <p style={{ color: '#8b96a5', fontSize: '12px', margin: '0 0 14px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Brand: {product.brand}
                    </p>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Proceeding to instant checkout process for:\n${product.title}\nTotal: $${product.price.toFixed(2)}`);
                    }}
                    style={{ 
                      width: '100%', backgroundColor: '#0d6efd', 
                      color: '#ffffff',  border: 'none',  padding: '8px 12px', 
                      borderRadius: '5px',  fontSize: '14px', 
                      fontWeight: '500', cursor: 'pointer'
                    }}
                  >
                    Buy Now
                  </button>

                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#fff', border: '1px solid #e3e8ee', borderRadius: '6px', color: '#8b96a5' }}>
              <h3>No items match your active filters or category set.</h3>
            </div>
          )}
        </main>

      </div>
    </div>
  );
}