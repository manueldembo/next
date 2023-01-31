import { styled } from "..";

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',

    maxWidth: 1180,
    margin: '0 auto',
})

export const ImageContainer = styled('div', {
    width: '100%',
    padding: '0.25rem',
    height: 656,
    background: 'linear-gradient(180deg, #1ee483 0%, #7465d4 100%)',
    borderRadius: 8,
    maxWidth: 576,

    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    },
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green300',
    },

    p: {
        marginTop: '1.5rem',
        color: '$gray300',
        lineHeight: 1.6,
        fontSize: '$md',
    },

    button: {
        marginTop: 'auto',
        border: 0,
        borderRadius: 8,
        background: '$green500',
        fontWeight: 'bold',
        cursor: 'poiter',
        padding: '1.25rem',
        color: '$white',
        fontSize: '$md',

        '&:hover': {
            backgroundColor: '$green300',
        }
    },
})