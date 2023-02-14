import {useRouteError} from 'react-router-dom';
import error404Image from '.././assests/images/404page.png';

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <img className='bg-gray-100 object-contain w-screen h-screen' src={error404Image} alt="Not found" />
        </div>
    );
};

export default Error;