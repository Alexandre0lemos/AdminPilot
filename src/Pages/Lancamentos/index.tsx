import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "../../components/ui/Container";
import { Tr } from "../../components/ui/Tr";
import { Th } from "../../components/ui/Th";
import { Td } from "../../components/ui/Td";

export interface Ordem {
  cod_produto: number;
  falta: number;
  finalizado: number;
  id_lancamento: string;
  lancamento: number;
  nome_produto: string;
  num_lote: number;
  num_ordem: number;
  observacao: string;
  operador: string;
  quantidade_prevista: number;
  supervisor: string;
  tipo_lancamento: string;
}

export const Lancamentos: React.FC = () => {
  const [lancamentos, setLancamentos] = useState<ReadonlyArray<Ordem>>();
  const ultimoLancamento = useRef("")
  const [filtro, setFiltro] = useState(-1);

  const handleGetLancamentos = async () => {
    try {
      const response = await fetch("http://192.168.0.111:8080/view/lancados");

      if (!response.ok) return alert("Ocorreu algum erro na logica"), false;

      const response_json = await response.json();

      if (JSON.stringify(response_json) == ultimoLancamento.current) {
        return false
      } else {
        ultimoLancamento.current = JSON.stringify(response_json)
        setLancamentos(response_json)
      }
    } catch {
      alert("erro de conexão");
    }
  };

  useEffect(() => {
    handleGetLancamentos();

    const interval = setInterval(() => {
      handleGetLancamentos();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const ordensFiltradas = useMemo(() => {
    if (filtro === -1) return lancamentos;
    return lancamentos?.filter((ordem) => ordem.finalizado == filtro);
  }, [filtro, lancamentos]);

  return (
    <Container className="flex flex-col gap-2 w-full p-4">
      <nav className="border-b border-gray-300 w-full pb-2 flex justify-between">
        <select
          defaultValue={"-1"}
          onChange={(e) => setFiltro(Number(e.target.value))}
          className="text-left hover:cursor-pointer"
          name="filtro"
          id="filtro"
        >
          <option value="-1">TODOS</option>
          <option value="0">PENDENTES</option>
          <option value="1">FINALIZADOS</option>
        </select>
        {/* <span className="hover:cursor-pointer hover:scale-[.9] active:scale-[1]" onClick={handleGetLancamentos}>
            <RotateCcw />
          </span> */}
      </nav>
      <div className="overflow-scroll">
        <table className="text-center w-full">
          <thead className="sticky top-0">
            <Tr>
              <Th>CODPROD</Th>
              <Th>PRODUTO</Th>
              <Th>ORDEM</Th>
              <Th>QT ORDEM</Th>
              <Th>LANCAMENTO</Th>
              <Th>TIPO</Th>
              <Th>FALTA</Th>
              <Th>FALTAVA</Th>
              <Th>SUPERVISOR</Th>
            </Tr>
          </thead>
          <tbody className="overflow-scroll">
            {ordensFiltradas?.map((ordem) => (
              <Tr key={ordem.id_lancamento}>
                <Td>{ordem.cod_produto}</Td>
                <Td>{ordem.nome_produto}</Td>
                <Td>{ordem.num_ordem}</Td>
                <Td>{ordem.quantidade_prevista}</Td>
                <Td>{ordem.lancamento}</Td>
                <Td>{ordem.tipo_lancamento}</Td>
                <Td>{ordem.falta}</Td>
                <Td>{ordem.observacao.split("Faltava:")}</Td>
                <Td>{ordem.supervisor}</Td>
              </Tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};
