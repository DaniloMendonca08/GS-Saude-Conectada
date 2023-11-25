import { SetStateAction, useState } from "react"
import { StyledInput, StyledLabel } from "../BodyLogin/BodyLogin.style"
import Title from "../Title/Title"
import { ContainerCadastro, DivCadastro } from "./BodyCadastro.style"
import H2Title from "../H2Title/H2Title"
import Button from "../Button/Button"

const BodyCadastro = () => {

    const [cpf, setCpf] = useState("")
    const [cep, setCep] = useState("")
    const [nome, setNome] = useState("")
    const [dataN, setDataN] = useState("")
    const [telefone, setTelefone] = useState("")
    const [disabledButton, setDisabledButton] = useState(true)
    const [tipoSangue, setTipoSangue] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [botaoVisivel, setBotaoVisivel] = useState(false);
    const [address, setAddress] = useState<address>({
    state: '',
    city: '',
    neighborhood: '',
    street: ''
    });
    const [isSearchingcep, setIsSearchingCep] = useState(false)

    interface address {
    state: string,
    city: string,
    neighborhood: string,
    street: string,
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

    const handleChangeEmail = (event: { target: { value: SetStateAction<string> } }) => {
        setEmail(event.target.value)
        validarInputs()
    }

    const handleChangeSenha = (event: { target: { value: SetStateAction<string> } }) => {
        setSenha(event.target.value)
        validarInputs()
    }

    const handleSearchCep = async () => {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        if (!response.ok) {
            if (response.status === 404) {
              alert('CEP não encontrado. Por favor, verifique o CEP e tente novamente.');
            } else {
              alert(`Erro na requisição: ${response.status}`);
            }
          }
        else {
            const options = await response.json()
            setIsSearchingCep(true)
            setDisabledButton(true)
            setAddress(options)
            validarInputs
        }   
    }

    const handleSubmit = async () => {
        const clientData = {
            'cpf_paciente': cpf,
            'nome_paciente': nome,
            'birthday_paciente': dataN,
            'telefone_paciente': telefone,
            'uf_paciente': address.state,
            'cep_paciente': cep,
            'rua_paciente': address.street,
            'bairro_paciente': address.neighborhood,
            'cidade_paciente': address.city,
            'email_paciente': email,
            'senha_paciente': senha,
            'tipo_sanguineo_paciente': tipoSangue
        }

        const url = 'http://localhost:8080/paciente/add'
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( clientData ),
            
          };
    
          try {
            const response = await fetch(url, requestOptions);
        
            if (response.ok) {
              const dados = await response.json();
              alert("Cadastro realizado com sucesso!");
            } else {
              const dados = await response.json();
              alert(dados.error);
            }
          } catch (error) {
            console.error('Erro ao enviar a solicitação:', error);
          }
        };

    const validarInputs = () => {
        if (cpf && cep && nome && dataN && telefone && tipoSangue && email && senha) {
          setBotaoVisivel(true);
        } else {
          setBotaoVisivel(false);
        }
      };

    return (
        <ContainerCadastro>
        <Title texto={"Faça seu cadastro"} color={""} />
        <DivCadastro>
                <H2Title texto={"Dados pessoais"} />

                <StyledLabel htmlFor="cpf">CPF</StyledLabel>
                <StyledInput type="text" name="cpf" id="cpf" value={cpf} onChange={handleChangeCPF} required/>

                <StyledLabel htmlFor="nome">Nome</StyledLabel>
                <StyledInput type="text" name="nome" id="nome" value={nome} onChange={handleChangeNome} required/>

                <StyledLabel htmlFor="data_nascimento">Data de nascimento</StyledLabel>
                <StyledInput type="date" name="data_nascimento" id="data_nascimento" value={dataN} onChange={handleChangeDataNascimento} required/>

                <StyledLabel htmlFor="telefone">Telefone</StyledLabel>
                <StyledInput type="text" name="telefone" id="telefone" value={telefone} onChange={handleChangeTelefone} required/>

                <StyledLabel htmlFor="tipo-sang">Tipo Sanguineo</StyledLabel>
                <StyledInput type="text" name="tipo-sang" id="tipo-sang" value={tipoSangue} onChange={handleChangeTipoSangue} required/>
        </DivCadastro>
            <DivCadastro>
                <H2Title texto={"Endereço"} />

                <StyledLabel htmlFor="cep">CEP</StyledLabel>
                <StyledInput type="text" name="cep" id="cep" value={cep} onChange={handleChangeCEP} required/>

                <Button texto={"Buscar CEP"} color={""} bordercolor={""} textcolor={""}  onClick={handleSearchCep} disabled={disabledButton}/>
                    

                {isSearchingcep ? (
                <>
                <StyledLabel htmlFor="estado">Estado</StyledLabel>
                <StyledInput type="text" name="estado" id="estado" placeholder={address.state} disabled/>

                <StyledLabel htmlFor="cidade">Cidade</StyledLabel>
                <StyledInput type="text" name="cidade" id="cidade" placeholder={address.city} disabled/>

                <StyledLabel htmlFor="bairro">Bairro</StyledLabel>
                <StyledInput type="text" name="bairro" id="bairro" placeholder={address.neighborhood} disabled/>

                <StyledLabel htmlFor="rua">Rua</StyledLabel>
                <StyledInput type="text" name="rua" id="rua" placeholder={address.street} disabled/>
              </>

          ) : null}
            </DivCadastro>
        <DivCadastro>
                <H2Title texto={"Dados para login"} />

                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput type="email" name="email" id="email" value={email} onChange={handleChangeEmail} required/>

                <StyledLabel htmlFor="senha">Senha</StyledLabel>
                <StyledInput type="password" name="senha" id="senha" value={senha} onChange={handleChangeSenha} required/>
        </DivCadastro>

                {botaoVisivel ? (
                    <Button texto={"Finalizar cadastro"} color={""} bordercolor={""} textcolor={""} onClick={handleSubmit}/>
                ) : (
                    null
                    )}

                
        </ContainerCadastro>
    )
}

export default BodyCadastro