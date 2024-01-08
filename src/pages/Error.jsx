import Wrapper from '../assets/wrappers/ErrorPage';
import {Link, useRouteError} from 'react-router-dom';
import img from '../assets/not-found.svg';
const Error = () => {
    const error = useRouteError();
    console.log(error);
    if(error.status === 404) {
        return(
            <Wrapper>
                <div>
                    <img src={img} alt='not found' />
                    <h3>Ohh!</h3>
                    <p>Wer can't seem to find the page you are looking for</p>
                    <Link to='/'>back home</Link>
                </div>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
        <div>            
            <h3>Ohh!</h3>
            <p>Something went wrong</p>
            <Link to='/'>back home</Link>
        </div>
    </Wrapper>
    );
};
export default Error;