import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm as useFormspree } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[\d\s-]{8,}$/, 'Invalid phone number'),
  investment: z.string(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  // Formspree hook
  const [formspreeState, sendToFormspree] = useFormspree('xbljkjnn');
  
  // State for submission success and reCAPTCHA
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!captchaValue) {
      toast.error('Please complete the reCAPTCHA verification');
      return;
    }

    try {
      await sendToFormspree({
        ...data,
        'g-recaptcha-response': captchaValue,
      });
      toast.success('Message sent successfully!');
      setIsSubmitted(true);
      reset();
      // Reset reCAPTCHA
      setCaptchaValue(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    setCaptchaValue(null);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  return (
    <div id="contact" className="py-24 bg-white">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Our EB-5 Experts</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to start your journey to U.S. permanent residency? Our team is here to help you navigate the EB-5 investment process.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 88847 13789</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">eb5visaexpert@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Offices</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">HSR Layout, Bangalore, Karnataka</p>
                    <p className="text-gray-600">Vasna Road, Vadodara, Gujarat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="mb-6">
                  <svg 
                    className="mx-auto h-12 w-12 text-green-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 48 48"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="24" 
                      cy="24" 
                      r="20" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    />
                    <path 
                      className="opacity-75" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="4"
                      d="M14 24l8 8 16-16"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Thank you for reaching out!
                </h3>
                <p className="text-gray-600 mb-8">
                  We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={handleSendAnother}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="investment" className="block text-sm font-medium text-gray-700 mb-1">
                    Investment Range
                  </label>
                  <select
                    id="investment"
                    {...register('investment')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option>Under $1M</option>
                    <option>$1M - $2M</option>
                    <option>$2M - $5M</option>
                    <option>$5M+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <div className="mb-4">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={
                      window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
                        ? '6LcHiIIqAAAAAG0-wZ18AvEzqyuJzGsuf1LEJOZq'  // Development key
                        : '6LcHiIIqAAAAAG0-wZ18AvEzqyuJzGsuf1LEJOZq'  // Production key - Replace this with a new key configured for your Vercel domain
                    }
                    onChange={handleCaptchaChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !captchaValue}
                  className={`w-full bg-primary-600 text-white py-3 px-6 rounded-md transition ${
                    isSubmitting || !captchaValue ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-700'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;