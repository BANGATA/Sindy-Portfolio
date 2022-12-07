import { Flex } from "@chakra-ui/react";
import { Autoplay, Keyboard, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "../components/navbar";

const Projects = () => {
  return (
    <>
      <Navbar />
      <Flex>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          //spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination, Keyboard, Autoplay]}
          className="mySwiper"
          keyboard={{
            enabled: true,
          }}
          autoplay={{ delay: 3500 }}
          loop={true}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
};

export default Projects;
