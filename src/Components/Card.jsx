const FlowerCard = ({ name, price, image }) => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      {/* Image Section */}
      <img
        src={image}
        alt={name}
        className="w-full h-auto object-cover"
      />

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 font-medium text-sm mb-4">Rs. {price}</p>
        <button className="w-full bg-green-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-green-700 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default FlowerCard;

