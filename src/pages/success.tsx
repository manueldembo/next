import Link from "next/link";
import { ImageContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";

export default function success() {
    return (
        <SuccessContainer>
            <h1>Compra efectuda!</h1>
            <ImageContainer>

            </ImageContainer>

            <p>
            Uhuul <strong>Manuel Dembo</strong> sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa. 
            </p>

            <Link href="/">
                Voltar ao catalogo
            </Link>
        </SuccessContainer>
    )
}