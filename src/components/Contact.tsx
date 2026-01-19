// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     // You can integrate with email services like EmailJS or backend API
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-5 h-5" />,
//       label: 'Email',
//       value: 'parthazad08@gmail.com',
//       href: 'mailto:parthazad08@gmail.com'
//     },
//     {
//       icon: <Linkedin className="w-5 h-5" />,
//       label: 'LinkedIn',
//       value: 'Parth Azad',
//       href: 'https://www.linkedin.com/in/parth-azad-7b749a281/'
//     },
//     {
//       icon: <Github className="w-5 h-5" />,
//       label: 'GitHub',
//       value: 'parthazad0812',
//       href: 'https://github.com/parthazad0812'
//     },
//     {
//       icon: <ExternalLink className="w-5 h-5" />,
//       label: 'Codolio',
//       value: 'Portfolio',
//       href: 'https://codolio.com/profile/usnFDuX3'
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black from-white via-gray-50 to-white"></div>
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">
//             Contact Me
//           </h2>
//           <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
//           <p className="max-w-3xl mx-auto text-lg dark:text-gray-300 text-gray-600">
//             Open to freelance, internships, and collaborations
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-6">
//                 Let's Connect
//               </h3>
//               <p className="dark:text-gray-300 text-gray-600 mb-8 leading-relaxed">
//                 Feel free to reach out for collaborations, tech projects, or just a friendly chat. 
//                 I'm always excited to discuss new opportunities and interesting challenges.
//               </p>
//             </div>

//             <div className="space-y-4">
//               {contactInfo.map((info, index) => (
//                 <a
//                   key={index}
//                   href={info.href}
//                   target={info.href.startsWith('http') ? '_blank' : undefined}
//                   rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                   className="group flex items-center space-x-4 p-4 rounded-lg dark:bg-gray-900/50 bg-gray-50 border dark:border-gray-800 border-gray-200 hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10"
//                 >
//                   <div className="flex-shrink-0 p-3 bg-green-500/20 text-green-500 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
//                     {info.icon}
//                   </div>
//                   <div>
//                     <p className="text-sm dark:text-gray-400 text-gray-500 font-medium">
//                       {info.label}
//                     </p>
//                     <p className="dark:text-white text-gray-900 font-semibold group-hover:text-green-500 transition-colors duration-300">
//                       {info.value}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="dark:bg-gray-900/50 bg-white p-8 rounded-xl border dark:border-gray-800 border-gray-200 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg dark:bg-gray-800 bg-gray-50 border dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
//                   placeholder="Your Name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg dark:bg-gray-800 bg-gray-50 border dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
//                   placeholder="your.email@example.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={6}
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg dark:bg-gray-800 bg-gray-50 border dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 resize-none"
//                   placeholder="Have a project in mind or just want to say hi?"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
//               >
//                 <Send size={20} />
//                 <span>Send Message</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import emailjs from "@emailjs/browser";
import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({
    type: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(formData.email)) {
    setStatus({ type: 'error', message: 'Please enter a valid email address.' });
    return;
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    setStatus({
      type: "error",
      message: "Email service is not configured. Please contact the administrator.",
    });
    return;
  }

  emailjs
    .send(
      serviceId,
      templateId,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      publicKey
    )
    .then(
      () => {
        setStatus({ type: "success", message: "Your message has been sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("FAILED...", error);
        setStatus({ type: "error", message: "Something went wrong. Please try again later." });
      }
    );
};


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // basic validation for email
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailPattern.test(formData.email)) {
  //     setStatus({ type: 'error', message: 'Please enter a valid email address.' });
  //     return;
  //   }

  //   // simulate submission
  //   console.log('Form submitted:', formData);

  //   // success feedback
  //   setStatus({ type: 'success', message: 'Your message has been sent successfully!' });

  //   // reset form
  //   setFormData({ name: '', email: '', message: '' });
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'parthazad08@gmail.com',
      href: 'mailto:parthazad08@gmail.com'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'Parth Azad',
      href: 'https://www.linkedin.com/in/parth-azad-7b749a281/'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'parthazad0812',
      href: 'https://github.com/parthazad0812'
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: 'Codolio',
      value: 'Portfolio',
      href: 'https://codolio.com/profile/usnFDuX3'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black from-white via-gray-50 to-white"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg dark:text-gray-300 text-gray-600">
            Open to freelance, internships, and collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-8 leading-relaxed">
                Feel free to reach out for collaborations, tech projects, or just a friendly chat. 
                I'm always excited to discuss new opportunities and interesting challenges.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center space-x-4 p-4 rounded-lg dark:bg-gray-900/50 bg-gray-50 border dark:border-gray-800 border-gray-200 hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10"
                >
                  <div className="flex-shrink-0 p-3 bg-green-500/20 text-green-500 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm dark:text-gray-400 text-gray-500 font-medium">
                      {info.label}
                    </p>
                    <p className="dark:text-white text-gray-900 font-semibold group-hover:text-green-500 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="dark:bg-gray-900/50 bg-white p-8 rounded-xl border dark:border-gray-800 border-gray-200 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg dark:bg-gray-800 bg-gray-50 border dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg dark:bg-gray-800 bg-gray-50 border dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg dark:bg-gray-800 bg-gray-50 border dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 resize-none"
                  placeholder="Have a project in mind or just want to say hi?"
                ></textarea>
              </div>

              {status.message && (
                <p
                  className={`text-sm font-medium ${
                    status.type === 'success' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
