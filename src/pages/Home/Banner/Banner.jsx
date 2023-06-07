import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/slider/brand-design.jpg";
import img2 from "../../../assets/slider/business-card.jpg";
import img3 from "../../../assets/slider/flyer-design.jpg";
import img4 from "../../../assets/slider/logo-design.jpg";
import img5 from "../../../assets/slider/tshirt-design.jpg";
import img6 from "../../../assets/slider/ui-ux-design.jpg";

const Banner = () => {
  return (
    <div className="carousel carousel-center rounded-xl my-12">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
      >
        <div>
          <div className="carousel-item">
            <img src={img1} alt="Brand Identity Design" />
            <p className="legend">Brand Identity Design</p>
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={img2} alt="Business Card Design" />
            <p className="legend">Business Card Design</p>
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={img3} alt="Flyer Design" />
            <p className="legend">Flyer Design</p>
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={img4} alt="Logo Design" />
            <p className="legend">Logo Design</p>
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={img5} alt="T-Shirt Design" />
            <p className="legend">T-Shirt Design</p>
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={img6} alt="UI-UX Design" />
            <p className="legend">UI-UX Design</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
