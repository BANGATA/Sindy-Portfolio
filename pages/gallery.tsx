import Navbar from "../components/navbar";

import {
  Navigation,
  Scrollbar,
  Autoplay,
  Keyboard,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
//  import "./gallery.css";
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
      <Flex>
        <Navbar />
        <Swiper
          modules={[Navigation, Scrollbar, Autoplay, EffectCoverflow, Keyboard]}
          navigation
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3500 }}
          effect={"coverflow"}
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
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
          }}
        >
          {Gambar.map((i: any) => {
            return (
              <>
                <SwiperSlide>
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    minH={"91vh"}
                  >
                    {i.id > 2 ? (
                      <>
                        <Image
                          src={i.Img}
                          w={["80px", "320px", "320px", "560px"]}
                          h={["45px", "180px", "180px", "315px"]}
                        />
                      </>
                    ) : (
                      <>
                        <Image
                          src={i.Img}
                          w={["200px", "300px", "350px", "350px"]}
                          h={["300px", "350px", "400px", "500px"]}
                        />
                      </>
                    )}
                  </Flex>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </Flex>
    </>
  );
};

export default Gallery;
