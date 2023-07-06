import React from 'react';
import styled from 'styled-components'

const TextH3 = styled.h3`
color: blue;
`;
const BackDiv = styled.div`
background-color: black
`;
const ColorP = styled.p`
color: white
`;
const NasaPhoto = (props) => {
    return (
        <BackDiv className ="nasa-photo-wrapper">
            <TextH3>{props.photo.title}</TextH3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <ColorP className = "explanation">{props.photo.explanation} </ColorP>
        </BackDiv>
    )
}

export default NasaPhoto;