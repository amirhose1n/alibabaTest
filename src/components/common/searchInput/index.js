import Style from './style';
import SearchIcon from '../../customIcons/search';
const SearchInput = (props) => {
    return(
        <Style>
            <div className='d-flex box-shadow-default radius-5'>

                <div className='search-box cursor-pointer'>
                    <SearchIcon/>
                </div>
                <input className='input-group px-3' {...props}/>
            
            </div>
        </Style>
    )
}

export default  SearchInput;
