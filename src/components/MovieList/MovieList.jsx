import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Container, List, Title } from '../MovieList/MovieList.styled';
import noPoster from '../../image/No_image_poster.png'

const MovieList = ({movies}) => {
    const location = useLocation();

    return (
        <Container>
          {movies.map(({ poster_path, title, id }) => {
            return (
              <List key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    src={
                      poster_path !== null
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : noPoster
                    }
                    alt={title}
                  />
                  <Title>{title}</Title>
                </Link>
              </List>
            );
          })}
        </Container>
      );
    };

    export default MovieList;