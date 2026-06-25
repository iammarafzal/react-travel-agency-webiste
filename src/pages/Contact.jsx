import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

function Contact() {
  return (
    <main className="bg-gray-100 pt-28">
      <section className="container mx-auto px-4 pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Let us plan your next trip
          </h1>
          <p className="mt-5 text-slate-600">
            Tell us what kind of journey you have in mind and our team will get
            back to you with ideas, options, and next steps.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <FaPhoneAlt className="text-2xl text-blue-600" />
              <h2 className="mt-4 text-lg font-semibold text-slate-900">Phone</h2>
              <p className="mt-2 text-sm text-slate-600">+92 300 1234567</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <FaEnvelope className="text-2xl text-blue-600" />
              <h2 className="mt-4 text-lg font-semibold text-slate-900">Email</h2>
              <p className="mt-2 text-sm text-slate-600">hello@travelagency.com</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <FaMapMarkerAlt className="text-2xl text-blue-600" />
              <h2 className="mt-4 text-lg font-semibold text-slate-900">Office</h2>
              <p className="mt-2 text-sm text-slate-600">Main Boulevard, Lahore, Pakistan</p>
            </div>
          </div>

          <form className="rounded-lg bg-white p-6 shadow-md">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Full Name
                <input
                  type="text"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Email Address
                <input
                  type="email"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-slate-700">
              Destination
              <input
                type="text"
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Where do you want to go?"
              />
            </label>
            <label className="mt-5 block text-sm font-medium text-slate-700">
              Message
              <textarea
                rows="6"
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Tell us about your trip..."
              />
            </label>
            <button
              type="submit"
              className="mt-6 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact
