import Head from 'next/head'
import { Container } from '../styles/index'
import { GlobalStyle } from '../styles/index'
import { MainText } from '../styles/index'
import { Card } from '../styles/index'
import { ButtonLai } from '../styles/button'
import Link from 'next/link'
import { ButtonCorvo } from '../styles/button'


export default function Home() {
  return (
    <Container>
    <GlobalStyle/>
      <body>
      <Head>
        <title>Carta</title>
        <meta name="description" content="uma carta de amor OwO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <MainText>
    <h1>Muito Obrigado!</h1>
      </MainText>
      <Card>
        

        <Link href="/confederacy">
        <ButtonLai>
        <a>Para a Confederação Galática Vulpina</a>
          </ButtonLai>
          </Link>
           <br/>

           <Link href="/nation">
          <ButtonCorvo>
           <a>Para o Furros Animados</a>
          </ButtonCorvo>
          </Link>
      
      
      
      </Card>
      </body>
      
    
    </Container>
  )
}
