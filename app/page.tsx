import Navbar from './components/Topbar/Topbar';
import MobileNav from './components/Topbar/MobileNav';
import Games from './components/Games';

export default async function Home() {

  return (
    <div className='relative h-screen'>
      
      <div className='hidden sm:mb-200 md:block fixed top-0 left-0 right-0 z-20'>
        <Navbar />
      </div>

      <div className='block md:hidden fixed top-0 left-0 right-0 z-20'>
        <MobileNav />
      </div>

      <div className='pt-20'>
      <Games />
      </div>
  
      {/* Empty bottom space */}
      <div className='p-8'></div>
    </div>
  );
}
