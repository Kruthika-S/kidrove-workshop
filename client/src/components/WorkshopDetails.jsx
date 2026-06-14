function WorkshopDetails() {
  const details = [
    { title: "Age Group", value: "8-14 Years" },
    { title: "Duration", value: "4 Weeks" },
    { title: "Mode", value: "Online" },
    { title: "Fee", value: "₹2,999" },
    { title: "Start Date", value: "15 July 2026" }
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Workshop Details
      </h2>

      <div className="grid md:grid-cols-5 gap-4">
        {details.map((item, index) => (
          <div
            key={index}
            className="shadow-lg rounded-xl p-5 text-center"
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkshopDetails;