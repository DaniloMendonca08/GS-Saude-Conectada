import Image from "next/image"
import { DivContainer } from "../BodyFaq/BodyFaq.style"
import Title from "../Title/Title"
import imgPapel from "../../../assets/papel-escrito.png"
import { CardContent, DivCard, DivImgContent, DivLinks, TextContainer } from "./BodyTutoriais.style"
import H2Title from "../H2Title/H2Title"
import Paragraph from "../Paragraph/Paragraph"
import TagA from "../TagA/TagA"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const BodyTutoriais = () => {

    const router = useRouter()

    useEffect(() => {
        if (sessionStorage.getItem("login") === null) {
            router.push("/login")
        }
    }, [])

    return (
        <DivContainer>
        <TextContainer>
            <Title texto={"Tutoriais"} color={""} />
            <Paragraph texto={"Nesta área pensamos em separar alguns tutoriais para bebês destinado a pais que ainda não possuem experiência e querem buscar informação de forma prática"} color={""} />
        </TextContainer>
        <DivImgContent>
            <Image src={imgPapel} alt={""} />
            <DivCard>
            <CardContent>
                <H2Title texto={"Alimentação saudável para bebês"} />
                <DivLinks>
                    <TagA texto={"Vídeo no Youtube"} fonte={"https://www.youtube.com/watch?v=90zaBTVd7_c"} />
                    <TagA texto={"Texto com dicas"} fonte={"https://olhardigital.com.br/2022/07/20/medicina-e-saude/alimentacao-do-bebe-confira-12-passos-para-uma-introducao-alimentar-saudavel/"} />
                    <TagA texto={"Outra opção de texto"} fonte={"https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-alimentar-melhor/noticias/2021/como-cuidar-da-alimentacao-de-criancas-menores-de-2-anos"} />
                </DivLinks>
            </CardContent>
            <CardContent>
                <H2Title texto={"Troca de fraldas"} />
                <DivLinks>
                    <TagA texto={"Vídeo no YT"} fonte={"https://www.youtube.com/watch?v=uAlUYUbuVT0"} />
                    <TagA texto={"Guia com cuidados"} fonte={"https://semprebem.paguemenos.com.br/posts/saude/trocar-fralda-do-bebe"} />
                </DivLinks>
            </CardContent>
            <CardContent>
                <H2Title texto={"Rotina de sono para bebês"} />
                <DivLinks>
                    <TagA texto={"Vídeo"} fonte={"https://www.youtube.com/watch?v=sNclzkB3HeM"} />
                    <TagA texto={"Guia com detalhes"} fonte={"https://www.buscopan.com.br/blog/pediatrico/rotina-de-sono-do-bebe-como-torna-la-saudavel"} />
                </DivLinks>
            </CardContent>
            <CardContent>
                <H2Title texto={"Livros para bebês"} />
                <DivLinks>
                    <TagA texto={"Plano de aula"} fonte={"https://novaescola.org.br/planos-de-aula/educacao-infantil/creche/leitura-divertida-para-bebes/4070"} />
                    <TagA texto={"Video mostrando diversos livros"} fonte={"https://www.youtube.com/watch?v=3yGyzzKKXxQ"} />
                </DivLinks>
            </CardContent>
            </DivCard>
            <DivCard>
                <CardContent>
                    <H2Title texto={"Higiene bucal para crianças"}></H2Title>
                    <DivLinks>
                        <TagA texto={"Video em animação"} fonte={"https://www.youtube.com/watch?v=6I73vB_mNAI"} />
                        <TagA texto={"Texto da fundação abrinq"} fonte={"https://www.fadc.org.br/noticias/saiba-como-cuidar-da-higiene-bucal-das-criancas"} />
                        <TagA texto={"Outro texto"} fonte={"https://blog.angelus.ind.br/como-falar-sobre-saude-bucal-com-as-criancas/"} />
                    </DivLinks>
                </CardContent>
                <CardContent>
                    <H2Title texto={"Exercícios para crianças em casa"}></H2Title>
                    <DivLinks>
                        <TagA texto={"Texto da Smart Fit"} fonte={"https://www.smartfit.com.br/news/saude/exercicios-fisicos-para-criancas/"} />
                        <TagA texto={"Vídeo demonstrando"} fonte={"https://www.youtube.com/watch?v=YcaVe6pJCUs"} />
                    </DivLinks>
                </CardContent>
                <CardContent>
                    <H2Title texto={"Lanches saudáveis para crianças"}></H2Title>
                    <DivLinks>
                        <TagA texto={"Site com diversas receitas"} fonte={"https://www.receiteria.com.br/receitas-de-lanches-saudaveis/"} />
                        <TagA texto={"Vídeo com algumas opções"} fonte={"https://www.youtube.com/watch?v=a7JJM54pQ3o"} />
                    </DivLinks>
                </CardContent>
                <CardContent>
                    <H2Title texto={"Diversão ao ar livre"} />
                    <DivLinks>
                        <TagA texto={"10 brincadeiras"} fonte={"https://www.magazineluiza.com.br/blog-da-lu/c/dl/dldc/dia-das-criancas-10-dicas-de-brincadeiras-ao-ar-livre/12007/"} />
                        <TagA texto={"Video com demonstração"} fonte={"https://www.youtube.com/watch?v=099jZAph5NM"} />
                    </DivLinks>
                </CardContent>
            </DivCard>
            
            
        </DivImgContent>
        </DivContainer>
    )
}

export default BodyTutoriais