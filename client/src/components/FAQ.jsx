import { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Do students need prior coding knowledge?",
      answer: "No, beginners are welcome."
    },
    {
      question: "Will classes be recorded?",
      answer: "Yes, recordings will be provided."
    },
    {
      question: "Will participants get certificates?",
      answer: "Yes, certificates will be provided."
    }
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold mb-6">
        FAQs
      </h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border rounded-lg mb-3"
        >
          <button
            onClick={() =>
              setOpen(open === index ? null : index)
            }
            className="w-full text-left p-4 font-semibold"
          >
            {faq.question}
          </button>

          {open === index && (
            <div className="p-4 border-t">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default FAQ;