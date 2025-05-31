import Link from 'next/link'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-[#0D0D0D] text-[#f5f5f5]">
      <Header />
      
      {/* Main Content Section */}
      <div className="relative" style={{ height: 'calc(100vh - 64px)' }}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/building.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.7
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
            <div className="absolute inset-0 bg-pattern opacity-5" />
          </div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="relative w-full h-96 mb-8">
                <Image
                  src="/images/building.jpg"
                  alt="Modern Apartment Building"
                  fill
                  className="object-cover rounded-lg shadow"
                  priority
                />
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-[#f5f5f5] sm:text-5xl lg:text-6xl">
                Simplifying strata for small strata schemes
              </h1>
              <p className="mt-6 text-xl text-gray-200">
                Your strata scheme managed <span className="italic">your</span> way.
              </p>
              <p className="mt-4 text-lg text-gray-200">
                StrataHub is the ideal choice for owners of small strata schemes seeking a basic, low-cost, and compliant option. We offer simple, cost-effective solutions, ensuring you only pay for what is essential to maintain a well-managed and compliant strata scheme.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Strata Management Services
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We handle all aspects of strata management to ensure your building runs smoothly
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Financial Management */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-gray-900 text-2xl mb-4">💰</div>
                <h3 className="text-lg font-medium text-gray-900">Financial Management</h3>
                <p className="mt-2 text-gray-500">
                  Expert handling of levies, budgets, and financial reporting to keep your building's finances in order.
                </p>
              </div>

              {/* Maintenance */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-gray-900 text-2xl mb-4">🔧</div>
                <h3 className="text-lg font-medium text-gray-900">Maintenance Coordination</h3>
                <p className="mt-2 text-gray-500">
                  Professional coordination of building maintenance and repairs to ensure your property remains in top condition.
                </p>
              </div>

              {/* Compliance */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-gray-900 text-2xl mb-4">📋</div>
                <h3 className="text-lg font-medium text-gray-900">Regulatory Compliance</h3>
                <p className="mt-2 text-gray-500">
                  Ensuring your building meets all NSW strata regulations and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to improve your strata management?</span>
            <span className="block text-gray-300">Contact us today for a consultation.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 