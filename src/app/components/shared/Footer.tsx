import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="relative text-gray-800 bg-gradient-to-br from-blue-50 to-blue-100 min-h-[500px]">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footer.jpg"
          alt="Footer background"
          layout="fill"
          objectFit="cover"
          priority={false}
          className="opacity-20"
        />
      </div>

      <div className="relative z-10">
        {/* Main content section with increased padding */}
        <div className="max-w-7xl mx-auto px-8 pt-20 pb-16">
          {/* Logo section with more space */}
          <div className="mb-16">
            <Image
              src="/logo.svg"
              alt="Supreme Group logo"
              width={200}
              height={60}
              className="h-12 md:h-16 w-auto"
            />
          </div>

          {/* Navigation grid with better spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            {/* Applications column */}
            <div>
              <h3 className="text-base font-bold mb-6 uppercase tracking-wide text-gray-900">
                Applications
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="/applications/apparel"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 block"
                  >
                    Apparel
                  </a>
                </li>
                <li>
                  <a
                    href="/applications/automotive"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 block"
                  >
                    Automotive
                  </a>
                </li>
                <li>
                  <a
                    href="/applications/filtration"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 block"
                  >
                    Filtration
                  </a>
                </li>
                <li>
                  <a
                    href="/applications/customised-nonwoven"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 block"
                  >
                    Customised Nonwoven
                  </a>
                </li>
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h3 className="text-base font-bold mb-6 uppercase tracking-wide text-gray-900">
                Company
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="/who-we-are"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 block"
                  >
                    Who We Are
                  </a>
                </li>
                <li>
                  <a
                    href="/global-competency"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 block"
                  >
                    Global Competency
                  </a>
                </li>
                <li>
                  <a
                    href="/innovation"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 block"
                  >
                    Innovation
                  </a>
                </li>
                <li>
                  <a
                    href="/esg-impact"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 block"
                  >
                    ESG Impact
                  </a>
                </li>
              </ul>
            </div>

            {/* More column */}
            <div>
              <h3 className="text-base font-bold mb-6 uppercase tracking-wide text-gray-900">
                More
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="/contact-us"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 block"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 block"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us column */}
            <div>
              <h3 className="text-base font-bold mb-6 uppercase tracking-wide text-gray-900">
                Follow Us
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="https://www.linkedin.com/company/supreme-group-company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 block"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section with border and increased padding */}
        <div className="border-t border-gray-300 border-opacity-30">
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-700">
              <span className="font-medium">©2024. All Rights Reserved.</span>
              <span className="text-center md:text-right">
                Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
