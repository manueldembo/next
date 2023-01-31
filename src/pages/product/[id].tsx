import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";
import { stripe } from '../../lib/stripe';
import Image from "next/image";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import { useRouter } from "next/router";

interface ProcutProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: number
        description: string
    }
}

export default function Product({ product }: ProcutProps) {
    const { isFallback} = useRouter()

    if(isFallback) {
        return <p>Loading...</p>
    }

    return (
       <ProductContainer>
        <ImageContainer>
            <Image src={product.imageUrl} width={520} height={480} alt=""/>
        </ImageContainer>

        <ProductDetails>
            <h1>{product.name}</h1>
            <span>{ product.price }</span>
            <p>{product.description}</p>

            <button>
                Comprar agora
            </button>
        </ProductDetails>
       </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    //buscar produtos mais acessados ou mais vendidos

    return {
        paths: [
            { params: {id: 'prod_NGmmkwtbEYi6DN'}}
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
          product: {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-AO', {
                style: 'currency',
                currency: 'AOA',
            }).format(price.unit_amount / 100),
            description: product.description
          }
        },
        revalidate: 60 * 60 * 2, //2 horasx
    }
}