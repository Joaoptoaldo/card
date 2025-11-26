import ContainerLayout from "../layouts/ContainerLayout";
import SpotifyPlayer from "../layouts/SpotifyPlayer"; // Certifique-se que o caminho está correto
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
            <DiasJuntos tempoJuntos={"0 anos, 3 meses, 22 dias, 2 horas, 2 minutos e 26 segundos."} />
            <Temporizador />
            <Mensagem
                mensagem_p1={"Mais um trabalhinho que me faz lembrar o quanto sou feliz por ter você ao meu lado. Cada momento contigo, por mais simples que seja, se torna especial só por ter a sua presença."}
                mensagem_p2={"Obrigado por ser meu porto seguro, meu sorriso fácil e meu lugar favorito no mundo. Que a gente continue cultivando esse amor todos os dias"}
            />
            <Capivara />
            <Footer/>
            

        </ContainerLayout>
    );
}

export default HomePage;