import React,{ useState} from 'react';

const MyContext = React.createContext();
export const Provider = ({value, children}) => {
    const [countries , setCountries] = useState([]);
    return <MyContext.Provider value={{countries:[countries], setCountries, ...value}}> 
            {children} 
           </MyContext.Provider>
};

export default MyContext;