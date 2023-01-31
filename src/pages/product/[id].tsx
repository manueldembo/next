import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
    const { query } = useRouter();

    return (
       <ProductContainer>
        <ImageContainer>

        </ImageContainer>

        <ProductDetails>
            <h1>Camiseta X</h1>
            <span>R$ 79,90</span>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis ea quibusdam sapiente, tempora id laudantium accusantium asperiores iste assumenda aut fugiat dolore similique error deserunt recusandae culpa voluptates illum?</p>
            <button>
                Comprar agora
            </button>
        </ProductDetails>
       </ProductContainer>
    )
}