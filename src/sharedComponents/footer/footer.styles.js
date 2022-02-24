import { css } from 'glamor';

let footerStyles = css({
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    ' div': {
        padding: '20px',
        ' i': {
            transition: 'transform .2s',
        ':hover': {
            transform: 'scale(1.5)',
            cursor: 'pointer'
        }
        }
    }
})

let linkStyles = css({
    display: 'flex',
    fontSize: '30px',
    justifyContent: 'space-evenly'
})

let contactStyles = css({
    display: 'flex',
    fontSize: '20px',
    alignItems: 'center',
    flexDirection: 'column',
    ' div': {
        padding: '5px',
        fontSize: '15px',
        color: 'antiquewhite',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        ' span': {
            padding: '5px 0px'
        }
    }
})

let copyrightStyles = css({
    color: 'grey',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
})

export { footerStyles, linkStyles, copyrightStyles, contactStyles }