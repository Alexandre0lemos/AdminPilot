import type React from "react";
import { Container } from "../ui/Container";
import { Input } from "../ui/Input";
import { ArrowBigLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const CadastrarUsuario: React.FC = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const validation = () => {
        if (!username) return alert("Campo Usuário vazio"), false
        if (!password) return alert("Campo Senha vazio"), false
        if (!confirmPassword) return  alert("Campo Confirmar senha vazio"), false
        if (password.length < 8) return alert("Campo Senha precisa ter no minimo 8 caracterios"), false
        if (confirmPassword !== password) return alert("Campo Senha e Confirmar senha precisam ser iguais"), false

        return true
    }

    const handleCreateUser = async () => {
        if (!validation()) {    
            return;
        }

        try {
            const response = await fetch("http://192.168.0.10:5108/create-user", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    username: username,
                    password: password
                }),
            })

            const bodyResponse = await response.json()
            alert(bodyResponse.username + " - " + bodyResponse.password)
            setUsername("")
            setPassword("")
            setConfirmPassword("")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center rounded-lg pt-12 pb-9 p-8 gap-1 text-gray-600 font-semibold bg-white shadow-2xl">
                <div className="flex items-center justify-center w-full relative">
                    <ArrowBigLeft onClick={() => navigate("/users")} size={"1.25rem"} className="border cursor-pointer hover:bg-red-300 hover:text-white transition rounded-2xl absolute left-0" />
                    <span className="text-2xl">Cadastrar Usuario</span>
                </div>

                <div className="grid grid-cols-1 grid-rows-4 place-items-center w-[36rem] pt-1 pb-1">
                    <Input value={username} identificador="username" onChange={(e) => setUsername(e.target.value)} required type="text" label="Usuário" />
                    <Input value={password} identificador="password" onChange={(e) => setPassword(e.target.value)} required type="password" label="Senha" />
                    <Input value={confirmPassword} identificador="confirm-password" onChange={(e) => setConfirmPassword(e.target.value)} required type="password" label="Confirmar senha" />
                    <button onClick={handleCreateUser} className="text-white font-bold mt-2 h-9 bg-gray-700 rounded-md w-full">Cadastrar</button>
                </div>
            </div>
        </Container>
    )
}