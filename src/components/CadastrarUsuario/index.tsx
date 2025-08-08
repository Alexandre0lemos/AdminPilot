import type React from "react";
import { Container } from "../ui/Container";
import { Input } from "../ui/Input";

export const CadastrarUsuario:React.FC = () => {
    return (
        <Container className="flex justify-center items-center w-full">
            <form 
            className=""
            method="post" encType="multipart/form-data" action={"http://192.168.0.111:8080/"}>
                <div className="flex flex-col justify-center items-center rounded-lg pt-12 pb-9 p-8 gap-1 text-gray-600 font-semibold bg-white shadow-2xl">
                    <span className="text-2xl">Cadastrar Usuario</span>

                    <div className="grid grid-cols-1 grid-rows-4 place-items-center w-[36rem] pt-1 pb-1">
                        <Input type="text" label="Usuário"/>
                        <Input type="password" label="Senha"/>
                        <Input type="password" label="Confirmar senha"/>
                        <button type="submit" className="text-white font-bold mt-2 h-9 bg-gray-700 rounded-md w-full">Cadastrar</button>
                    </div>
                </div>
            </form>
        </Container>
    )
}