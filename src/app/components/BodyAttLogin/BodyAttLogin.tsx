import { SetStateAction, useState } from "react"
import { ContainerCadastro, DivCadastro } from "../BodyCadastro/BodyCadastro.style"
import { StyledInput, StyledLabel } from "../BodyLogin/BodyLogin.style"
import H2Title from "../H2Title/H2Title"
import Title from "../Title/Title"
import Button from "../Button/Button"
import { useRouter } from "next/navigation"
import { ContainerAttLogin } from "./BodyAttLogin.style"

const BodyAttLogin = () => {

    const router = useRouter()
    const [cpf, setCpf] = useState("")
    const [cep, setCep] = useState("")
    const [nome, setNome] = useState("")
    const [dataN, setDataN] = useState("")
    const [telefone, setTelefone] = useState("")
    const [disabledButton, setDisabledButton] = useState(true)
    const [tipoSangue, setTipoSangue] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [showInfo, setShowInfo] = useState(false)
    const [dadosCliente, setDadosCliente] = useState<dadosCli>({

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

    interface dadosCli {
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

    const handleChangeCPF = (event: { target: { value: SetStateAction<string> } }) => {
        setCpf(event.target.value)
        validarInputs()
    }

    const handleChangeNome = (event: { target: { value: SetStateAction<string> } }) => {
        setNome(event.target.value)
        validarInputs()
    }

    const handleChangeDataNascimento = (event: { target: { value: SetStateAction<string> } }) => {
        setDataN(event.target.value)
        validarInputs()
    }

    const handleChangeTelefone = (event: { target: { value: SetStateAction<string> } }) => {
        setTelefone(event.target.value)
        validarInputs()
    }

    const handleChangeCEP = (event: { target: { value: SetStateAction<string> } }) => {
        setCep(event.target.value)
        setDisabledButton(false)
        validarInputs()
    }

    const handleChangeTipoSangue = (event: { target: { value: SetStateAction<string> } }) => {
        setTipoSangue(event.target.value)
        validarInputs()
    }

    const handleChangeSenha = (event: { target: { value: SetStateAction<string> } }) => {
        setSenha(event.target.value)
        validarInputs()
    }

    const validarInputs = () => {
        if (cpf && cep && nome && dataN && telefone && tipoSangue && email && senha) {
          setShowInfo(true);
        } else {
          setShowInfo(false);
        }
      };


    const handleSearchEmail = async () => {
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
              //alert(dados.status);
              console.log(dados);
              setDadosCliente(dados)
              setShowInfo(true)

            } else {
              router.push("/error/404")
            }

          } catch (error) {
            console.error('Erro ao enviar a solicitação:', error);
            
          }

        }

        const handleUpdate = async () => {
            const clientData = {
                'id_paciente': dadosCliente.id_paciente,
                'cpf_paciente': dadosCliente.cpf_paciente,
                'nome_paciente': dadosCliente.nome_paciente,
                'birthday_paciente': dadosCliente.birthday_paciente,
                'telefone_paciente': dadosCliente.telefone_paciente,
                'uf_paciente': dadosCliente.uf_paciente,
                'cep_paciente': dadosCliente.cep_paciente,
                'rua_paciente': dadosCliente.rua_paciente,
                'bairro_paciente': dadosCliente.bairro_paciente,
                'cidade_paciente': dadosCliente.cidade_paciente,
                'email_paciente': dadosCliente.email_paciente,
                'senha_paciente': dadosCliente.senha_paciente,
                'tipo_sanguineo_paciente': dadosCliente.tipo_sanguineo_paciente
            }
    
            const url = 'http://localhost:8080/paciente/update'
            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( clientData ),
                
              };
        
              try {
                const response = await fetch(url, requestOptions);
            
                if (response.ok) {
                  const dados = await response.json();
                  alert("Dados atualizados com sucesso!");
                } else {
                  const dados = await response.json();
                  alert("Não conseguimos atualizar o seu cadastro");
                }
              } catch (error) {
                console.error('Erro ao enviar a solicitação:', error);
                
              }
        }


    return (
        <ContainerAttLogin>
            <Title texto={"Atualize seu login"} color={""} />
            <DivCadastro>
                <H2Title texto={"Digite seu email"} />
            
                <StyledInput type="text" name="email" id="email" value={email} onChange={handleChangeEmail} required />
                <Button texto={"Buscar"} color={""} bordercolor={""} textcolor={""} onClick={handleSearchEmail}/>

                {showInfo ? (
                    <>
                    <StyledLabel htmlFor="cpf">CPF</StyledLabel>
                    <StyledInput type="text" name="cpf" id="cpf" value={dadosCliente.cpf_paciente} onChange={handleChangeCPF} required/>

                    <StyledLabel htmlFor="nome">Nome</StyledLabel>
                    <StyledInput type="text" name="nome" id="nome" value={dadosCliente.nome_paciente} onChange={handleChangeNome} required/>

                    <StyledLabel htmlFor="data_nascimento">Data de nascimento</StyledLabel>
                    <StyledInput type="text" name="data_nascimento" id="data_nascimento" value={dadosCliente.birthday_paciente} onChange={handleChangeDataNascimento} required/>

                    <StyledLabel htmlFor="telefone">Telefone</StyledLabel>
                    <StyledInput type="text" name="telefone" id="telefone" value={dadosCliente.telefone_paciente} onChange={handleChangeTelefone} required/>

                    <StyledLabel htmlFor="tipo-sang">Tipo Sanguineo</StyledLabel>
                    <StyledInput type="text" name="tipo-sang" id="tipo-sang" value={dadosCliente.tipo_sanguineo_paciente} onChange={handleChangeTipoSangue} required/>

                    <StyledLabel htmlFor="cep">CEP</StyledLabel>
                    <StyledInput type="text" name="cep" id="cep" value={dadosCliente.cep_paciente} onChange={handleChangeCEP} required/>

                    <StyledLabel htmlFor="estado">Estado</StyledLabel>
                    <StyledInput type="text" name="estado" id="estado" placeholder={dadosCliente.uf_paciente} disabled/>

                    <StyledLabel htmlFor="cidade">Cidade</StyledLabel>
                    <StyledInput type="text" name="cidade" id="cidade" placeholder={dadosCliente.cidade_paciente} disabled/>

                    <StyledLabel htmlFor="bairro">Bairro</StyledLabel>
                    <StyledInput type="text" name="bairro" id="bairro" placeholder={dadosCliente.bairro_paciente} disabled/>

                    <StyledLabel htmlFor="rua">Rua</StyledLabel>
                    <StyledInput type="text" name="rua" id="rua" placeholder={dadosCliente.rua_paciente} disabled/>
                    
                    <StyledLabel htmlFor="email">Email</StyledLabel>
                    <StyledInput type="email" name="email" id="email" value={email} onChange={handleChangeEmail} required/>

                    <StyledLabel htmlFor="senha">Senha</StyledLabel>
                    <StyledInput type="password" name="senha" id="senha" value={dadosCliente.senha_paciente} onChange={handleChangeSenha} required/>

                    <Button texto={"Atualizar cadastro"} color={""} bordercolor={""} textcolor={""} onClick={handleUpdate}/>
                    </>
                ) : (null)}
            </DivCadastro>
        </ContainerAttLogin>
    )
}

export default BodyAttLogin