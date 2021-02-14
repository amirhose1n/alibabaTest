import Style from "./style";


const CountryCard = ({data}) => {

    const { img , title , content } = data;

    return(
        <Style>
            <div className='country-card radius-5 d-flex flex-column'>
                    <div className='h-50 img-box'>
                        <img src={img} alt='img'/>
                    </div>
                    <div className='h-50 p-4'>
                        <h3 className='m-0 pb-4'>{title}</h3>
                        <div>
                            {content && content.map(e=> {
                                return(
                                    <p className='m-0' key={e.value}>
                                        {e.key}: <span>{e.value}</span>
                                    </p>
                                )
                            } )}
                        </div>
                    </div>
            </div>
        </Style>

    )
}

export default CountryCard;