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
                    <img src="https://github.com/Joaoptoaldo/card/blob/8a9a764ee51a16bc92cc3513fd6029c45d61b211/assets/image1-a1YM2-_v.jpeg?raw=true" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://github.com/Joaoptoaldo/card/blob/8a9a764ee51a16bc92cc3513fd6029c45d61b211/assets/image2-BThxI1Nv.jpg?raw=true" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://github.com/Joaoptoaldo/card/blob/8a9a764ee51a16bc92cc3513fd6029c45d61b211/assets/image3-BH538EzZ.avif" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://github.com/Joaoptoaldo/card/blob/8a9a764ee51a16bc92cc3513fd6029c45d61b211/assets/image4-CYfI-JEN.jpg?raw=true" alt="" />
                </div>
            </Slider>
        </div>        
        
    );
}

export default Carrossel;
