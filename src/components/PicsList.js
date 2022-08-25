import React from 'react';
import './PicsList.css';

export default function PicsList(props) {
    
    const images = props.pics.map(({alt_description , id , urls}) =>{
        return (
        <img className='pic' alt={alt_description} key={id} src={urls.regular} />
        );
    })

  return <div className='Pics-list'>{images}</div>;
}