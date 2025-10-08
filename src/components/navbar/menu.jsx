const Text = ({text}) => {
    return(
    <a><p className="menu-element">{text}</p></a>
);
}

export const Menu = () => {
    return(
        <div className="flex-container">
            <Text text='Hoteles'/>
            <Text text='Restaurantes'/>
        </div>
    )
}