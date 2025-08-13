import type React from "react";
import { Container } from "../ui/Container";
import { Input } from "../ui/Input";
import { ArrowBigLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export const CadastrarUsuario: React.FC = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const inProcess = useRef(false)

    const validation = () => {
        if (!username) return alert("Campo Usuário vazio"), false
        if (!password) return alert("Campo Senha vazio"), false
        if (!confirmPassword) return  alert("Campo Confirmar senha vazio"), false
        if (password.length < 4) return alert("Campo Senha precisa ter no minimo 4 caracterios"), false
        if (confirmPassword !== password) return alert("Campo Senha e Confirmar senha precisam ser iguais"), false

        return true
    }

    const handleCreateUser = async () => {
        if (!validation() || inProcess.current) {    
            return;
        }

        inProcess.current = true

        const abortController = new AbortController()
        const timeOut = setTimeout(() => abortController.abort(), 2000)

        try {
            const response = await fetch("http://192.168.0.111:8080/api/registrar-usuario", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    username: username,
                    password: password
                }),

                signal:abortController.signal
            })

            clearTimeout(timeOut)

            const bodyResponse = await response.json()

            alert(bodyResponse.status)

            navigate("/users")

        } catch (error) {
            alert("Erro de conexão")

        } finally {
            inProcess.current = false
        }
    }

    return (
        <Container className="flex justify-center items-center flex-1">
            <div className="flex flex-col justify-center items-center rounded-lg p-4 gap-1 text-gray-600 font-semibold bg-white shadow-2xl">
                <div className="flex items-center justify-center w-full relative">
                    <ArrowBigLeft onClick={() => navigate("/users")} size={"1.25rem"} className="border cursor-pointer hover:bg-red-300 hover:text-white transition rounded-2xl absolute left-0" />
                    <span className="text-2xl">Cadastrar Usuario</span>
                </div>

                <div className="grid grid-cols-1 grid-rows-4 place-items-center w-[36rem] pt-1">
                    <Input value={username} identificador="username" onChange={(e) => setUsername(e.target.value)} required type="text" label="Usuário" />
                    <Input value={password} identificador="password" onChange={(e) => setPassword(e.target.value)} required type="password" label="Senha" />
                    <Input value={confirmPassword} identificador="confirm-password" onChange={(e) => setConfirmPassword(e.target.value)} required type="password" label="Confirmar senha" />
                    <button onClick={handleCreateUser} className="text-white font-bold mt-2 h-9 hover:cursor-pointer bg-gray-800 hover:bg-gray-700 rounded-md w-full">Cadastrar</button>
                </div>
            </div>
        </Container>
    )
}