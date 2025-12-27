import { useEffect } from 'react';
import ContainerLayout from "../layouts/ContainerLayout";
import SpotifyPlayer from "../layouts/SpotifyPlayer";
import Carrossel from "../layouts/Carrossel";
import DiasJuntos from "../layouts/DiasJuntos";
import Mensagem from "../layouts/Mensagem";
import Capivara from "../layouts/Capivara";
import Temporizador from "../layouts/Temporizador";
import Footer from "../layouts/Footer";


function HomePage() {
    useEffect(() => {
        document.body.style.background = 'radial-gradient(circle at top, #1a0325 0%, #1a0325 20%, #020008 65%, #000000 100%)';
        //document.body.style.background = 'linear-gradient(135deg, #000000 0%, #1a0033 50%, #130025ff 100%)';
        document.body.style.color = '#e2e2e2';
        document.body.style.position = 'relative';
        document.body.style.overflowX = 'hidden';

        return () => {
            document.body.style.background = '';
            document.body.style.color = '';
            document.body.style.position = '';
            document.body.style.overflowX = '';
        };
    }, []);

    return (
        <ContainerLayout>
            <SpotifyPlayer />
            <Carrossel />
            <DiasJuntos tempoJuntos={"4 meses, 17 dias, 2 horas, 19 minutos e 42 segundos."} />
            <Temporizador />
            <Mensagem
                mensagem_p0={
                    "Você acha mesmo que eu ia encerrar esse ano como se fosse só mais um? Logo esse, que ficou marcado pra sempre como o ano em que eu te conheci? Jamais! Não podia deixar passar em branco a oportunidade de te lembrar o quanto você é importante pra mim."
                }
                mensagem_p1={
                    "Esse é mais um trabalhinho que me faz lembrar o quanto sou feliz por ter você ao meu lado. Cada momento contigo, por mais simples que seja, se torna especial só por ter a sua presença."
                }
                mensagem_p2={
                    "Sempre que lembro das nossas conversas, das brincadeiras, dos cuidados e até das madrugadas cheias de planos e risadas, percebo o quanto você se tornou essencial para mim. Sempre foi diferente com você, desde o começo, aquele tipo de conexão que a gente reconhece antes mesmo de entender."
                }
                mensagem_p3={
                    "Saiba que cada gesto seu fica guardado em mim: o carinho, o jeito leve, a maneira como você me escolhe todos os dias sem esforço, como me apoia mesmo nos dias em que eu mal acredito em mim. Saiba que eu vejo a sua força, a sua doçura, o seu cuidado silencioso, e isso me faz admirar você ainda mais."
                }
                mensagem_p4={
                    "Surgiu em mim um sentimento tão verdadeiro, que cresce mesmo nos mínimos detalhes, porque aparece até quando você só manda um simples 'bom dia', ou quando me pergunta se eu já comi, se eu dormi bem, se eu já passei protetor solar, ou quando faz aquelas coisas simples que só quem gosta de verdade faz."
                }
                mensagem_p5={
                    "Se tem algo que aprendi contigo, é que o amor se manifesta nas pequenas presenças, nas palavras ditas ao acaso, nos momentos em que um faz companhia para o outro mesmo de longe, sem cobrança, sem pressa, só sendo."
                }
                mensagem_p6={
                    "Sonho com tudo o que ainda vamos viver, com as memórias que ainda vamos criar, com as risadas que ainda vamos dividir e com o futuro que mesmo incerto, fica mais bonito quando imagino você nele. Sonho porque você é, sem perceber, o tipo de presença que dá sentido às coisas."
                }
                mensagem_p7={
                    "Quero estar presente em cada passo desse caminho: celebrar suas conquistas, te amparar nos dias difíceis e compartilhar as rotinas simples que nos aproximam. Prometo cuidar desse amor com atenção, te ouvindo, apoiando e fazendo do nosso cotidiano um refúgio de cumplicidade e carinho."
                }
                mensagem_p8={
                    "Você não é só minha namorada. Você é a minha felicidade, meu porto seguro, meu sorriso fácil e o meu lugar favorito no mundo. Você é simplesmente o amor da minha vida. Que a gente continue cultivando esse amor todos os dias"
                }
            />
            <Capivara />
            <Footer/>

        </ContainerLayout>
    );
}

export default HomePage;