import SearchInput from '../../components/common/searchInput';
import CountryCard from '../../components/countryCard';
import Select from '../../components/common/select';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../../context';

const Home = () => {
    const { countries } = useContext(context);

    return(
        <div className='py-1 py-md-3 px-3 px-md-5 d-flex flex-column justify-content-center w-100'>
            
            <div className='w-100 row m-0 py-4'>
                <div className='p-0 col-md-5 col-12'>
                    <SearchInput placeholder='serarch for a country...' />
                </div>
                <div className='p-0 col-md-4 col-7 offset-md-3 pt-md-0 pt-4'>
                    <Select options={['asia' , 'africa', 'amrica']}/>
                </div>
            </div>

            <div className='w-100 py-md-4 py-0'>
                <div className='row m-0 w-100 justify-content-between'>
                    {countries.map(e => {
                    return(
                        <div key={e.title} className='col-md-3 col-12 py-md-4 px-md-4 px-0 py-3 cursor-pointer'>
                                <Link style={{textDecoration:'unset' ,color : 'unset'}} to={`/detail/${e.title}`}>
                                    <CountryCard data={e}/>
                                </Link>
                        </div>
                    )
                    })}

                </div>
            </div>

        </div>
    )
}
export default Home;