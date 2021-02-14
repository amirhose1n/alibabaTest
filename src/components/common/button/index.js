import Style from './style';
const SearchInput = (props) => {
    const {text, icon, classname , minHeight = 46 } = props;
    return(
        <Style>
            <div className={classname}>
                <button style={{minHeight}} className='px-3 box-shadow-default radius-5 d-flex align-items-center px-4' {...props}>
                    {icon}
                    <p className='m-0'>
                        {text}
                    </p>
                </button>
            </div>
        </Style>
    )
}

export default  SearchInput;
