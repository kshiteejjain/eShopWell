import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageHeader from '@/component/Navbar/Navbar';
import { useRouter } from "next/router";
import PageHeaders from '../component/Head';
import BannerSlider from '@/component/BannerSlider/BannerSlider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import type { RootState } from '../store';
import { increment } from '../features/cart/cartSlice';


const Home = (props: any) => {
  

  const router = useRouter();

  const aboutUs = () => router.push('about')

  
  props?.data?.products?.map((item: any) => (
    localStorage.setItem('rating', item.rating)
  ))

  const starIcon = <FontAwesomeIcon icon={faStar} color="#1c74bd" />;
  const ratingNum = Number(localStorage.getItem('rating'))
  const star: any = []
  for (var i = 1; i <= ratingNum; i++) {
    star.push(starIcon)
  }
  const count = useSelector((state: RootState) => state.cart.value)

  const dispatch = useDispatch()

  return (
    <>
      <PageHeaders title='Home' />
      <main>
        <div className='fluid-container'>
          <PageHeader />
        </div>

        {/* <button onClick={aboutUs}> About Us </button> */}

        <BannerSlider />

        <div className='fluid-container productFlex'>
          {props?.data?.products?.map((item: any, i: any) => (
            <div className='card' key={i}>
              <div className='productImage' style={{ 'backgroundImage': `url(${item.thumbnail})` }} key={i}> </div>
              <div className='productTitle'>
                <h1>{item.title}</h1>
                <h1>${item.price}</h1>
              </div>
              <p className='description'>{item.description}</p>
              <div className='productTitle'>
                <a href='javascript:void(0)' className='primaryButton' onClick={() => dispatch(increment())}>Add to Cart</a>
                <p>{star}</p>
              </div>
              {/* {item.images.map((item: any, i: any) => (
                  <Image key={i} src={item} alt="Logo" width={150} height={150} />
              ))} */}
            </div>
          ))}
        </div>
      </main>
    </>
  )
};

export async function getServerSideProps(context: any) {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return {
    props: { data },
    
  }
}

export default Home;

