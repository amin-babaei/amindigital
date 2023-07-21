"use client"
import Image from "next/image";
import Slider from "react-slick";

const Brands = () => {
    const settings = {
        arrows:false,
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        pauseOnHover:false,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };
    return (
        <section className='py-5'>
                <Slider {...settings}>
                    <div className='mx-5'>
                        <div className='w-50 position-relative m-auto' style={{height: "100px"}}>
                            <Image fill src="/images/amd.png" alt='amd' priority/>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <div className='w-50 position-relative m-auto' style={{height: "100px"}}>
                            <Image fill src="/images/asus.png" alt='asus' priority/>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <div className='w-50 position-relative m-auto' style={{height: "100px"}}>
                            <Image fill src="/images/zotac.png" alt='zotac' priority/>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <div className='w-50 position-relative m-auto' style={{height: "100px"}}>
                            <Image fill src="/images/msi.png" alt='msi' priority/>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <div className='w-50 position-relative m-auto' style={{height: "100px"}}>
                            <Image fill src="/images/Intel.png" alt='intel' priority/>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <div className='w-50 position-relative m-auto' style={{height: "100px"}}>
                            <Image fill src="/images/gigabyte.png" alt='gigabyte'/>
                        </div>
                    </div>

                </Slider>
        </section>
    );
}

export default Brands;