import Slider from "react-slick";
import styles from './Carrossel.module.css';
import anima from '../../styles/animations.module.css';
import imagem1 from '../images/imagem1.jpg';
import imagem2 from '../images/imagem2.jpg';
import imagem3 from '../images/imagem3.png';
import imagem4 from '../images/imagem4.png';
import imagem5 from '../images/imagem5.png';
import imagem6 from '../images/imagem6.jpg';
import imagem7 from '../images/imagem7.jpg';
import imagem8 from '../images/imagem8.jpg';
import imagem9 from '../images/imagem9.jpg';
import imagem10 from '../images/imagem10.jpg';
import imagem11 from '../images/imagem11.jpg';
import imagem12 from '../images/imagem12.jpg';
import imagem13 from '../images/imagem13.jpg';
import imagem14 from '../images/imagem14.jpg';
import imagem15 from '../images/imagem15.jpg';
import imagem16 from '../images/imagem16.jpg';
import imagem17 from '../images/imagem17.jpg';
import imagem18 from '../images/imagem18.jpg';
import imagem19 from '../images/imagem19.jpg';
import imagem20 from '../images/imagem20.jpg';
import imagem21 from '../images/imagem21.jpg';
import imagem22 from '../images/imagem22.jpg';
import imagem23 from '../images/imagem23.jpg';
import imagem24 from '../images/imagem24.jpg';
import imagem25 from '../images/imagem25.jpg';
import imagem26 from '../images/imagem26.png';

const Carrossel = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={`${styles.carrossel_container} ${anima.fadeIn}`}>
            <Slider className={styles.slider} {...settings}>
                <div className={styles.carrossel_img}>
                   <img src={imagem1} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem2} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem3} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem4} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem25} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem5} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem6} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem7} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem8} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem9} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem10} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem11} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem12} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem13} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem14} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem15} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem16} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem17} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem18} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem19} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem20} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem21} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem22} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem23} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem24} alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src={imagem26} alt="" />
                </div>
            </Slider>
        </div>        
    );
}

export default Carrossel;
