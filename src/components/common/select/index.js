import ChervonDown from '../../customIcons/chervonDown';
import Style from './style';

const Select = (props) => {
    const { options } = props;
    return(
        <Style>
            <select {...props} className="form-select input-group px-3 box-shadow-default radius-5">
                {options && options.map(e => <option key={e}> {e} </option>)}
            </select>
            <ChervonDown className='select-icon'/>
        </Style>
    )
}

export default  Select;
