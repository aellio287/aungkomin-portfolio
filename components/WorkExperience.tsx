
import React from 'react';
import { Briefcase, Music, ShoppingCart, Home, Warehouse, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "ILBC (International Language & Business Centre)",
    role: "Preschool Music Teacher",
    period: "2025 – Present",
    icon: <Music className="w-5 h-5" />,
    color: "bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-900/40",
    description: [
      "Teach music to children under 6 years old in a fun and supportive learning environment",
      "Experienced working with young children in a learning environment",
      "Plan simple and engaging lessons suitable for young learners",
      "Develop patience, communication, and classroom management skills",
      "Create a safe and positive space that encourages creativity and learning"
    ]
  },
  {
    company: "December Guitar Store",
    role: "Sales Assistant",
    period: "1 Year",
    icon: <ShoppingCart className="w-5 h-5" />,
    color: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/40",
    description: [
      "Helped customers choose suitable musical instruments and accessories",
      "Provided friendly customer service and clear product explanations",
      "Managed product arrangement and maintained a tidy store environment",
      "Supported daily shop operations and sales activities"
    ]
  },
  {
    company: "Homega Home Mart",
    role: "Store Assistant",
    period: "1.5 Years",
    icon: <Home className="w-5 h-5" />,
    color: "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/40",
    description: [
      "Assisted customers with product inquiries and purchases",
      "Organized inventory and ensured items were properly arranged",
      "Supported stock checking and store organization",
      "Developed teamwork and time-management skills in a busy retail environment"
    ]
  },
  {
    company: "Bee International",
    role: "Warehouse Assistant",
    period: "6 Months",
    icon: <Warehouse className="w-5 h-5" />,
    color: "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    description: [
      "Assisted with stock handling, packing, and organizing inventory",
      "Maintained accurate records of incoming and outgoing items",
      "Supported warehouse organization and safety procedures",
      "Built strong attention to detail and responsibility when handling materials"
    ]
  }
];

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm rounded-3xl p-8 md:p-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-bold mb-4">
            <Briefcase className="w-4 h-4" />
            <span>MY JOURNEY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 serif">Work Experience</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">A summary of my professional background and responsibilities.</p>
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-[#FDFCF8]/50 dark:bg-slate-800/40 border border-amber-50 dark:border-slate-800 rounded-2xl p-6 hover:shadow-md transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/3">
                  <div className={`w-10 h-10 rounded-lg ${exp.color} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {exp.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1 serif leading-tight">{exp.company}</h3>
                  <p className="text-amber-800 dark:text-amber-500 font-semibold text-sm mb-2">{exp.role}</p>
                  <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-2.5">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-200 dark:bg-amber-800 mt-1.5 shrink-0"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
