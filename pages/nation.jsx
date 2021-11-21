import Head from 'next/head'
import { Container } from '../styles/index'
import { GlobalStyle } from '../styles/index'
import { MainText } from '../styles/index'
import { Card } from '../styles/index'
import { ButtonCorvo } from '../styles/button'


export default function Home() {
  return (
    <Container>
    <GlobalStyle/>
      <body>
      <Head>
        <title>Nação</title>
        <meta name="description" content="uma carta de amor OwO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <MainText>
    <h1>Muito Obrigado!</h1>
      </MainText>
      <Card>
          <ButtonCorvo>
           <h4>Isso é uma carta de amor para todos do Furros Animados</h4> <br/>
           <p>
            eu estava em uma época onde eu não tinha certeza se eu queria<br/>
           mostrar meu trabalho, mas vocês, tanto diretamente quanto<br/>
           indiretamente, me encorajaram a mostrar a todos o meu<br/>
           trabalho, e me mostraram pra eu não temer isso(é sério, quando<br/>
            entrei no grupo, eu estava tremendo como um Chiuhuahua).<br/>
           Eu devo muito a isso por vocês.<br/>
           Estou rodeado de pessoas amáveis, que merecem o mundo,<br/>
           e isso inclui vocês.<br/>
          <h4>Obrigado por me moldarem.</h4>
           </p>
          </ButtonCorvo>

        
      
      
      
      </Card>
      </body>
      
    
    </Container>
  )
}
