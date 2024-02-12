import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Loader } from "Loader/Loader"
import {PageNames} from 'router/paths'
import { Container, Header, Link } from '../SharedLayout/SharedLayout.styled';


export const SharedLayout = () => {
return (
    <Container>
        <Header>
            <Link to={PageNames.homePage}>Home</Link>
            <Link to={PageNames.movies}>Movies</Link>
        </Header>
        <Suspense fallback={<Loader/>}>
            <Outlet/>
        </Suspense>
    </Container>
)
}