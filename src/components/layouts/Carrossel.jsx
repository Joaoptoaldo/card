import Slider from "react-slick";
import styles from './Carrossel.module.css';
import anima from '../../styles/animations.module.css';
const Carrossel = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={`${styles.carrossel_container} ${anima.fadeIn}`}>
            <Slider className={styles.slider} {...settings}>
                <div className={styles.carrossel_img}>
                    <img src="src/components/images/image1.jpeg" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="src/components/images/image2.jpg" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="src/components/images/image3.avif" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="src/components/images/image4.jpg" alt="" />
                </div>
            </Slider>
        </div>        
        
    );
}

export default Carrossel;