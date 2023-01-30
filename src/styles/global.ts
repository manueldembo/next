import { globalCss } from ".";

export const globalStyle = globalCss({
    '*': {
        padding: 0,
        margin: 0,
    },
    body: {
        background: '$gray900',
        color: "$gray100",
        '-webkit-font-smoothing': 'antialiased',
    },
    'body, button, textarea, input': {
        fontFamily: 'Roboto',
        fontWeight: 400,
    }

})