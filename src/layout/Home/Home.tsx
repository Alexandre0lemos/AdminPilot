import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import { Users } from "../../Pages/Users";
import { CadastrarUsuario } from "../../components/CadastrarUsuario";
import { UpdateOPs } from "../../Pages/UpdateOPs";
import { Lancamentos } from "../../Pages/Lancamentos";

export const Home: React.FC = () => (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} />
      <Route path="/update-ops" element={<UpdateOPs />} />
      <Route path="/views" element={<Lancamentos />} />

      <Route path="/not-found" element={
        <Container className="flex justify-center items-center w-full">
          <span className="font-bold">Pagina não encontrada</span>
        </Container>
      }/>

      <Route path="/" element={<Navigate to={"/home"} replace />} />
      <Route path="*" element={<Navigate to={"/not-found"} />} />
    </Routes>
);
