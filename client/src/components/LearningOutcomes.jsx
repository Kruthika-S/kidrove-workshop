function LearningOutcomes() {
  const outcomes = [
    "Introduction to AI",
    "Robot Design Basics",
    "Programming Logic",
    "Machine Learning Concepts",
    "Building Real Projects"
  ];

  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">
        Learning Outcomes
      </h2>

      <ul className="space-y-3">
        {outcomes.map((item, index) => (
          <li key={index}>
            ✅ {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LearningOutcomes;