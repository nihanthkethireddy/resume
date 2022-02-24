import { css } from 'glamor';

let headerStyles = css({
    color: 'Red'
})

let navStyles = css({
    backgroundColor: 'antiquewhite',
    position: 'fixed',
    zIndex: 1,
    width: '100%',
    ' a': {
        float: 'left',
        transition: 'transform .2s',
        display: 'block',
        color: '#fe3301',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        fontSize: '17px',
        ':hover': {
            transform: 'scale(1.5)',
            cursor: 'pointer'
        },
        '.icon': {
            display: 'none'
        },
        '.active': {
            backgroundColor: '#fe3301',
            transform: 'none',
            color: 'white'
        },
        '@media screen and (max-width: 600px)': {
            ':not(:first-child)': {
                display: 'none'
            },
            '.icon': {
                float: 'right',
                display: 'block'
            }
        }
    },
    '@media screen and (max-width: 600px)': {
        '.responsive': {
            position: 'fixed',
            top: '0',
            zIndex: 1,
            ' a': {
                transition: 'none',
                ':hover': {
                    transform: 'none',
                    cursor: 'pointer',
                    backgroundColor: '#fe3301',
                    color: 'white'
                    
                },
                '.icon': {
                    position: 'absolute',
                    right: '0',
                    top: '0',
                },
                float: 'none',
                display: 'block',
                textAlign: 'left'
            }
        },
    }
})

export { headerStyles, navStyles }