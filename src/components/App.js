import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from '../resources/useLocation';

const App = () => {
    const { 
        lat,
        errorMessage 
    } = useLocation();
    
    let renderContent;
    if (errorMessage) {
        renderContent = <div>Error: {errorMessage}</div>
    } else if (lat) {
        renderContent = <SeasonDisplay>Error: {lat}</SeasonDisplay>
    } else {
        renderContent = <Spinner message="Please accept location request" />
    }

    return <div className="border red">{renderContent}</div>
}

export default App;