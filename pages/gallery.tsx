import Navbar from "../components/navbar";

import { Navigation, Scrollbar, Autoplay, EffectCoverflow } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { Flex, Image } from "@chakra-ui/react";

const Gallery = () => {
  interface pict {
    id: number;
    Img: string;
  }

  const Gambar: pict[] = [
    {
      id: 0,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%205/1.png",
    },
    {
      id: 1,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%205/2.png",
    },
    {
      id: 2,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%205/3.png",
    },
    {
      id: 3,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%206/1.png",
    },
    {
      id: 4,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%206/2.png",
    },
    {
      id: 5,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%206/3.png",
    },
    {
      id: 6,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%207/1.png",
    },
    {
      id: 7,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%207/2.png",
    },
    {
      id: 8,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%207/3.png",
    },
    {
      id: 9,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%204/1.png",
    },
    {
      id: 10,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%204/2.png",
    },
    {
      id: 11,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%204/3.png",
    },
  ];
  return (
    <>
      <Navbar />
      <Swiper
        modules={[Scrollbar, Autoplay, EffectCoverflow]}
        effect={"coverflow"}
        slidesPerView={1}
        //scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        loopFillGroupWithBlank={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        className="mySwiper"
        keyboard={{
          enabled: true,
        }}
        // breakpoints={{
        //   320: {
        //     slidesPerView: 1,
        //   },
        //   480: {
        //     slidesPerView: 1,
        //   },
        //   640: {
        //     slidesPerView: 3,
        //     slidesPerGroup: 3,
        //     spaceBetween: 5,
        //   },
        // }}
      >
        {Gambar.map((i: any) => {
          return (
            <>
              <SwiperSlide key={i.id}>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  w={"100%"}
                  h={"91vh"}
                >
                  {i.id > 2 ? (
                    <>
                      <Image
                        src={i.Img}
                        w={["320px", "320px", "800px", "800px"]}
                        h={["180px", "180px", "450px", "450px"]}
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        src={i.Img}
                        w={["200px", "300px", "300px", "400px"]}
                        h={["300px", "500px", "500px", "600px"]}
                      />
                    </>
                  )}
                </Flex>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default Gallery;
