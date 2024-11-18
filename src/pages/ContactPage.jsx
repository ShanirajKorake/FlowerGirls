const ContactPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We're here to help! Reach out to us for any questions, feedback, or custom orders.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach us through any of the following channels:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-green-600 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10l9-7 9 7-9 7-9-7z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10l9 7 9-7M9 21v-6m6 6v-6"
                    />
                  </svg>
                </span>
                <span>123 Flower Street, Bloom City, Pune</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l4-4m0 0l8 8m-8-8L7 4m4 4l8 8m0 0l-4 4"
                    />
                  </svg>
                </span>
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5h18M9 3h6M9 19h6"
                    />
                  </svg>
                </span>
                <span>support@flowershop.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Find Us Here</h2>
          <div className="w-full h-64 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-gray-600">[Map Placeholder]</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

