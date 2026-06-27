"use client";
import { useState, useEffect } from 'react';
import './globals.css';

export default function HomePage() {
  const [inquiry, setInquiry] = useState({ item: '', details: '', quantity: '', unit: 'Pcs' });
  const [email, setEmail] = useState('');

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const targetTimestamp = Date.now() + 
      (4 * 24 * 60 * 60 * 1000) + 
      (13 * 60 * 60 * 1000) +     
      (34 * 60 * 1000);           

    const calculateCountdown = () => {
      const difference = targetTimestamp - Date.now();
      
      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        clearInterval(intervalId);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0')
      });
    };

    calculateCountdown();
    const intervalId = setInterval(calculateCountdown, 1000);
    return () => clearInterval(intervalId); 
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiry(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry successfully sent to suppliers!");
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! ${email} has been subscribed.`);
    setEmail('');
  };

  const navigateToCategory = (catValue) => {
    window.location.href = `/products?cat=${encodeURIComponent(catValue)}`;
  };

  const navigateToProduct = (id) => {
    window.location.href = `/products/${id}`;
  };

  const handleLoginClick = () => { window.location.href = '/login'; };
  const handleJoinClick = () => { window.location.href = '/signup'; };

  const products = [
    { id: 1, title: "T-Shirt with multiple colors for men", price: "$10.30", image: "/images/tshirt.svg" },
    { id: 2, title: "Jeans short for men blue color", price: "$10.30", image: "/images/jshort.svg" },
    { id: 3, title: "Brown winter coat medium size", price: "$12.50", image: "/images/bcoat.svg" },
    { id: 4, title: "Jeans bag for travel", price: "$34.00", image: "/images/jbag.svg" },
    { id: 5, title: "Leather wallet", price: "$99.00", image: "/images/wallet.svg" },
    { id: 6, title: "Canon camera black, 100x zoom", price: "$9.99", image: "/images/camera.svg" },
    { id: 7, title: "Headset for gaming with mic", price: "$9.99", image: "/images/headphones.svg" },
    { id: 8, title: "Smartwatch silver color modern", price: "$10.30", image: "/images/watch.svg" },
    { id: 9, title: "Blue wallet for men leather material", price: "$10.30", image: "/images/wallet.svg" },
    { id: 10, title: "Jeans bag for travel for men", price: "$80.95", image: "/images/jbag2.svg" },
  ];

  const dealItems = [
    { id: 11, name: "Smart watches", discount: "-25%", image: "/images/watch.svg" },
    { id: 12, name: "Laptops", discount: "-15%", image: "/images/laptop.svg" },
    { id: 13, name: "GoPro cameras", discount: "-40%", image: "/images/camera.svg" },
    { id: 14, name: "Headphones", discount: "-25%", image: "/images/headphones.svg" },
    { id: 15, name: "Canon cameras", discount: "-25%", image: "/images/canon.svg" },
  ];

  const homeCategoryItems = [
    { id: 16, title: "Soft chairs", price: "USD 19", image: "/images/sofa.svg" },
    { id: 17, title: "Lamps", price: "USD 19", image: "/images/lamp.svg" },
    { id: 18, title: "Kitchen dishes", price: "USD 19", image: "/images/kdishes.svg" },
    { id: 19, title: "Smart watches", price: "USD 19", image: "/images/watch.svg" }, 
    { id: 20, title: "Kitchen mixer", price: "USD 100", image: "/images/mixer.svg" },
    { id: 21, title: "Blenders", price: "USD 39", image: "/images/blender.svg" },
    { id: 22, title: "Home appliance", price: "USD 19", image: "/images/appliance.png" },
    { id: 23, title: "Coffee maker", price: "USD 10", image: "/images/plant.png" },
  ];

  const electronicsItems = [
    { id: 24, title: "Smart watches", price: "USD 19", image: "/images/watch.svg" },
    { id: 25, title: "Cameras", price: "USD 89", image: "/images/camera.svg" },
    { id: 26, title: "Headphones", price: "USD 10", image: "/images/headphones2.svg" },
    { id: 27, title: "Smart watches", price: "USD 90", image: "/images/watch.svg" },
    { id: 28, title: "Gaming set", price: "USD 35", image: "/images/headphones.svg" },
    { id: 29, title: "Laptops & PC", price: "USD 340", image: "/images/laptop.svg" },
    { id: 30, title: "Smartphones", price: "USD 19", image: "/images/sphone.svg" },
    { id: 31, title: "Electric kettle", price: "USD 240", image: "/images/ekettle.svg" },
  ];

  const regions = [
    { id: 1, name: "Arabic Emirates", domain: "shopname.ae", flag: "https://flagcdn.com/w40/ae.png" },
    { id: 2, name: "Australia", domain: "shopname.ae", flag: "https://flagcdn.com/w40/au.png" },
    { id: 3, name: "United States", domain: "shopname.ae", flag: "https://flagcdn.com/w40/us.png" },
    { id: 4, name: "Russia", domain: "shopname.ru", flag: "https://flagcdn.com/w40/ru.png" },
    { id: 5, name: "Italy", domain: "shopname.it", flag: "https://flagcdn.com/w40/it.png" },
    { id: 6, name: "Denmark", domain: "denmark.com.dk", flag: "https://flagcdn.com/w40/dk.png" },
    { id: 7, name: "France", domain: "shopname.com.fr", flag: "https://flagcdn.com/w40/fr.png" },
    { id: 8, name: "Arabic Emirates", domain: "shopname.ae", flag: "https://flagcdn.com/w40/ae.png" },
    { id: 9, name: "China", domain: "shopname.ae", flag: "https://flagcdn.com/w40/cn.png" },
    { id: 10, name: "Great Britain", domain: "shopname.co.uk", flag: "https://flagcdn.com/w40/gb.png" },
  ];

  const services = [
    { id: 1, title: "Source from Industry Hubs", icon: "🔍", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=350&q=80" },
    { id: 2, title: "Customize Your Products", icon: "📦", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=350&q=80" },
    { id: 3, title: "Fast, reliable shipping by ocean or air", icon: "✈️", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=350&q=80" },
    { id: 4, title: "Product monitoring and inspection", icon: "🛡️", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=350&q=80" },
  ];

  return (
    <main className="homepage-container">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <aside className="category-sidebar">
          <ul>
            <li className="active-cat" style={{ cursor: 'pointer' }} onClick={() => navigateToCategory('automobiles')}>Automobiles</li>
            <li style={{ cursor: 'pointer' }} onClick={() => navigateToCategory('clothes')}>Clothes and wear</li>
            <li style={{ cursor: 'pointer' }} onClick={() => navigateToCategory('home')}>Home interiors</li>
            <li style={{ cursor: 'pointer' }} onClick={() => navigateToCategory('tech')}>Computer and tech</li>
            <li style={{ cursor: 'pointer' }} onClick={() => navigateToCategory('all')}>Tools, machinery</li>
            <li style={{ cursor: 'pointer' }} onClick={() => navigateToCategory('all')}>Sports and outdoor</li>
            <li style={{ cursor: 'pointer' }} onClick={() => navigateToCategory('all')}>Animal and pets</li>
            <li style={{ cursor: 'pointer' }} onClick={() => navigateToCategory('all')}>Machinery & tools</li>
            <li style={{ cursor: 'pointer' }} onClick={() => navigateToCategory('all')}>More category</li>
          </ul>
        </aside>

        <div className="promo-banner" style={{ backgroundImage: `url('/images/banner-board.svg')` }}>
          <div className="banner-content">
            <h3>Latest trending</h3>
            <h1>Electronic items</h1>
            <button className="banner-btn" onClick={() => navigateToCategory('tech')}>Learn more</button>
          </div>
        </div>

        <div className="hero-right-sidebar">
          <div className="user-auth-card">
            <div className="user-profile-header">
              <div className="user-avatar-circle">
                <svg className="avatar-svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <p className="greeting-text">Hi, user <br /><span>let's get started</span></p>
            </div>
            <button className="auth-btn join-btn" onClick={handleJoinClick}>Join now</button>
            <button className="auth-btn login-btn" onClick={handleLoginClick}>Log in</button>
          </div>
          <div className="promo-block discount-block"><p>Get US $10 off with a new supplier</p></div>
          <div className="promo-block quotes-block"><p>Send quotes with supplier preferences</p></div>
        </div>
      </section>

      {/* 2. DEALS AND OFFERS SECTION */}
      <section className="deals-section">
        <div className="deals-left-info">
          <div className="deals-title-box">
            <h2>Deals and offers</h2>
            <p>Hygiene equipments</p>
          </div>
          <div className="countdown-timer">
            <div className="timer-unit"><strong>{timeLeft.days}</strong><span>Days</span></div>
            <div className="timer-unit"><strong>{timeLeft.hours}</strong><span>Hour</span></div>
            <div className="timer-unit"><strong>{timeLeft.minutes}</strong><span>Min</span></div>
            <div className="timer-unit"><strong>{timeLeft.seconds}</strong><span>Sec</span></div>
          </div>
        </div>
        <div className="deals-items-grid">
          {dealItems.map((item) => (
            <div key={item.id} className="deal-card" style={{ cursor: 'pointer' }} onClick={() => navigateToProduct(item.id)}>
              <div className="deal-img-wrap">
                <img src={item.image} alt={item.name} onError={(e) => e.currentTarget.style.display = 'none'} />
                <div className="img-fallback">📦</div>
              </div>
              <p className="deal-item-name">{item.name}</p>
              <span className="discount-badge">{item.discount}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOME AND OUTDOOR CATEGORY GRID */}
      <section className="category-block-section">
        <div className="category-cover-banner">
          <div className="cover-content">
            <h2>Home and<br />outdoor</h2>
            <button className="source-btn" onClick={() => navigateToCategory('home')}>Source now</button>
          </div>
        </div>
        <div className="category-grid-container">
          {homeCategoryItems.map((item) => (
            <div key={item.id} className="category-item-card" style={{ cursor: 'pointer' }} onClick={() => navigateToProduct(item.id)}>
              <div className="item-card-details">
                <h4>{item.title}</h4>
                <p>From <br /><span>{item.price}</span></p>
              </div>
              <div className="item-card-img">
                <img src={item.image} alt={item.title} onError={(e) => e.currentTarget.style.display = 'none'} />
                <div className="img-fallback">📦</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONSUMER ELECTRONICS SECTION */}
      <section className="category-block-section">
        <div className="category-cover-banner electronics-banner">
          <div className="cover-content">
            <h2>Consumer<br />electronics and<br />gadgets</h2>
            <button className="source-btn" onClick={() => navigateToCategory('tech')}>Source now</button>
          </div>
        </div>
        <div className="category-grid-container">
          {electronicsItems.map((item) => (
            <div key={item.id} className="category-item-card" style={{ cursor: 'pointer' }} onClick={() => navigateToProduct(item.id)}>
              <div className="item-card-details">
                <h4>{item.title}</h4>
                <p>From <br /><span>{item.price}</span></p>
              </div>
              <div className="item-card-img">
                <img src={item.image} alt={item.title} onError={(e) => e.currentTarget.style.display = 'none'} />
                <div className="img-fallback">📦</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SUPPLIER INQUIRY FORM BANNER */}
      <section className="inquiry-banner-section">
        <div className="inquiry-overlay-content">
          <div className="inquiry-text-side">
            <h2>An easy way to send<br />requests to all suppliers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className="inquiry-form-card">
            <h3>Send quote to suppliers</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input type="text" name="item" placeholder="What item you need?" value={inquiry.item} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <textarea name="details" placeholder="Type more details" rows="3" value={inquiry.details} onChange={handleInputChange}></textarea>
              </div>
              <div className="form-group-row">
                <input type="number" name="quantity" placeholder="Quantity" value={inquiry.quantity} onChange={handleInputChange} required />
                <select name="unit" value={inquiry.unit} onChange={handleInputChange}>
                  <option value="Pcs">Pcs</option>
                  <option value="Liters">Liters</option>
                  <option value="Kg">Kg</option>
                </select>
              </div>
              <button type="submit" className="inquiry-submit-btn">Send inquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. RECOMMENDED OFFERS GRID */}
      <section className="products-section">
        <h2 className="section-title">Recommended items</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card" style={{ cursor: 'pointer' }} onClick={() => navigateToProduct(product.id)}>
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.title} onError={(e) => e.currentTarget.style.display = 'none'} />
                <div className="image-placeholder">📦</div>
              </div>
              <div className="product-info">
                <span className="product-price">{product.price}</span>
                <p className="product-name">{product.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR EXTRA SERVICES SECTION */}
      <section className="services-section">
        <h2 className="services-main-title">Our extra services</h2>
        <div className="services-grid">
          {services.map((srv) => (
            <div key={srv.id} className="service-card">
              <div className="service-img-container" style={{ backgroundImage: `url(${srv.image})` }}></div>
              <div className="service-details">
                <div className="service-icon-badge">{srv.icon}</div>
                <p className="service-card-title">{srv.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SUPPLIERS BY REGION */}
      <section className="regions-section">
        <h2 className="regions-main-title">Suppliers by region</h2>
        <div className="regions-grid">
          {regions.map((reg) => (
            <div key={reg.id} className="region-card">
              <span className="region-flag">
                <img src={reg.flag} alt={`${reg.name} flag`} className="flag-img-element" />
              </span>
              <div className="region-info">
                <h4>{reg.name}</h4>
                <p>{reg.domain}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER SUBSCRIBE BANNER */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h3>Subscribe on our newsletter</h3>
          <p>Get daily news on upcoming offers from many suppliers all over the world</p>
          <form onSubmit={handleSubscribeSubmit} className="newsletter-form">
            <div className="newsletter-input-wrapper">
              <span className="mail-icon">✉</span>
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </section>

    </main>
  );
}