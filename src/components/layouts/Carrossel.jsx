import Slider from "react-slick";
import styles from './Carrossel.module.css';
import anima from '../../styles/animations.module.css';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.avif';
import image4 from '../images/image4.jpg';

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
                    <img src="https://github.com/Joaoptoaldo/card/blob/main/src/components/images/image1.jpeg?raw=true" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://github.com/Joaoptoaldo/card/blob/main/src/components/images/image2.jpg?raw=true" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://raw.githubusercontent.com/Joaoptoaldo/card/refs/heads/main/src/components/images/image3.avif" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://github.com/Joaoptoaldo/card/blob/main/src/components/images/image4.jpg?raw=true" alt="" />
                </div>
            </Slider>
        </div>        
        
    );
}

export default Carrossel;