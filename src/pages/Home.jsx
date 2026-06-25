import PopularDestinations from "../components/PopularDestinations"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"

function Home() {
  return (
    <>
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/hero.png')" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 px-4 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Explore the World with Us
        </h1>
        <p className="mb-8 mt-4 text-lg text-white md:text-2xl">
          Discover amazing places at exclusive deals
        </p>
        <button className="rounded-full border px-6 py-2 text-lg text-white transition duration-300 hover:scale-105 hover:bg-blue-500 md:text-xl">
          Get Started
        </button>
      </div>
    </div>
    <PopularDestinations/>
    <Services/>
    <Testimonials />
    </>
  )
}

export default Home
