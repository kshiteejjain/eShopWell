import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router";
import PageHeaders from '../component/Head'

const Home = () => {
  const router = useRouter();

  const aboutUs = () => router.push('about')

  return (
    <>
      <PageHeaders title='Home' />
      <main className={`${styles.main}`}>
        <h1>Hello Next js</h1>
        <button onClick={aboutUs}> About Us </button>
        
      </main>
    </>
  )
};

export default Home;

