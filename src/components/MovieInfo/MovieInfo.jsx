import React from 'react'
import noPoster from '../../image/No_image_poster.png'
import {
    Container,
    Title,
    UserScore,
    InfoBlock,
    Overview,
    OverviewInfo,
    Genres,
    GenresInfo,
    ImgWrap,
  } from '../MovieInfo/MovieInfo.styled';

export const MovieInfo = ({
    MovieInfo: {poster_path, title, vote_average, genres, overview},

}) =>{
    return (
        <Container>
            <ImgWrap>
            <img src={poster_path !==null
             ? `https://image.tmdb.org/t/p/w500/${poster_path}`
             : noPoster
            }
            alt={title}/>
            </ImgWrap>
            <InfoBlock>
                <Title>{title}</Title>
                <UserScore>
                    User Score: <p>{Math.round(vote_average * 10)}%</p>
                </UserScore>
                <Overview>Overview</Overview>
                <OverviewInfo>{overview}</OverviewInfo>
                <Genres>Genres</Genres>
                <GenresInfo>{genres.map(genre => genre.name).join(' , ')}</GenresInfo>
            </InfoBlock>
        </Container>
    )
}