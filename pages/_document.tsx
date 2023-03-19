import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <title>Guildly</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#101D30" />
      <meta
        property="og:site_name"
        content="Connect players to connect games"
      />
      <meta property="og:title" content="Guilds 🛡" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Organize your team to conquer all the games of StarkNet"
      />
      <meta property="og:url" content="%PUBLIC_URL%" />
      <meta property="og:image" content="%PUBLIC_URL%/logo.svg" />
      <meta
        name="description"
        content="Organize your team to conquer all the games of StarkNet"
      />

      <link rel="icon" href="/token_symbol.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&display=swap"
        rel="stylesheet"
      />
      <body className="default_background_color">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
