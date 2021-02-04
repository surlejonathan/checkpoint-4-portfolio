import React from "react";
import MetaTags from "react-meta-tags";
import Card from "../../components/card/Card";
import cardStyles from "../../components/card/Card.module.css";

export default function Home() {
  return (
    <div className='main'>
      <MetaTags>
        <title>Accueil</title>
        <meta name='description' content='Some description.' />
        <meta property='og:title' content='MyApp' />
        <meta property='og:image' content='path/to/image.jpg' />
      </MetaTags>
      <h1>Bienvenue chez moi !</h1>
      <div className={cardStyles.grid}>
        <Card
          path='/about'
          title='A propos de moi...'
          description="Quelques informations sur mes expériences professionnelles et ce qui m'a conduit à devenir développeur web, en passant par mon parcours à la Wild Code School..."
        />
        <Card
          path='/projects'
          title='Mes réalisations...'
          imgSrc='https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
          description="Faites un tour d'horizon de mes différents projets..."
        />
      </div>
    </div>
  );
}
