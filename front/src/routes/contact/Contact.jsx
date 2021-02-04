import React from "react";
import MetaTags from "react-meta-tags";

export default function Contact() {
  return (
    <div className='main'>
      <MetaTags>
        <title>Me contacter</title>
        <meta name='description' content='Some description.' />
        <meta property='og:title' content='MyApp' />
        <meta property='og:image' content='path/to/image.jpg' />
      </MetaTags>
      <h1>Me contacter</h1>
    </div>
  );
}
