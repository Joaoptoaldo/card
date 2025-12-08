import ContainerLayout from "../layouts/ContainerLayout";
import SpotifyPlayer from "../layouts/SpotifyPlayer"; 
import Carrossel from "../layouts/Carrossel";
import DiasJuntos from "../layouts/DiasJuntos";
import Mensagem from "../layouts/Mensagem";
import Capivara from "../layouts/Capivara";
import Temporizador from "../layouts/Temporizador";
import Footer from "../layouts/Footer";


function HomePage() {
    return (
        <ContainerLayout>
            <SpotifyPlayer />
            <Carrossel />
            <DiasJuntos tempoJuntos={"4 meses, 16 dias, 2 horas, 2 minutos e 56 segundos."} />
            <Temporizador />
            <Mensagem
                mensagem_p1={
                    "Mais um trabalhinho que me faz lembrar o quanto sou feliz por ter você ao meu lado. Cada momento contigo, por mais simples que seja, se torna especial só por ter a sua presença."
                }
                mensagem_p2={
                    "Sempre que lembro das nossas conversas, das brincadeiras, dos cuidados e até das madrugadas cheias de planos e risadas, percebo o quanto você se tornou essencial para mim. Sempre foi diferente com você, desde o começo, aquele tipo de conexão que a gente reconhece antes mesmo de entender."
                }
                mensagem_p3={
                    "Saiba que cada gesto seu fica guardado em mim: o carinho, o jeito leve, a maneira como você me escolhe todos os dias sem esforço, como me apoia mesmo nos dias em que eu mal acredito em mim. Saiba que eu vejo a sua força, a sua doçura, o seu cuidado silencioso, e isso me faz admirar você ainda mais."
                }
                mensagem_p4={
                    "Surgiu em mim um sentimento tão verdadeiro, que cresce mesmo nos mínimos detalhes, porque aparece até quando você só manda um simples 'bom dia', ou quando me pergunta se eu já comi, ou quando faz aquelas coisas simples que só quem gosta de verdade faz."
                }
                mensagem_p5={
                    "Se tem algo que aprendi contigo, é que o amor se manifesta nas pequenas presenças, nas palavras ditas ao acaso, nos momentos em que um faz companhia para o outro mesmo de longe, sem cobrança, sem pressa, só sendo."
                }
                mensagem_p6={
                    "Sonho com tudo o que ainda vamos viver, com as memórias que ainda vamos criar, com as risadas que ainda vamos dividir e com o futuro que, mesmo incerto, fica mais bonito quando imagino você nele. Sonho porque você é, sem perceber, o tipo de presença que dá sentido às coisas."
                }
                mensagem_p7={
                    "Obrigado por ser meu porto seguro, meu sorriso fácil e meu lugar favorito no mundo. Que a gente continue cultivando esse amor todos os dias"
                }
            />
            <Capivara />
            <Footer/>
            

        </ContainerLayout>
    );
}

export default HomePage;