import React from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
      <div>
        <label>Full Name</label>
        <input type="text" name="fullName" className="block w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" className="block w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
      <label>Name of Celebrity</label>
      <input type="text" name="celebrity" className="block w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
      <label>Industry</label>
      <input type="text" name="industry" className="block w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
      <label>Message</label>
      <textarea name="message" className="block w-full p-2 border border-gray-300 rounded"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
);
};

export default ContactUs;
       
