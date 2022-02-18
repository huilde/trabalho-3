import { Button,CardText,CardSubtitle,CardTitle,CardBody,CardImg,Card } from "reactstrap"
import Info from "./Info"
const Apresentacao = ()=>
{
    return(
        <>
        <main className="container">
        <h2 className="text-primary">Apresentação</h2>
        <br/>
        <img src="https://arquivos.info.ufrn.br/arquivos/201407408477332148643a980769a39f0/capa.jpg" class="img-fluid" alt="Imagem com o logo da EAJ"/>
        <br/>
        <p>O Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) tem como objetivo a formação de profissionais capazes de compreender o processo de construção e reconstrução do conhecimento no domínio da análise e desenvolvimento de sistemas e, dessa forma, realizar atividades de concepção, especificação, projeto, implementação, avaliação, suporte e manutenção de sistemas computacionais, orientando sua ação na sociedade em geral e no mundo do trabalho em particular para a busca de soluções para o setor produtivo (notadamente o setor primário da economia) e para a melhoria da qualidade de vida das populações. Os profissionais formados atuarão na área de análise e desenvolvimento de sistemas, podendo exercer atividades no campo da análise de sistemas, engenharia de software, gerência de projetos e administração de bancos de dados.</p>
        <br/>
        <div className="branco">
        </div>
        <p> Alem da formaçaao geral em Tecnologia em Analise e Desenvolvimento de Sistemas, o curso tem objetivo de promover a integraçaao entre as ciencias agraarias e a denominada Tecnologia da Informação (TI) com suas diversas subareas, obtendo-se assim uma gama de beneficios e ampliação do espectro de formaçao profissional em niivel superior, considerando que um curso desta natureza permitira ao egresso propor soluções tecnológicas em software e/ou hardware para as ciencias agrarias ou, usando uma nomenclatura mais especifica e mercadologica, para a cadeia do agronegócio e da agricultura familiar, sendo, nesse sentido estratégico para o desenvolvimento regional e nacional. Tais objetivos baseiam-se na formação de Tecnólogos com capacidade técnico-científica e visão integral, ética e humanística, comprometidos com o bem estar da sociedade envolvida e com o desenvolvimento sustentável, exercendo todas as competências relacionadas à profissão.</p>
        </main>
    <Info></Info>
    </>
    )
}
export default Apresentacao