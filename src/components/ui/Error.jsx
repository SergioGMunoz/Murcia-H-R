import Button from "./Button";

const Error = ({msg= '❌ Error inesperado', onTryAgain}) => {
    return (
        <div className="error-container">
            <h2>{msg}</h2>
            <Button text='Reintentar' onClick={onTryAgain} disabled={!onTryAgain}/>
        </div>
    )
}

export default Error;