export default function CustomerReviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Amazing collection and super fast delivery! Got my order on the same day.",
    },
    {
      name: "Priya Verma",
      text: "Quality is top-notch and prices are very reasonable. Oz is my new go-to store.",
    },
    {
      name: "Arjun Patel",
      text: "Easy returns and great customer support. Love shopping on Oz!",
    },
    {
      name: "Neha Reddy",
      text: "Finally a platform that brings all the best stores together.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          WHAT OUR CUSTOMERS SAY
        </h2>

        <button>
          View all reviews →
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-5">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="bg-white border rounded-2xl p-6 shadow-sm"
          >
            <div className="text-amber-500 text-lg mb-4">
              ★★★★★
            </div>

            <p className="text-gray-700">
              {review.text}
            </p>

            <div className="mt-6 font-medium">
              — {review.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}