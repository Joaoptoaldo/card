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
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={`${styles.carrossel_container} ${anima.fadeIn}`}>
            <Slider className={styles.slider} {...settings}>
                <div className={styles.carrossel_img}>
                    <img src="https://down-br.img.susercontent.com/file/b38486cac184e56c73c93e869504afc4" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://down-br.img.susercontent.com/file/b36284321a473920b243852479c9d2fc" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://shop.bazarcia.com/wp-content/uploads/2022/05/Design-sem-nome-25.png" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://down-br.img.susercontent.com/file/sg-11134201-22110-i6s1ea1aqqjv1b" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://down-br.img.susercontent.com/file/deb5c93c740517e30cb812cd047f799d" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/474x/dc/c6/1d/dcc61d0b1ef0656b3eeb75954cb1a76b.jpg" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/736x/e7/5e/b4/e75eb445870b3e3561bbb9890739c0b4.jpg" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://www.meuzapzap.com/imagens/thumb/meuzapzap14120822034940Screenshot20220812164708Instagram.jpg" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/736x/7e/36/3b/7e363bf6e1ab4359a15ebdb9895bfd10.jpg" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://marketplace.canva.com/EAF3bO_skH8/2/0/1600w/canva-caneca-com-frase-sorria-voc%C3%AA-%C3%A9-meu-amor-casal-dszKhn8vEhY.jpg" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/564x/65/bb/1e/65bb1e0c6ce1b7dba58a7065b02a48c6.jpg" alt="" />
                </div>

                <div className={styles.carrossel_img}>
                    <img src="https://wearsublimacoes.cdn.magazord.com.br/img/2024/12/produto/84829/c09770e9b6.jpeg" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/474x/2a/b3/cc/2ab3cc4a2cc56c7520bd5ac07931a118.jpg" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://cdn.statically.io/img/meapaixonei.com.br/wp-content/uploads/2023/06/frases-de-amor-para-casal-1-1.jpg?quality=80&f=auto" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://down-br.img.susercontent.com/file/01246ccdf1456305feb632e045babeed" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://shop.bazarcia.com/wp-content/uploads/2022/03/Design-sem-nome-37.jpg" alt="" />
                </div>
            </Slider>
        </div>        
    );
}

export default Carrossel;
