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
                    <img src="https://down-br.img.susercontent.com/file/b38486cac184e56c73c93e869504afc4" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVILWJKf4xQTEoKkigH8O1bCt4LxIBJCtpBrT3357cAbyM898AtoZfTmOg4zkDYvVU3R4&usqp=CAU" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/736x/22/14/be/2214be39b2580b1fbdd8aae918dec291.jpg" alt="" />
                </div>
            </Slider>
        </div>        
    );
}

export default Carrossel;
