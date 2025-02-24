import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg- rounded-2xl shadow-lg mt-24 mb-16 bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">Contact Us</h2>
      {submitted && (
        <p className="text-[#33c6f2]">Thank you for reaching out! We'll get back to you soon.</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-[#33c6f2]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#33c6f2] text-white p-2 rounded-lg hover:bg-[#33c6f2]/80 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
