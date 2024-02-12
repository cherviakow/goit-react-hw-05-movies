import React from 'react'
import noPoster from '../../image/No_image_poster.png'
import {
    List,
    Item,
    Image,
    Name,
    CastInfo,
    Character,
    CharacterInfo,
  } from '../CastList/CastList.styled';



  export const CastList = ({ cast }) => {
    if (!cast || !cast.length) {
      return <p>No information about cast is available</p>;
    } else
      return (
        <List>
          {cast.map(({ profile_path, cast_id, name, character }) => {
            return (
              <Item key={cast_id}>
                <Image
                  src={
                    profile_path !== null
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : noPoster
                  }
                  alt={name}
                />
                <CastInfo>
                  <Name>{name}</Name>
                  <Character>
                    Character: <CharacterInfo>{character}</CharacterInfo>
                  </Character>
                </CastInfo>
              </Item>
            );
          })}
        </List>
      );
  };
  
  export default CastList;