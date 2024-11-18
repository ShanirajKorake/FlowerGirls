import wishIcon from '../assets/wish.svg';
import cartIcon from '../assets/cart.svg';
import profIcon from '../assets/profile.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shadow-lg">
      <div className="container p-4 mx-auto lg:px-20 flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="text-4xl font-bold ">
          <Link to="/" aria-label="Home">Flower</Link>
        </div>
        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex font-bold space-x-6">
            <li>
              <Link to="/" className="hover:text-black text-gray-600">
               Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black text-gray-600">About</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-black text-gray-600">Products</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-black text-gray-600">Contact</Link>
            </li>
          </ul>
        </nav>
        
        {/* User Actions */}
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#wish" aria-label="Wishlist">
                <img src={wishIcon} alt="Wishlist" className="w-7 h-7 hover:opacity-80" />
              </a>
            </li>
            <li>
              <a href="#cart" aria-label="Cart">
                <img src={cartIcon} alt="Cart" className="w-7 h-7 hover:opacity-80" />
              </a>
            </li>
            <li>
              <a href="#profile" aria-label="Profile">
                <img src={profIcon} alt="Profile" className="w-6 h-7 hover:opacity-80" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;


