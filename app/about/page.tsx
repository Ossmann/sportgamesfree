import Navbar from '../components/Topbar/Topbar';
import MobileNav from '../components/Topbar/MobileNav';

export default function AboutPage() {
  return (
    <div className="md:mx-20 mx-6 mdmx-auto py-12 pl-4 md:pr-80">
      <div className='hidden md:block fixed top-0 left-0 right-0 z-20'>
        <Navbar />
      </div>

      <div className='block md:hidden fixed top-0 left-0 right-0 z-20'>
        <MobileNav />
      </div>
      <div className="mt-20 space-y-8">
        

        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:office@softwaresuccess.com" className="text-blue-600 hover:underline">
              office@softwaresuccess.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Copyright © {new Date().getFullYear()} Software Success
            </p>
            <p className="text-gray-600 mt-1">
              ABN: 34 291 507 233
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}