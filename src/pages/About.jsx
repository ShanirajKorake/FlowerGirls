import Footer from "../Components/Footer";
import Header from "../Components/Header";

import img from "../assets/flowers.jpg"
import img2 from "../assets/profile.svg"
const About = () => {
  return (
    <>
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            We bring nature closer to you with fresh and beautiful flowers. Discover who we are and what we do.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src={img}
            alt="Nature and flowers"
            className="rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At FlowerShop, our mission is to spread joy and love through flowers. We believe in delivering the finest
              flowers to our customers while supporting sustainable and eco-friendly practices.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We source only the freshest and highest-quality flowers to ensure customer satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Our practices are rooted in protecting the environment for future generations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in giving back and building a strong relationship with our local community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-1/2 mx-auto md:grid-cols-2 gap-8 text-center">
          {['Ms. Shruti T.', 'Ms. Arti B.'].map((name, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={img2}
                alt={name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-600">owner</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="bg-green-600 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Want to Learn More?</h2>
        <p className="text-lg mb-6">
          Contact us to discover how FlowerShop can make your life brighter with fresh flowers.
        </p>
        <a
          href="#contact"
          className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
    </>
  );
};

export default About;

