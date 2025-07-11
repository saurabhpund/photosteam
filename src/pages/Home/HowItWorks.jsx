import React from "react";

const steps = [
  { title: "Upload", desc: "Choose your best images and upload them easily." },
  { title: "Set Price & Visibility", desc: "Choose free or premium and assign categories." },
  { title: "Get Paid", desc: "Earn from every download or purchase." }
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 text-center max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
