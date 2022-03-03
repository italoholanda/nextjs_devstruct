import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    :root {
        --white: #F8F8F8;
        --black: #0a0a0a;
        --blue-dark: #212FAF;
        --blue-light: #45D3F2;

        --grey-050: #f0f0f0;
        --grey-100: #d0d0d0;
        --grey-200: #A0A0A0;
        --grey-300: #606060;
        --grey-400: #323232;
        --grey-500: #252525;
        --grey-600: #181818;
        --grey-700: #121212;
        --grey-800: #101010;
    }

    html, body, #__next {
        height: 100%;
    }

    body {
        font-family:  -apple-system, BlinkMacSystemFont, 'Segoe Ui', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: var(--grey-050);
        color: var(--grey-500);
    }

    .container {
        margin: 0 auto;
        width: 100%;
        max-width: 768px;
        padding: 0 1rem;
    }
`

export default GlobalStyles
