import { css } from 'glamor';

let skillsStyles = (rating) => css({
    fontSize: '20px',
    opacity: `${rating === 5 ? 1 : (rating + 4)/10}`,
    border: '1px solid #fe3301',
    color: 'white',
    backgroundColor: '#fe3301',
    padding: '6px 15px',
    borderRadius: '10px',
    transition: 'transform .2s',
    margin: '10px',
    ':hover': {
        transform: 'scale(1.2)',
        cursor: 'pointer'
    },
})

let skillsContainerStyles = css({
    display: 'flex',
    padding: '70px',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    boxShadow: '0px -3px 10px rgba(0 0 0 / 40%)',
    '@media screen and (max-width: 720px)': {
        backgroundColor: 'antiquewhite'
    }
})

export { skillsStyles, skillsContainerStyles }