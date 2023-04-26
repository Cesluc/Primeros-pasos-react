import PropTypes from 'prop-types'
// import { Fragment } from 'react';
// const newMessage = 'Cesar!!!';
// const newMessage = [0,1,2,3,4,5,6,7,8,9];


const newMessage = {
    message: 'Hola Mundo',
    title: 'Cesar',
};

const getMessage = () => `Hola ${newMessage.title}, feliz dia`

export const FirstApp = ({ title, subTitle, name }) => {

    // console.log(props);

    return (
        <>
            <h1>{title}</h1>
            {/* <h1>{getMessage()}</h1> */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: "No hay titulo",
    subTitle: 'No hay subtitulo',
    name: 'Cesar'
}