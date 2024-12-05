import React from 'react';
import { useScrollTop } from '../hooks/useScrollTop';

const TermsPage = () => {
  useScrollTop();

  return (
    <div className="bg-white pt-28 pb-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Reviewed/Updated: March 2024</p>

        <div className="prose prose-lg max-w-none">
          <p>Welcome to <strong>EB5 Visa Expert Pvt Ltd</strong> ("we," "us," or "our"). These Terms of Service ("Terms") govern your use of our website <strong><a href="http://www.eb5visaexpert.com" className="text-primary-600 hover:text-primary-700">www.eb5visaexpert.com</a></strong> ("Site"). By accessing or using our Site, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our Site.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Use of the Site</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Eligibility</h3>
          <p>You must be at least 18 years old to use our Site. By accessing the Site, you represent and warrant that you are at least 18 years old.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">License</h3>
          <p>We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Site for your personal, non-commercial use, subject to these Terms.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Prohibited Activities</h3>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the Site for any unlawful purpose or in violation of any local, state, national, or international laws.</li>
            <li>Engage in any activity that interferes with or disrupts the Site or the networks connected to it.</li>
            <li>Attempt to gain unauthorized access to any portion of the Site or any systems or networks connected to it.</li>
            <li>Use any automated means to access the Site for any purpose without our express written permission.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Intellectual Property</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Content Ownership</h3>
          <p>All content on the Site, including text, graphics, logos, images, and software, is the property of <strong>EB5 Visa Expert Pvt Ltd</strong> or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Limited License</h3>
          <p>You may view, download, and print content from the Site for your personal, non-commercial use only. Any other use of the content, including modification, distribution, or republication, is strictly prohibited without our prior written consent.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. User-Generated Content</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Responsibility</h3>
          <p>If you submit any content to the Site (e.g., comments, inquiries), you grant us a non-exclusive, royalty-free, perpetual, and irrevocable right to use, reproduce, modify, and distribute such content. You are solely responsible for the content you submit and must ensure that it does not infringe on any third-party rights or violate any laws.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Prohibited Content</h3>
          <p>You agree not to submit content that is unlawful, defamatory, obscene, or otherwise objectionable.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclaimer of Warranties</h2>
          <p>Our Site is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
          <p>In no event shall <strong>EB5 Visa Expert Pvt Ltd</strong>, its affiliates, or their respective directors, officers, employees, agents, or representatives be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless <strong>EB5 Visa Expert Pvt Ltd</strong> and its affiliates from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of the Site or your violation of these Terms.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Termination</h2>
          <p>We reserve the right to terminate or suspend your access to the Site, without prior notice or liability, for any reason, including if you breach these Terms.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Governing Law</h2>
          <p>These Terms are governed by and construed in accordance with the laws of <strong>India</strong>, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts in <strong>Gujarat, India</strong> for the resolution of any disputes arising out of or relating to these Terms or your use of the Site.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to Terms</h2>
          <p>We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the Site after any changes constitutes acceptance of the updated Terms.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Severability</h2>
          <p>If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision will be limited or eliminated to the minimum extent necessary, so that these Terms will otherwise remain in full force and effect and enforceable.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Entire Agreement</h2>
          <p>These Terms constitute the entire agreement between you and <strong>EB5 Visa Expert Pvt Ltd</strong> regarding your use of the Site and supersede all prior agreements and understandings, whether written or oral, regarding such subject matter.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <ul className="list-none pl-0">
            <li><strong>Email:</strong> <a href="mailto:support@eb5visaexpert.com" className="text-primary-600 hover:text-primary-700">support@eb5visaexpert.com</a></li>
            <li><strong>Address:</strong> EB5 Visa Expert Pvt Ltd. Registered in Vadodara, Gujarat, India.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
