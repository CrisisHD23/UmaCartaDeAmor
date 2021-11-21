import Head from 'next/head'
import { Container } from '../styles/index'
import { GlobalStyle } from '../styles/index'
import { MainText } from '../styles/index'
import { Card } from '../styles/index'
import { ButtonLai } from '../styles/button'


export default function Home() {
  return (
    <Container>
    <GlobalStyle/>
      <body>
      <Head>
        <title>Confederação</title>
        <meta name="description" content="uma carta de amor OwO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <MainText>
    <h1>Muito Obrigado!</h1>
      </MainText>
      <Card>
        

      
        <ButtonLai>
        <h4>Isso é uma carta de amor para todos da Confederação Galática Vulpina.<br/></h4>
        <p>eu simplesmente não tenho palavras para descrever como eu sou grato a todos vocês,<br/>
        eu estava em um momento muito delicado da minha vida, onde eu tinha saído de um monte de amizades tóxicas,<br/>
        e tava me sentido muito vazio(e não, não era fome), mas vocês me fizeram me sentir incluído,<br/>
        e eu me diverti muito nas nossas calls.<br/>
        Hoje em dia, eu estou cercada de pessoas geniais, magnifícas, e extremamente esforçadas,<br/>
        e sinceramente, vocês são a fonte de minha inspiração, e por isso, eu digo... <br/>
        <h4>Obrigado por salvarem minha vida.</h4>
        </p>

        </ButtonLai>
      
      
      
      </Card>
      </body>
      
    
    </Container>
  )
}
