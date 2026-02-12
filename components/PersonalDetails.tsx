import React from 'react';

const PersonalDetails: React.FC = () => {
  const details = [
    { label: 'Full Name', value: 'Aung Ko Min', icon: '' },
    { label: 'Phone Number', value: '09780952734', icon: '☎' },
    { label: 'Email Address', value: 'aelliodreww@gmail.com', icon: '✉' },
    { label: 'Address', value: 'Mandalay, 46x111 St, Myanmar', icon: '📍' },
  ];

  return (
    <section id="personal-details" className="scroll-mt-24">
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm rounded-3xl p-8 md:p-12">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 serif">Personal Details</h2>
          <div className="h-1.5 w-20 bg-amber-800 dark:bg-amber-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {details.map((detail, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-slate-50 dark:border-slate-800 last:border-0 md:[&:nth-last-child(2)]:border-0">
              <div className="flex items-center gap-3 mb-1 sm:mb-0">
                {detail.icon && <span className="text-lg select-none" role="img" aria-hidden="true">{detail.icon}</span>}
                <span className={`text-slate-500 dark:text-slate-400 font-semibold text-xs uppercase tracking-widest ${!detail.icon ? 'ml-0' : ''}`}>{detail.label}</span>
              </div>
              <span className="text-slate-900 dark:text-slate-200 font-medium text-base sm:text-right">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;