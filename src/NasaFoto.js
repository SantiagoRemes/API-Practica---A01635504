import React, { useEffect, useState } from 'react'
import CardFoto from './CardFoto';

function NasaFoto() {
    const [nasaImage, setNasaImage] = useState(null);

    useEffect(() => {
            fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1")
            .then( (res) => res.json())
            .then((data)=> {
                console.log(data);
                setNasaImage(data);
            });
        }, []);
  
        return (
    <div>
        FotoNasa
        {nasaImage && 
            nasaImage.map( (item) => (
                <div key={item.date}>
                    <CardFoto url={item.url} title={item.title} width='50px' height='50px' />
                </div>
        ))}
    </div>
  );
}

export default NasaFoto