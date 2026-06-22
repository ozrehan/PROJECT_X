export default function ContactPage() {
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
        {/* Contact Form */}
        <div className="border rounded-lg sm:rounded-xl p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Send us a Message</h2>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm sm:text-base"
            />
            
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm sm:text-base"
            />
            
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm sm:text-base resize-none"
            />
            
            <button className="w-full bg-amber-500 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-600 transition text-sm sm:text-base">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="border rounded-lg sm:rounded-xl p-6">
            <h3 className="font-bold mb-2 text-base sm:text-lg">📍 Address</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Hyderabad, Telangana<br />India
            </p>
          </div>

          <div className="border rounded-lg sm:rounded-xl p-6">
            <h3 className="font-bold mb-2 text-base sm:text-lg">📱 Phone</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              +91-XXXX-XXXX-XX<br />
              Available 24/7
            </p>
          </div>

          <div className="border rounded-lg sm:rounded-xl p-6">
            <h3 className="font-bold mb-2 text-base sm:text-lg">✉️ Email</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              support@oz.com<br />
              hello@oz.com
            </p>
          </div>

          <div className="border rounded-lg sm:rounded-xl p-6">
            <h3 className="font-bold mb-2 text-base sm:text-lg">⏰ Hours</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Mon - Sun<br />
              24 Hours Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
