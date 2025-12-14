import Button from "./Button";

const Error = ({msg = '❌ Error inesperado', message, onTryAgain}) => {
    const displayMessage = message || msg;
    return (
        <div className="error-container">
            <h2>{displayMessage}</h2>
            <Button text='Reintentar' onClick={onTryAgain} disabled={!onTryAgain}/>
        </div>
    )
}

export default Error;