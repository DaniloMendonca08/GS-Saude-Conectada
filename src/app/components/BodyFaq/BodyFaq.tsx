import Paragraph from "../Paragraph/Paragraph"
import Title from "../Title/Title"
import { CardFaq, DivContainer, H2Title, StyledLink } from "./BodyFaq.style"

const BodyFaq = () => {
    return (
        <DivContainer>
        <div>
            <Title texto={"Perguntas Frequentes"} color={""} />
        </div>
        <CardFaq>
            <H2Title>Com que frequência devo levar meu filho ao pediatra nos primeiros anos?</H2Title>
            <Paragraph 
             texto={"Segundo a Sociedade Brasileira de Pediatria, nas situações mais comuns, a recomendação é de três consultas mensais para bebês com 5 a 30 dias de vida, uma vez por mês entre dois e seis meses de idade e uma visita a cada dois meses, a partir dos sete meses do bebê."}
             color={""} 
            />
        </CardFaq>
        <CardFaq>
            <H2Title>Quais são as vacinas recomendadas para bebês durante o primeiro ano?</H2Title>
            <Paragraph texto={"Recomendamos ver a tabela disponibilizada pelo Ministério da Saúde:"} color={""} />
            <StyledLink href="https://bvsms.saude.gov.br/vacinacao/" target="blank">Clique aqui</StyledLink>
        </CardFaq>
        <CardFaq>
            <H2Title>Como posso estimular o desenvolvimento cognitivo do meu bebê?</H2Title>
            <Paragraph texto={"Algumas formas como dançar, brincar, ler, ver filmes, entre outras são formas de estimular a cognição já que na infância ela evolui de forma muito rápida, caso queira saber mais, veja esse artigo com mais detalhes:"} color={""} />
            <StyledLink href="https://blog.academia.com.br/desenvolvimento-cognitivo/#:~:text=Dan%C3%A7ar%2C%20brincar%2C%20ler%2C%20ver,a%20linguagem%20podem%20ser%20aperfei%C3%A7oadas." target="blank">Mais detalhes</StyledLink>
        </CardFaq>
        <CardFaq>
            <H2Title>Quais são os melhores métodos para garantir uma boa higiene do bebê?</H2Title>
            <Paragraph texto={"Diversos itens são essenciais para manter a higiene do bebê, como: fraldas descartáveis, bolinhas de algodão, shampoo para bebê, lenços umedecidos, hidratante para bebê, pomada anti-assaduras, sabonete neutro para bebês e termômetro digital."} color={""} />
        </CardFaq>
        <CardFaq>
            <H2Title>Como posso deixar minha casa mais segura para bebês e crianças?</H2Title>
            <Paragraph texto={"Deixe fora de alcance principalmente produtos perigosos como produtos de limpeza, ferramentas que possuir em casa, medicamentos, alcool, caso sua casa ou apartamento possuir varanda, é preciso telar ou impedir que eles possam ir lá, caso possuir muitos móveis com quinas, cubra-as para evitar possíveis acidentes."} color={""} />
        </CardFaq>
        </DivContainer>
    )
}

export default BodyFaq