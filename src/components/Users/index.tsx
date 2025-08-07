import type React from "react";
import { Container } from "../ui/Container";

export const Users:React.FC = () => {
    return (
        <Container>
            <form 
            className="flex"
            method="post" encType="multipart/form-data" action={"http://192.168.0.111:8080/"}>
                
            </form>
        </Container>
    )
}