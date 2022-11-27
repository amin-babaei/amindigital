import Slider from 'react-slick'
import Image from "next/image";
interface Iimages {
  images: {}[];
}
const SliderModal = ({ images }: Iimages) => {

  let image = images.map(function (image) {
    return `${process.env.BASE_URL}/${image}`;
  });
  let settings = {
    dots: true,
    dotsClass: "button__bar",
    rtl: true,
    appendDots: (dots: number) => (
      <div
        style={{
          backgroundColor: "rgb(246, 249, 252)",
          padding: "10px",
          borderRadius: '10px'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div>
        <Image
          src={image[i]}
          alt=""
          width={50}
          height={40}
        />
      </div>
    )
  };

  return (
    <Slider {...settings} lazyLoad='progressive'>
      {images.map((image, index) => (
        <div key={index} className='w-100 d-flex justify-content-center align-items-center position-relative' style={{ height: "300px" }}>
          <Image unoptimized loader={() => `${process.env.BASE_URL}/${image}`} width={500} height={400} src={`${process.env.BASE_URL}/${image}`} alt='product' />
        </div>
      ))}
    </Slider>
  )
}

export default SliderModal