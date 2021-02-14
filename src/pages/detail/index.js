import Forward from '../../components/customIcons/forward'
import Button from '../../components/common/button'
import context from '../../context'
import { useContext } from 'react'

const Detail = (props) => {
    const { match : { params : { id }}} = props;
    const { history } = props;
    const { countries } = useContext(context);
    const country = countries.find(e => e.title === id);
    const { img , title, content , extraContent} = country;

    return(
        <div className='py-1 py-md-3 px-3 px-md-5 d-flex flex-column justify-content-center w-100'>
            <div className='w-100 row m-0 py-5'>
                <Button onClick = {() => {history.goBack()}} icon={<Forward className='reverse mr-2'/>} text={'Back'} />
            </div>
            <div className='row'>
                <div className='col-md-5 col-12'>
                    <div className='w-100 box-shadow-default'>
                        <img src={img} alt='img' style={{maxWidth:'100%'}}/>
                    </div>
                </div>
                <div className='col-md-6 offset-md-1'>
                    
                    <div className='row w-100'>
                        <div className='col-md-12 pt-md-0 pt-4'>
                            <h3 className='m-0 font-weight-bold'> {title} </h3>
                        </div>
                    </div>
                    
                    <div className='row no-gutters w-100 py-3'>
                        
                        <div className='col-md-5'>
                            {content && content.map(e=> {
                                return(
                                    <p className='m-0 font-size-small' key={e.value}>
                                        {e.key}: <span className='opacity-8 font-size-small'>{e.value}</span>
                                    </p>
                                )
                            } )}
                        </div>
                        
                        <div className='col-md-5 offset-md-1 pt-md-0 pt-3'>
                            {extraContent && extraContent.map(e=> {
                                return(
                                    <p className='m-0 font-size-small' key={e.value}>
                                        {e.key}: <span className='opacity-8 font-size-small'>{e.value}</span>
                                    </p>
                                )
                            } )}
                        </div>

                    </div>
                    
                    <div className='row w-100'>
                        <div className='col-md-12 py-md-0 py-1'>
                            <div className='w-100 d-flex flex-md-row flex-column w-100 align-md-items-center'>
                           
                            <p className='m-0 font-size-medium font-weight-small'> Border Countries: </p>
                            <div className='d-flex align-md-items-center pl-md-3 pt-md-0 pt-3'>
                                <Button text='France' minHeight={35}/>
                                <Button text='Germany' minHeight={35} classname='pl-2'/>
                                <Button text='Netherland' minHeight={35} classname='pl-2'/>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default Detail;