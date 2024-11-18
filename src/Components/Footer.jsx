const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Branding */}
        <div className="text-gray-800 text-lg font-semibold mb-4 md:mb-0">
          Flower
        </div>

        {/* Links Section */}
        <ul className="flex space-x-6 text-gray-600 text-sm">
          <li className="hover:text-gray-800 cursor-pointer">Home</li>
          <li className="hover:text-gray-800 cursor-pointer">About</li>
          <li className="hover:text-gray-800 cursor-pointer">Products</li>
          <li className="hover:text-gray-800 cursor-pointer">Contact</li>
        </ul>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#facebook" aria-label="Facebook" className="hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 hover:text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.012 3.657 9.166 8.438 9.878v-6.988H7.897v-2.89h2.541v-2.2c0-2.507 1.492-3.89 3.773-3.89 1.094 0 2.238.197 2.238.197v2.459h-1.259c-1.243 0-1.63.774-1.63 1.566v1.868h2.773l-.443 2.89h-2.33v6.988C18.343 21.166 22 17.012 22 12z" />
            </svg>
          </a>
          <a href="#twitter" aria-label="Twitter" className="hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 hover:text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.993 9.993 0 0 1-2.828.775A4.92 4.92 0 0 0 23.337 3.1a9.86 9.86 0 0 1-3.127 1.2 4.916 4.916 0 0 0-8.384 4.482A13.94 13.94 0 0 1 1.64 3.15 4.822 4.822 0 0 0 3.1 8.687a4.903 4.903 0 0 1-2.229-.616v.06a4.918 4.918 0 0 0 3.946 4.827 4.9 4.9 0 0 1-2.224.084 4.92 4.92 0 0 0 4.6 3.418A9.867 9.867 0 0 1 0 19.54a13.91 13.91 0 0 0 7.548 2.212c9.142 0 14.307-7.723 13.995-14.646A10.14 10.14 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a href="#instagram" aria-label="Instagram" className="hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 hover:text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.2 0 3.584.012 4.85.07 1.366.063 2.633.333 3.608 1.31.975.976 1.247 2.243 1.31 3.609.058 1.265.07 1.648.07 4.847s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.31 3.608-.976.975-2.243 1.247-3.609 1.31-1.265.058-1.648.07-4.847.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.31-.975-.976-1.247-2.243-1.31-3.609C2.175 15.633 2.163 15.2 2.163 12s.012-3.584.07-4.85c.063-1.366.333-2.633 1.31-3.608C4.448 2.497 5.715 2.225 7.081 2.163c1.265-.058 1.648-.07 4.847-.07zM12 0C8.741 0 8.332.014 7.052.072 5.71.13 4.43.407 3.275 1.563 2.12 2.718 1.843 3.998 1.785 5.34.727 8.332.712 8.742.712 12c0 3.258.014 3.668.072 4.948.058 1.342.334 2.622 1.49 3.777 1.155 1.155 2.435 1.432 3.777 1.49 1.28.058 1.69.072 4.948.072s3.668-.014 4.948-.072c1.342-.058 2.622-.334 3.777-1.49 1.155-1.155 1.432-2.435 1.49-3.777.058-1.28.072-1.69.072-4.948s-.014-3.668-.072-4.948c-.058-1.342-.334-2.622-1.49-3.777-1.155-1.155-2.435-1.432-3.777-1.49C15.668.014 15.258 0 12 0z" />
              <circle cx="12" cy="12" r="3.2" />
              <path d="M18.406 4.594a1.44 1.44 0 1 0 0 2.879 1.44 1.44 0 0 0 0-2.879z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

