import { useContext } from 'react';
import Context from '../../../context';
import Moon from '../../customIcons/moon'
import Style from "./style";



const Header = () => {
    const { themeMode , setMode } = useContext(Context);

    const handleModeClick = () => {
        themeMode === 'dark' ? setMode('light') : setMode('dark');
    }

    return(
        <Style>
            <div className='w-100 header-container box-shadow-default d-flex justify-content-center'>
                <div className='d-flex justify-content-between align-items-center py-4 px-3 px-md-5 w-100 m-0'>

                    <h3 className='m-0'>
                        where in the world
                    </h3>

                    <p className='m-0 cursor-pointer d-flex align-items-center' onClick={handleModeClick}>
                        <Moon className='moon-svg mr-2'/>
                        {
                            themeMode === 'dark' ? 'Light Mode' : 'Dark Mode' 
                        }
                    </p>
                    
                </div>
            </div>
        </Style>

    )
}

export default Header;