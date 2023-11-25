import { useEffect } from "react"
import H2Title from "../H2Title/H2Title"
import Paragraph from "../Paragraph/Paragraph"
import TagA from "../TagA/TagA"
import Title from "../Title/Title"
import { CardFaq, DivContainer } from "./BodyFaq.style"
import { useRouter } from "next/navigation"

const BodyFaq = () => {

    const router = useRouter()

    useEffect(() => {
        if (sessionStorage.getItem("login") === null) {
            router.push("/login")
        }
    }, [])


    return (
        <DivContainer>
        <div>
            <Title texto={"Perguntas Frequentes"} color={""} />
        </div>
        <CardFaq>
            <H2Title texto={"Com que frequência devo levar meu filho ao pediatra nos primeiros anos?"} />
            <Paragraph 
             texto={"Segundo a Sociedade Brasileira de Pediatria, nas situações mais comuns, a recomendação é de três consultas mensais para bebês com 5 a 30 dias de vida, uma vez por mês entre dois e seis meses de idade e uma visita a cada dois meses, a partir dos sete meses do bebê."}
             color={""} 
            />
        </CardFaq>
        <CardFaq>
            <H2Title texto={"Quais são as vacinas recomendadas para bebês durante o primeiro ano?"} />
            <Paragraph texto={"Recomendamos ver a tabela disponibilizada pelo Ministério da Saúde:"} color={""} />
            <TagA texto={"Clique aqui"} fonte={"https://bvsms.saude.gov.br/vacinacao/"} />
        </CardFaq>
        <CardFaq>
            <H2Title texto={"Como posso estimular o desenvolvimento cognitivo do meu bebê?"} />
            <Paragraph texto={"Algumas formas como dançar, brincar, ler, ver filmes, entre outras são formas de estimular a cognição já que na infância ela evolui de forma muito rápida, caso queira saber mais, veja esse artigo com mais detalhes:"} color={""} />
            <TagA texto={"Mais detalhes"} fonte={"https://blog.academia.com.br/desenvolvimento-cognitivo/#:~:text=Dan%C3%A7ar%2C%20brincar%2C%20ler%2C%20ver,a%20linguagem%20podem%20ser%20aperfei%C3%A7oadas."} />
        </CardFaq>
        <CardFaq>
            <H2Title texto={"Quais são os melhores métodos para garantir uma boa higiene do bebê?"} />
            <Paragraph texto={"Diversos itens são essenciais para manter a higiene do bebê, como: fraldas descartáveis, bolinhas de algodão, shampoo para bebê, lenços umedecidos, hidratante para bebê, pomada anti-assaduras, sabonete neutro para bebês e termômetro digital."} color={""} />
        </CardFaq>
        <CardFaq>
            <H2Title texto={"Como posso deixar minha casa mais segura para bebês e crianças?"} />
            <Paragraph texto={"Deixe fora de alcance principalmente produtos perigosos como produtos de limpeza, ferramentas que possuir em casa, medicamentos, alcool, caso sua casa ou apartamento possuir varanda, é preciso telar ou impedir que eles possam ir lá, caso possuir muitos móveis com quinas, cubra-as para evitar possíveis acidentes."} color={""} />
        </CardFaq>
        </DivContainer>
    )
}

export default BodyFaq