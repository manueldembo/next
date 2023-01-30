import { AppProps } from "next/app";
import { globalStyle } from "../styles/global";
import { Container, Header } from "../styles/pages/App";

import logoImg from '../assets/logo.svg'

import Image from 'next/image'

globalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt=""/>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
