import { PageNames } from "router/paths"
import { Link } from '../ErrorPage/ErrorPage.styled';

export const ErrorPage = () => {
    return (
        (<div>PageError</div>),
        (<Link to={PageNames.homepage}> Go to Homepage</Link>)
    )
}