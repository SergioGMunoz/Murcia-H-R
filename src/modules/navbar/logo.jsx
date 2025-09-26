import logo_img from './../../assets/img/Murcia-H-RLogo.png'

export const Logo = () => {
    return (
        <div className='flex-container'>
            <img class='logo' src={logo_img} alt='Murcia-H-RLogo.png'></img>
            <h2>Murcia H&R</h2>
        </div>
    );
}