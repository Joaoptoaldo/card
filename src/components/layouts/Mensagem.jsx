import styles from './Mensagem.module.css';
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

function Mensagem({ mensagem_p0, mensagem_p1, mensagem_p2, mensagem_p3, mensagem_p4, mensagem_p5, mensagem_p6, mensagem_p7, mensagem_p8, remetente = "de João, para Rayanna" }) {

  const containerRef = useRef(null);

  useEffect(() => {
   ScrollReveal().reveal(containerRef.current, {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: false,
   });
  }, []);
  
  return (
    <div ref={containerRef} className={styles.mensagem_container}>
        <h1>Para Meu Amor:</h1>
        <div className={styles.paragrafo_romantico}>
            <p>{mensagem_p0 }</p>
            <p>{mensagem_p1 }</p>
            <p>{mensagem_p2 }</p>
            <p>{mensagem_p3 }</p>
            <p>{mensagem_p4 }</p>
            <p>{mensagem_p5 }</p>
            <p>{mensagem_p6 }</p>
            <p>{mensagem_p7 }</p>
            <p>{mensagem_p8 + "❤️❤️❤️"}</p>
            <p>Com todo meu amor, </p>
            <p>{remetente}</p>
        </div>
    </div>
  );
}

export default Mensagem;