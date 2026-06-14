import { useState } from "react";
import axios from "axios";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/enquiry",
        formData
      );

      alert(res.data.message);
    } catch (err) {
      alert("Submission failed");
    }
  };

  return (
    <section className="py-12 px-6 bg-blue-50">
      <h2 className="text-3xl font-bold mb-6">
        Register Now
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default RegistrationForm;