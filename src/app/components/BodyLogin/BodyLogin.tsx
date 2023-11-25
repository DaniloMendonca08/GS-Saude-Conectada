"use client"

import { colors } from "@/styles/colors"
import Button from "../Button/Button"
import Title from "../Title/Title"
import { ContainerLogin, DivAttLogin, DivLogin, StyledInput, StyledLabel } from "./BodyLogin.style"
import { SetStateAction, useEffect, useState } from "react"
import H2Title from "../H2Title/H2Title"
import { useRouter } from "next/navigation"


const BodyLogin = () => {

    const router = useRouter()
    const [email,setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [dadosLogin, setDadosLogin] = useState<dadosLog>({

        bairro_paciente: '',
        birthday_paciente: '',
        cep_paciente: '',
        cidade_paciente: '',
        cpf_paciente: '',
        email_paciente: '',
        id_paciente: 0,
        nome_paciente: '',
        rua_paciente: '',
        senha_paciente: '',
        telefone_paciente: '',
        tipo_sanguineo_paciente: '',
        uf_paciente: ''
    })


    interface dadosLog {
        bairro_paciente: string,
        birthday_paciente: string,
        cep_paciente: string,
        cidade_paciente: string,
        cpf_paciente: string,
        email_paciente: string,
        id_paciente: number,
        nome_paciente: string,
        rua_paciente: string,
        senha_paciente: string,
        telefone_paciente: string,
        tipo_sanguineo_paciente: string,
        uf_paciente: string
    }

    const handleChangeEmail = (event: { target: { value: SetStateAction<string> } }) => {
        setEmail(event.target.value)
    }

    const handleChangeSenha = (event: { target: { value: SetStateAction<string> } }) => {
        setSenha(event.target.value)
    }

    const handleAttLogin = () => {
        router.push("/AttLogin")
    }

    const handleCadastro = () => {
        router.push("/cadastro")
    }

    useEffect(() => {
        const credenciais = sessionStorage.getItem("login");
                if (credenciais) {
                sessionStorage.removeItem("login");
                }
    }, [])

    const handleLogin = async () => {
        const url = `http://localhost:8080/paciente/byEmail/${email}`
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        try {
            const response = await fetch(url, requestOptions);
            
            if (response.ok) {
              const dados = await response.json();
              setDadosLogin(dados)

              if (dados.email_paciente === email && dados.senha_paciente === senha) {
                alert("Login efetuado com sucesso!");
                sessionStorage.setItem("login", `${dados.email_paciente}.${dados.senha_paciente}`);
                router.push("/")
              } else {
                alert("Email ou senha estão incorretos. Tente novamente!");
              }
              
            } else {
              const dados = await response.json();
              
            }
          } catch (error) {
            console.error('Erro ao enviar a solicitação:', error);
          }
    }

    return (
        <ContainerLogin>
            <DivLogin>
                <Title texto={"Login"} color={colors.primary.blueEndingHeader} />

                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput type="email" name="email" id="email" value={email} onChange={handleChangeEmail} />

                <StyledLabel htmlFor="password">Senha</StyledLabel>
                <StyledInput type="password" name="password" id="password" value={senha} onChange={handleChangeSenha}/>
            </DivLogin>
            <Button texto={"Login"} color={colors.primary.grayStartingFooter} bordercolor={colors.primary.grayEndingFooter} textcolor={colors.primary.blueEndingHeader} onClick={handleLogin}/>

            <DivAttLogin>
                <H2Title texto={"Esqueceu seu login?"} />
                <Button texto={"Atualizar meus dados"} color={colors.primary.grayStartingFooter} bordercolor={colors.primary.grayEndingFooter} textcolor={colors.primary.blueEndingHeader} onClick={handleAttLogin} />
            </DivAttLogin>
            <DivAttLogin>
                <H2Title texto={"Não é cadastrado?"} />
                <Button texto={"Fazer cadastro"} color={colors.primary.grayStartingFooter} bordercolor={colors.primary.grayEndingFooter} textcolor={colors.primary.blueEndingHeader} onClick={handleCadastro} />
            </DivAttLogin>
        </ContainerLogin>
    )
}

export default BodyLogin