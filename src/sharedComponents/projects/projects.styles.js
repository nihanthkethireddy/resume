import { css } from 'glamor'

const cardStyles = css({
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    width: '30%',
    minWidth: '350px',
    margin: '20px 0px',
    ' img': {
        width: '100%'
    },
    ' i': {
        fontSize: '200px',
        color: 'white',
        margin: 'auto'
    },
    ':hover': {
        boxShadow: '0 8px 20px 0 rgba(0,0,0,0.8)',
        cursor: 'pointer'
    }
})

const textStyles = css({
    backgroundColor: 'white',
    padding: '2px 16px'
})

const containerStyles = css({
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'antiquewhite',
    padding: '90px 35px',
    justifyContent: 'space-evenly',
    '@media screen and (max-width: 720px)': {
        backgroundColor: 'white',
        ' i': {
            color: 'antiquewhite'
        }
    }
})

export { cardStyles, textStyles, containerStyles }