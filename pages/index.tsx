import Image from 'next/image'
import PageHeader from '@/component/Navbar/Navbar';
import { useRouter } from "next/router";
import PageHeaders from '../component/Head'
import BannerSlider from '@/component/BannerSlider/BannerSlider'

const Home = () => {
  const router = useRouter();

  const aboutUs = () => router.push('about')


  return (
    <>
      <PageHeaders title='Home' />
      <main>
        <div className='fluid-container'>
          <PageHeader />
        </div>
        {/* <button onClick={aboutUs}> About Us </button> */}
        <BannerSlider />
      </main>
    </>
  )
};

export default Home;

