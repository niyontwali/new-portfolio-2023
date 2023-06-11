import { mySlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Clients = () => {
  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>My Clients</h3>
        <Swiper
          {...mySlider.clients}
          className="swiper swiper-clients fadeInUp wow"
        >
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/clients/bizcotap.png"
                alt="bizcotap"
              />
            </div>
            <div>
              <img
                src="assets/clients/brc.png"
                alt="brc"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/clients/peaceplan.png"
                alt="peaceplanrwanda"
              />
            </div>
            <div>
            <img
                src="assets/clients/andela.svg"
                alt="andela"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                 src="assets/clients/weltel.png"
                alt="weltel"
              />
            </div>
            <div>
              <img
                src="assets/clients/vine.png"
                alt="vinepharmacy"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          
         
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
            <img
                src="assets/clients/letsreason.png"
                alt="letsreason"
              />
            </div>
            <div>
              <img
                src="assets/clients/fuelcapp.png"
                alt="fuelcapp"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Clients;
