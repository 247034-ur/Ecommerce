import './globals.css';
import ShippingDropdown from './shippingDropdown';
import SearchForm from './searchForm'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {/* 1. MAIN GLOBAL MARKETPLACE HEADER */}
        <header className="site-header">
          
          <div className="logo-container">
            <img src="/icons/logo-symbol.svg" alt="Brand Logo" className="logo-icon" />
            <span className="brand-name">Brand</span>
          </div>

          {/* Clean, safe Client Component search block */}
          <SearchForm />

          <nav className="user-nav">
            <div className="nav-item">
              <img src="/icons/Profile.svg" alt="Profile" />
              <span>Profile</span>
            </div>
            <div className="nav-item">
              <img src="/icons/Message.svg" alt="Message" />
              <span>Message</span>
            </div>
            <div className="nav-item">
              <img src="/icons/Orders.svg" alt="Orders" />
              <span>Orders</span>
            </div>
            <div className="nav-item">
              <img src="/icons/Cart.svg" alt="My Cart" />
              <span>My cart</span>
            </div>
          </nav>

        </header>

        {/* 2. SECONDARY SUB-NAVBAR LINK STRIP  */}
        <nav className="sub-navbar">
          
          <div className="sub-nav-left">
            <div className="menu-hamburger">
              <span className="hamburger-icon">☰</span>
              <span>All category</span>
            </div>
            <a href="#" className="nav-link">Hot offers</a>
            <a href="#" className="nav-link">Gift boxes</a>
            <a href="#" className="nav-link">Projects</a>
            <a href="#" className="nav-link">Menu item</a>
            
            <div className="nav-dropdown-item">
              <select className="subnav-select">
                <option value="help">Help</option>
                <option value="faq">FAQs</option>
                <option value="shipping">Shipping Info</option>
                <option value="returns">Returns</option>
              </select>
            </div>
          </div>

          <div className="sub-nav-right">
            
            <div className="settings-dropdown">
              <select className="subnav-select">
                <option value="en-usd">English, USD</option>
                <option value="en-pkr">English, PKR</option>
                <option value="de-eur">Deutsch, EUR</option>
              </select>
            </div>
            
            <ShippingDropdown />

          </div>
        </nav>

        {/* 3. CORE PAGE CHANNELS HUB */}
        <main className="main-content-wrapper">
          {children}
        </main>

        {/* 4. GLOBAL SITE FOOTER */}
        <footer className="site-footer">
          <div className="footer-top">
            
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <img src="/icons/logo-symbol.svg" alt="Brand Logo" className="logo-icon" />
                <span className="brand-name">Brand</span>
              </div>
              <p className="footer-text">
                Best information about the company gies here but now lorem ipsum is
              </p>
              <div className="social-links">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <img src="/icons/facebook.svg" alt="" />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <img src="/icons/twitter.svg" alt="" />
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <img src="/icons/linkedin.svg" alt="" />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <img src="/icons/instagram.svg" alt="" />
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <img src="/icons/youtube.svg" alt="" />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Find store</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Partnership</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Find store</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Information</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Money Refund</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>For users</h4>
              <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">My Orders</a></li>
              </ul>
            </div>

            <div className="footer-col app-col">
              <h4>Get app</h4>
              <div className="app-buttons">
                <a href="#" className="app-btn">
                  <img src="/icons/app-store.svg" alt="Download on the App Store" />
                </a>
                <a href="#" className="app-btn">
                  <img src="/icons/google-play.svg" alt="Get it on Google Play" />
                </a>
              </div>
            </div>

          </div>

          <div className="footer-bottom">
            <p className="copyright">© 2023 Ecommerce.</p>
            <div className="language-selector">
              <img src="/icons/icon.svg" alt="Language Flag" className="footer-flag" />
              <span>English</span>
              <span className="arrow-up">▲</span>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}