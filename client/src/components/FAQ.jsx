function FAQ() {
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
      answer: "Yes, after successful completion."
    }
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold mb-6">
        FAQs
      </h2>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border p-4 rounded-lg">
          <h3 className="font-semibold">
            {faq.question}
          </h3>

          <p>{faq.answer}</p>
        </div>
      ))}
    </section>
  );
}

export default FAQ;