import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    image: "/Images/client-1.png",
    name: "Ayesha Khan",
    location: "Lahore, Pakistan",
    body: "The team planned our honeymoon perfectly. Every hotel, transfer, and tour felt easy from start to finish.",
  },
  {
    image: "/Images/client-2.png",
    name: "Daniel Brooks",
    location: "New York, USA",
    body: "Their flight and hotel recommendations saved us time and gave us a much better trip than we expected.",
  },
  {
    image: "/Images/client-3.png",
    name: "Maya Chen",
    location: "Toronto, Canada",
    body: "I loved how personal the itinerary felt. The support team was responsive whenever we needed help.",
  },
]

function Testimonials() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h3 className="mb-8 text-center text-3xl font-bold">What Our Clients Say</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-lg bg-gray-100 p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={review.image}
                alt={review.name}
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <div className="py-2">
                <h3 className="text-center font-bold text-xl">{review.name}</h3>
                <p className="text-center text-gray-500">{review.location}</p>
              </div>
              <div className="mx-6">
                <p className="text-center font-sans text-gray-500 leading-relaxed">
                    <FaQuoteLeft className="inline mr-2 -mt-2 text-lg text-purple-600"/>
                    {review.body}
                    <FaQuoteRight className="inline ml-2 text-lg text-purple-600"/>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
