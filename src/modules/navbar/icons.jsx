import heartIcon from '../../assets/icons/akar-icons_heart.png';
import cartIcon from '../../assets/icons/ant-design_shopping-cart-outlined.png';
import accountIcon from '../../assets/icons/mdi_account-alert-outline.png';
import vectorIcon from '../../assets/icons/Vector.png';

export const Icons = () => {
    return (
        <div className="flex-container">
            <div className="icon">
                <img src={heartIcon} alt="Heart" />
            </div>
            <div className="icon">
                <img src={cartIcon} alt="Shopping Cart" />
            </div>
            <div className="icon">
                <img src={accountIcon} alt="Account" />
            </div>
            <div className="icon">
                <img src={vectorIcon} alt="Vector" />
            </div>
        </div>
    );
}