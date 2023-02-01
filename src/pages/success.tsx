import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
    customerName: string
    product: {
        name: string,
        imageUrl: string
    }
}

export default function success({ customerName, product}: SuccessProps) {
    return (
        <>
            <Head>
                 <title>Compra efetuada | Ignite Shop</title>
                 <meta name="robots" content="noindexw" />
            </Head>

            <SuccessContainer>
                <h1>Compra efectuda!</h1>
                <ImageContainer>   
                    <Image src={product.imageUrl} width={120} height={110} alt=""/>
                </ImageContainer>

                <p>
                Uhuul <strong>{customerName}</strong> sua <strong>{product.name}</strong> já está a caminho da sua casa. 
                </p>

                <Link href="/">
                    Voltar ao catalogo
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query, params}) => {
    if(!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const product = session.line_items.data[0].price.product as Stripe.Product
    const customerName = session.customer_details.name

    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0],
            }
        }
    }
}