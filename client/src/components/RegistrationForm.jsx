import { useState } from "react";
import axios from "axios";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");

    if (formData.name.trim().length < 3) {
      alert("Name must be at least 3 characters");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Phone number must contain exactly 10 digits");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/enquiry",
        formData
      );

      setSuccess(res.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    } catch (err) {
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="registration" className="py-12 px-6 bg-blue-50">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Register Now
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4 bg-white p-6 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded text-center">
            {success}
          </div>
        )}
      </form>
    </section>
  );
}

export default RegistrationForm;