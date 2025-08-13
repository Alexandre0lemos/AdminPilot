import React, { useRef, useState, type ChangeEvent } from "react";
import { Container } from "../../components/ui/Container";
import { FileJson2 } from "lucide-react";

export const UpdateOPs: React.FC = () => {
  const [fileName, setFileName] = useState("Nenhum arquivo escolhido");
  const file = useRef<HTMLInputElement | null>(null)
  const inProcess = useRef(false)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    file.current = e.target
    const fileInput = file.current?.files?.[0]
    setFileName(fileInput ? fileInput?.name : "Nenhum arquivo escolhido");
  };

  const handlePostFile = async () => {
    if (!inProcess.current) {
      if (!file.current?.files?.[0]) return alert("Nenhum arquivo selecionado"), false;

      inProcess.current = true

      const formData = new FormData();

      formData.append("file", file.current?.files?.[0]);

      const abort = new AbortController()

      const timeOut = setTimeout(() => {
        abort.abort()
        alert("erro de conexão")
        inProcess.current = false
      }, 2000);

      try {
        const response = await fetch(
          "http://192.168.0.111:8080/atualizar_ordens_aberta",
          {
            method: "POST",
            body: formData,
            signal: abort.signal
          }
        );

        clearTimeout(timeOut)

        if (!response.ok) {
          alert("Erro na logica")
          return false
        }
        const responseJson = await response.json()

        console.log(responseJson.status)

        file.current = null


        setFileName("Nenhum arquivo selecionado")
      } catch (error) {
        console.log(error)

      } finally {
        inProcess.current = false
      }
    };
  }
  return (
    <Container className="flex justify-center items-center flex-1">
      <div className="w-min min-w-[300px] p-4 flex flex-col shadow-2xl border rounded border-gray-200 gap-2">
        <div className="flex justify-start items-center gap-2">
          <label
            htmlFor="file"
            className="bg-gray-800 text-center text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-700"
          >
            <FileJson2 />
          </label>
          <span className="text-sm text-gray-700 m-auto pr-8 whitespace-nowrap">
            {fileName}
          </span>
          <input
            required
            type="file"
            id="file"
            name="file"
            className="hidden"
            accept=".xls,.xlsx"
            onChange={handleFileChange}
          />
        </div>

        <button
          onClick={handlePostFile}
          className="bg-gray-800 text-sm pt-1 pb-1 hover:cursor-pointer hover:bg-gray-700 text-white rounded">
          Atualizar OPs
        </button>
      </div>
    </Container>
  );
};
