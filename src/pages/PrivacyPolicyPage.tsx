import React from 'react';
import { useScrollTop } from '../hooks/useScrollTop';

const PrivacyPolicyPage = () => {
  useScrollTop();

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Reviewed/Updated: March 2024</p>

        <div className="prose prose-lg max-w-none">
          <p><strong>EB5 Visa Expert Pvt Ltd</strong> ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website <strong><a href="http://www.eb5visaexpert.com" className="text-primary-600 hover:text-primary-700">www.eb5visaexpert.com</a></strong> ("Site"). Please read this policy carefully to understand our practices regarding your personal data.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fill out forms on our Site (e.g., contact forms, newsletter sign-ups)</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us for more information about our services</li>
          </ul>

          <p><strong>Personal Information</strong> may include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Mailing Address</li>
            <li>Company Name</li>
            <li>Job Title</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Non-Personal Information</h3>
          <p>We may collect non-personal information about your interaction with our Site, such as:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Browser Type</li>
            <li>Operating System</li>
            <li>IP Address</li>
            <li>Pages Visited</li>
            <li>Time Spent on Pages</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Provide Services:</strong> Respond to your inquiries and provide the services you request.</li>
            <li><strong>Improve Our Site:</strong> Analyze user behavior to enhance the functionality and user experience of our Site.</li>
            <li><strong>Marketing Communications:</strong> Send you newsletters, promotional materials, and other information that may be of interest to you. You can opt-out of these communications at any time.</li>
            <li><strong>Compliance:</strong> Comply with legal obligations and enforce our terms and policies.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Sharing Your Information</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Trusted Third Parties:</strong> We may share your information with trusted third-party service providers who assist us in operating our Site, conducting our business, or servicing you, provided they agree to keep this information confidential.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights and Choices</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Access and Update Your Information</h3>
          <p>You have the right to access, update, or delete your personal information. To do so, please contact us using the information provided below.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Opt-Out of Communications</h3>
          <p>You can opt-out of receiving our marketing emails by following the unsubscribe link in our emails or contacting us directly.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Cookies and Tracking Technologies</h3>
          <p>Our Site may use cookies and similar tracking technologies to enhance your experience. You can adjust your browser settings to refuse cookies or alert you when cookies are being sent. However, some features of our Site may not function properly if cookies are disabled.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Third-Party Links</h2>
          <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Children's Privacy</h2>
          <p>Our Site is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that a minor has provided us with personal information, we will take steps to delete such information from our records.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any updates or changes.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
          <p>This Privacy Policy is governed by and construed in accordance with the laws of <strong>India</strong>, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts in <strong>Gujarat, India</strong> to resolve any dispute arising out of or relating to this Privacy Policy or your use of our Site.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul className="list-none pl-0">
            <li><strong>Email:</strong> <a href="mailto:support@eb5visaexpert.com" className="text-primary-600 hover:text-primary-700">support@eb5visaexpert.com</a></li>
            <li><strong>Address:</strong> EB5 Visa Expert Pvt Ltd. Registered in Vadodara, Gujarat, India.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
