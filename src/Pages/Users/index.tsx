import React, { useEffect, useState } from "react";
import { Container } from "../../components/ui/Container";
import { useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";
import styles from "./style.module.css";

interface Usuario {
  id: number;
  username: string;
}

export const Users: React.FC = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  const get_users = async () => {
    try {
      const response = await fetch("http://192.168.0.111:8080/usuarios", {
        method: "POST",
        body: JSON.stringify({ secret_key: "Al010306*" }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const response_json = await response.json();
        setUsuarios(response_json);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      const response = await fetch("http://192.168.0.111:8080/delete-user", {
        method: "POST",
        body: JSON.stringify({
          secret_key: "Al010306*",
          id_user: id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) return get_users();

    } catch {
      alert("Erro de conexão com o servidor")
    }
  };

  useEffect(() => {
    get_users();
  }, []);

  return (
    <Container className="flex justify-center flex-1">
      <div className="flex flex-col w-[38rem] justify-center">
        <div className="flex flex-col w-[38rem] justify-center gap-2 h-min shadow-2xl p-4 rounded-2xl">
          <div className="flex flex-col justify-between gap-2 rounded-2xl max-h-[38rem] overflow-y-scroll">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow-2xl">
              <thead className="bg-white w-full sticky top-0">
                <tr className="grid grid-cols-[1fr_3fr] place-items-center">
                  <th className="px-6 py-3 text-center text-xs font-bold text-gray-800 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-bold text-gray-800 uppercase tracking-wider">
                    Username
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {usuarios.map((usuario: Usuario) => (
                  <tr
                    key={usuario.id}
                    className={`hover:bg-gray-50 grid grid-cols-[1fr_3fr] transition-colors  place-items-center`}
                  >
                    <td className="px-6  whitespace-nowrap text-sm font-semibold text-center text-gray-700">
                      {usuario.id}
                    </td>
                    <td
                      className={`${styles.username} px-6 p-4 whitespace-nowrap text-sm text-center flex items-center justify-center gap-2 font-semibold text-gray-700`}
                    >
                      {usuario.username}
                      <span
                        className={`${styles.span} items-center justify-center`}
                      >
                        <XCircle
                          onClick={() => handleDeleteUser(usuario.id)}
                          className="hover:cursor-pointer hover:text-red-400"
                          size={"1rem"}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={() => navigate("/cadastrar-usuario")}
            className="border border-white bg-gray-800 hover:bg-gray-700 p-1.5 hover:cursor-pointer text-white shadow-2xl capitalize font-bold rounded-lg"
          >
            Cadastrar Usuario
          </button>
        </div>
      </div>
    </Container>
  );
};
