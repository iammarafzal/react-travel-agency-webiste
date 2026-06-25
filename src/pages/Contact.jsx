import { useState } from "react"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi"
import Hero from "../components/Hero"
import SectionHeader from "../components/SectionHeader"
import Button from "../components/Button"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Full name is required"
    
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address"
      }
    }
    
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message content is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    }
  }

  return (
    <main className="bg-slate-50 min-h-screen pb-24 pt-20">
      {/* Hero Header */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80"
        title="Get in Touch"
        subtitle="Let our travel designers plan your next dream vacation."
        height="h-[45vh]"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start">
          
          {/* Contact Details cards */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Phone Number</h3>
                <p className="text-slate-500 text-sm mt-1">+1 (800) 456-7890</p>
                <p className="text-slate-400 text-xs mt-0.5">Mon - Fri, 9am - 6pm EST</p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <FaEnvelope size={18} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Email Support</h3>
                <p className="text-slate-500 text-sm mt-1">support@traviora.com</p>
                <p className="text-slate-400 text-xs mt-0.5">Response within 24 hours</p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Headquarters</h3>
                <p className="text-slate-500 text-sm mt-1">100 Broadway Ave, Suite 400</p>
                <p className="text-slate-400 text-xs mt-0.5">New York, NY 10005, USA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-md">
            {isSubmitted ? (
              // Success Screen
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <FiCheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 text-sm leading-relaxed mt-3 max-w-sm mx-auto">
                  Thank you for reaching out to Traviora. Our travel consultants are reviewing your request and will contact you shortly.
                </p>
                <Button
                  variant="primary"
                  className="mt-8"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              // Contact Form UI
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <SectionHeader
                    title="Send Us a Message"
                    subtitle="Inquiry Form"
                    alignment="left"
                    className="mb-8!"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all bg-slate-50/50 ${
                        errors.name ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 font-semibold flex items-center gap-1">
                        <FiAlertCircle /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all bg-slate-50/50 ${
                        errors.email ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 font-semibold flex items-center gap-1">
                        <FiAlertCircle /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className={`w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all bg-slate-50/50 ${
                      errors.subject ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-500 font-semibold flex items-center gap-1">
                      <FiAlertCircle /> {errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel plans..."
                    className={`w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all bg-slate-50/50 resize-none ${
                      errors.message ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 font-semibold flex items-center gap-1">
                      <FiAlertCircle /> {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
