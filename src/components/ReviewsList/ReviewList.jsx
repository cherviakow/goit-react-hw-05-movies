import React from 'react'
import { List, Item, Name, Review } from '../ReviewsList/ReviewList.styled';

export const ReviewList = ({reviews}) => {
    if(!reviews || !reviews.length){
        return <p>No information about reviews is avaliable</p>
    }
  return (
    <List>
        {reviews.map(({id, author, content}) =>{
            return (
                <Item key={id}>
                    <Name>Author: {author}</Name>
                    <Review>{content}</Review>
                </Item>
            )
        })}
    </List>
  )
}

// export default ReviewList;