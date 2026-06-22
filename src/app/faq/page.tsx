export default function FAQPage() {
  const faqs = [
    {
      question: "What is Oz?",
      answer: "Oz is an e-commerce platform that delivers fashion from Hyderabad's top stores to your doorstep.",
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 1-3 business days depending on your location.",
    },
    {
      question: "What is your return policy?",
      answer: "You can return items within 7 days of delivery for a full refund.",
    },
    {
      question: "Do you accept international orders?",
      answer: "Currently, we only deliver within India.",
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order in real-time from your profile under 'My Orders'.",
    },
  ];

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
        Frequently Asked Questions
      </h1>

      <div className="max-w-3xl space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="border rounded-lg sm:rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition group"
          >
            <summary className="font-bold text-sm sm:text-base md:text-lg flex justify-between items-center gap-3">
              {faq.question}
              <span className="text-amber-500 group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-4 leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-8 sm:mt-10 bg-amber-50 border border-amber-200 rounded-lg sm:rounded-xl p-6">
        <h2 className="font-bold mb-2 text-sm sm:text-base md:text-lg">
          Can't find your answer?
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-4">
          Contact our support team for assistance.
        </p>
        <button className="w-full bg-amber-500 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-600 transition text-sm sm:text-base">
          Contact Support
        </button>
      </div>
    </div>
  );
}