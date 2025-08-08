import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../../Pages/Dashboard";
import { Container } from "../../components/ui/Container";
import { CadastrarUsuario } from "../../components/CadastrarUsuario";

export const Home: React.FC = () => (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/users" element={<CadastrarUsuario />} />


      <Route path="/not-found" element={
        <Container className="flex justify-center items-center w-full">
          <span className="font-bold">Pagina não encontrada</span>
        </Container>
      }/>

      <Route path="/" element={<Navigate to={"/home"} replace />} />
      <Route path="*" element={<Navigate to={"/not-found"} />} />
    </Routes>
);
