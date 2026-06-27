"use client";
import { use, useState } from 'react';
import { productsData } from '../../../productsData';

export default function ProductDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const productId = parseInt(params.id);

  const product = productsData.find(item => String(item.id) === String(params.id));
  const [selectedVariation, setSelectedVariation] = useState(
    product?.category === "Clothing" ? "Medium (M)" : "Standard Edition"
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div style={{ padding: '60px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2 style={{ color: '#ff3b30' }}>Product Not Found</h2>
        <p style={{ color: '#8b96a5' }}>The specified inventory index item could not be retrieved.</p>
        <button onClick={() => window.location.href = '/products'} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#0d6efd', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Back to Catalog
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`Successfully Added to Cart!\n\nItem: ${product.title}\nVariation: ${selectedVariation}\nQuantity: ${quantity}\nTotal: $${(product.price * quantity).toFixed(2)}`);
  };

  const variationOptions = product.category === "Clothing" 
    ? ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"]
    : ["Standard Edition", "Premium Pack Bundle", "Pro Extended Model Layout"];

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Back Link Breadcrumb */}
        <button 
          onClick={() => window.location.href = '/products'}
          style={{ background: 'none', border: 'none', color: '#0d6efd', fontSize: '15px', cursor: 'pointer', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
        >
          ← Back to Catalog Listing
        </button>

        {/* Detail Core Board Presentation card wrapper layout */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e3e8ee', borderRadius: '6px', padding: '40px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          
          {/* Image visual wrapper side column */}
          <div style={{ flex: '1 1 350px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa', borderRadius: '6px', padding: '20px', border: '1px solid #f2f2f2', minHeight: '350px' }}>
            <img src={product.image} alt={product.title} style={{ maxWidth: '90%', maxHeight: '320px', objectFit: 'contain' }} />
          </div>

          {/* Text profile info configuration form column right stack area */}
          <div style={{ flex: '1 2 450px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ backgroundColor: '#e1f0ff', color: '#0d6efd', fontSize: '13px', fontWeight: '600', padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {product.category}
              </span>
              <h1 style={{ fontSize: '26px', fontWeight: 'bold', color: '#1c1c1c', margin: '12px 0 8px 0', lineHeight: '1.3' }}>
                {product.title}
              </h1>
              <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#8b96a5' }}>
                Brand Manufacturer reference code: <strong style={{ color: '#505050' }}>{product.brand}</strong>
              </p>

              <hr style={{ border: 'none', borderTop: '1px solid #e3e8ee', margin: '20px 0' }} />

              <div style={{ margin: '20px 0' }}>
                <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#1c1c1c' }}>
                  ${product.price.toFixed(2)}
                </span>
                <span style={{ color: '#8b96a5', fontSize: '14px', marginLeft: '8px' }}>/ unit item standard base rate</span>
              </div>

              <p style={{ color: '#505050', fontSize: '16px', lineHeight: '1.6', margin: '0 0 24px 0' }}>
                {product.description}
              </p>
            </div>

            {/* Customizer control interactions selectors strip */}
            <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '6px', border: '1px solid #e3e8ee', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {/* Variation Selection Field */}
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', fontSize: '14px', color: '#1c1c1c', fontWeight: '500', marginBottom: '8px' }}>
                    Select Option / Size:
                  </label>
                  <select 
                    value={selectedVariation} 
                    onChange={(e) => setSelectedVariation(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #e3e8ee', backgroundColor: '#ffffff', fontSize: '15px', cursor: 'pointer' }}
                  >
                    {variationOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Quantity Field */}
                <div style={{ width: '100px' }}>
                  <label style={{ display: 'block', fontSize: '14px', color: '#1c1c1c', fontWeight: '500', marginBottom: '8px' }}>
                    Quantity:
                  </label>
                  <input 
                    type="number" 
                    min="1" 
                    max="99"
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    style={{ width: '100%', padding: '9px', borderRadius: '5px', border: '1px solid #e3e8ee', backgroundColor: '#ffffff', fontSize: '15px', textAlign: 'center', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Add to Cart Submit Trigger Button */}
              <button 
                onClick={handleAddToCart}
                style={{ width: '100%', backgroundColor: '#ff9017', color: '#ffffff', border: 'none', padding: '14px', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.2s' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e07e12'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#ff9017'}
              >
                🛒 Add To Cart
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}