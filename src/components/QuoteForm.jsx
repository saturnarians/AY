import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const QuoteForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default QuoteForm;
