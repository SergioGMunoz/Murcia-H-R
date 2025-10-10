import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';

export const Icons = () => {
    return (
        <div className="flex-container">
            <div className="icon">
                <FavoriteOutlinedIcon className="mui-icon" />
            </div>
            <div className="icon">
                <ShoppingCartOutlinedIcon className="mui-icon" />
            </div>
            <div className="icon">
                <AccountCircleOutlinedIcon className="mui-icon" />
            </div>
            <div className="icon">
                <SearchIcon className="mui-icon" />
            </div>
        </div>
    );
}