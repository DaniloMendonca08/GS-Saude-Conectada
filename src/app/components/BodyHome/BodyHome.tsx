import { useRouter } from "next/navigation"
import { StyledA } from "../TagA/TagA.style"
import Title from "../Title/Title"
import { DivGrid, DivHome, StyledTagA } from "./BodyHome.style"
import { useEffect } from "react"

const BodyHome = () => {

    const router = useRouter()

    useEffect(() => {
        if (sessionStorage.getItem("login") === null) {
            router.push("/login")
        }
    }, []) 


    return (
        <DivHome>
            <Title texto={"Seja bem vindo novamente!"} color={""} />

            <DivGrid>
            <StyledTagA href="/faq">Faq</StyledTagA>
            <StyledTagA href="Tutoriais">Tutoriais</StyledTagA>
            <StyledTagA href="/AttLogin">Atualizar login</StyledTagA>
            </DivGrid>
        </DivHome>
    )
}

export default BodyHome