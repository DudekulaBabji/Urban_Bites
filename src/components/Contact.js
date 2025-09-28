const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="font-bold text-3xl text-center text-gray-800 mb-6">
          Contact Us
        </h1>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-left text-gray-600 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-left text-gray-600 font-medium mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
