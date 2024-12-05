import React from 'react';
import { useEffect } from 'react';
import { useScrollTop } from '../hooks/useScrollTop';

const DisclaimerPage = () => {
  useScrollTop();

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">General Information</h2>
          <p>
            The content provided on this website is intended solely for informational and educational purposes. <strong>EB5 Visa Expert Pvt Ltd</strong> ("we," "us," or "our") makes no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Investment Offerings</h2>
          <p>
            Our offerings under <strong>Rule 506(c) of Regulation D</strong> are exclusively available to <strong>accredited investors</strong> who meet the definition as outlined by the <strong>Securities and Exchange Commission (SEC)</strong> guidelines. The information presented on this website does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any actual offer or sale of securities will be made only through a formal, privately distributed offering memorandum and accompanying securities documents, which will include essential details about investment objectives, risks, fees, and expenses.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">No Obligation or Commitment</h2>
          <p>
            Expressing interest in our offerings does not create any obligation or commitment on your part. Any offer to invest may be withdrawn or revoked at any time prior to the acceptance of a formal agreement, without any obligation or commitment.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">No Guarantee of Future Performance</h2>
          <p>
            Past performance is not indicative of future results. Any historical returns, expected returns, or probability projections provided on this website may not accurately reflect actual future performance. Investing involves risks, including the potential loss of principal. We do not guarantee or warrant that any forecast or projection will be achieved.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Accuracy of Information</h2>
          <p>
            While we strive to ensure that the information provided on this website is accurate and up-to-date, we cannot guarantee the accuracy or completeness of the data sourced from third parties or provided by investors. <strong>EB5 Visa Expert Pvt Ltd</strong> and its affiliates do not accept any responsibility for errors or omissions in the content of this website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">No Tax or Legal Advice</h2>
          <p>
            Neither <strong>EB5 Visa Expert Pvt Ltd</strong>, nor any of its affiliates, provides tax, legal, or investment advice. The information presented should not be construed as legal, tax, or investment advice. Prospective investors should consult with their own legal, tax, and financial advisors before making any investment decisions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Compliance with Regulations</h2>
          <p>
            All investment offerings comply with <strong>Rule 506(c) of Regulation D</strong> under the <strong>Securities Act of 1933</strong> as amended. By accessing this website, you acknowledge that you understand the regulatory framework governing our offerings and agree to comply with all applicable laws and regulations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
          <p>
            In no event will <strong>EB5 Visa Expert Pvt Ltd</strong>, its affiliates, or their respective directors, officers, employees, agents, or representatives be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of this website, or any information, products, or services obtained through it. This includes, but is not limited to, any errors or omissions in the content, loss of data, or any other loss or damage of any kind incurred as a result of the use of the site.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">External Links</h2>
          <p>
            This website may contain links to external websites that are not provided or maintained by <strong>EB5 Visa Expert Pvt Ltd</strong>. Please note that we do not endorse or assume any responsibility for the content, privacy policies, or practices of any third-party websites. By using our website, you expressly relieve <strong>EB5 Visa Expert Pvt Ltd</strong> from any and all liability arising from your use of any third-party website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">No Endorsement</h2>
          <p>
            Any reference to third-party products, services, or websites on this website does not constitute or imply an endorsement, recommendation, or favoring by <strong>EB5 Visa Expert Pvt Ltd</strong>. We are not responsible for the availability, accuracy, or content of these third-party resources.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Disclaimer</h2>
          <p>
            We reserve the right to modify or replace this Disclaimer at any time without prior notice. It is your responsibility to review this Disclaimer periodically for any changes. Your continued use of the website following the posting of any changes constitutes acceptance of those changes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law</h2>
          <p>
            This Disclaimer is governed by and construed in accordance with the laws of <strong>India</strong>, without regard to its conflict of law principles. You irrevocably submit to the exclusive jurisdiction of the courts in <strong>Gujarat, India</strong> for the resolution of any disputes arising out of or relating to this Disclaimer or your use of the website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Severability</h2>
          <p>
            If any provision of this Disclaimer is found to be unenforceable or invalid by a court of competent jurisdiction, that provision will be limited or eliminated to the minimum extent necessary, so that this Disclaimer will otherwise remain in full force and effect and enforceable.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Entire Agreement</h2>
          <p>
            This Disclaimer constitutes the entire agreement between you and <strong>EB5 Visa Expert Pvt Ltd</strong> regarding your use of this website and supersedes all prior agreements and understandings, whether written or oral, regarding such subject matter.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us at:
          </p>
          <ul className="list-none pl-0">
            <li><strong>Email:</strong> <a href="mailto:support@eb5visaexpert.com" className="text-primary-600 hover:text-primary-700">support@eb5visaexpert.com</a></li>
            <li>
              <strong>Address:</strong> EB5 Visa Expert Pvt Ltd. Registered in Vadodara, Gujarat, India.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
