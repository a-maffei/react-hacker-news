import {useState, useEffect} from 'react';
import jolene from "./jolene.jpg"
import lafee from "./lafee.jpg"
import elio from "./elio.jpg"

export default function Doggo() {
    const [randomImage, setRandomImage] = useState('');
   
    const renderImage = () => {
        const Images = [
            {image: jolene},
            {image: lafee},   
            {image: elio}
        ];
        const randomImageIndex = Math.floor(Math.random() * Math.floor(3));
        return Images[randomImageIndex];
    };    
    
    useEffect(() => {
        setRandomImage(renderImage);
    });

    return (
        <div>
            <img src={renderImage()}/>
        </div>
    );
}