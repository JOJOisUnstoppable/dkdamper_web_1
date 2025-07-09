// ContactusSection.js
'use client'
import Image from 'next/image'
import { useState } from 'react';

const ContactusSection = ({
  contactUsTitle,
  getInTouchTitle,
  addressTitle,
  addressDesc,
  emailTitle,
  emailDesc,
  phoneTitle,
  phoneDesc,
  workingHoursTitle,
  workingHoursDescWeekday,
  workingHoursDescSaturday,
  sendMessageTitle
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred while sending the message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Contact Us Section */}
      <section className="w-full bg-slate-100 py-24">
        <div className="mx-auto px-4" style={{ maxWidth: '1400px' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {contactUsTitle}
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            {/* 联系信息 */}
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-700 mb-6">{getInTouchTitle}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{addressTitle}</h4>
                    <p className="text-gray-600">{addressDesc}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{emailTitle}</h4>
                    <a href="mailto:info@example.com" className="text-blue-600 hover:text-blue-800">
                      {emailDesc}
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{phoneTitle}</h4>
                    <a href="tel:+86123456789" className="text-blue-600 hover:text-blue-800">
                      {phoneDesc}
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{workingHoursTitle}</h4>
                    <p className="text-gray-600">{workingHoursDescWeekday}</p>
                    <p className="text-gray-600">{workingHoursDescSaturday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 联系表单 */}
            <div className="md:w-2/3">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-700 mb-6">{sendMessageTitle}</h3>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {success && <p className="text-green-500 mb-4">{success}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactusSection;