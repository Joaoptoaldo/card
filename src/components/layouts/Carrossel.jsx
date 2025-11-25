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
                    <img src="https://down-br.img.susercontent.com/file/b38486cac184e56c73c93e869504afc4" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/736x/6a/6d/69/6a6d69d44a73c53a8225a4a137bd5686.jpg"alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://static.wixstatic.com/media/643552_69102a85f55d4385a5fcd7aa75555601~mv2.png/v1/fill/w_484,h_484,al_c,lg_1,q_85,enc_avif,quality_auto/643552_69102a85f55d4385a5fcd7aa75555601~mv2.png" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/474x/22/14/be/2214be39b2580b1fbdd8aae918dec291.jpg" alt="" />
                </div>
            </Slider>
        </div>        
        
    );
}

export default Carrossel;