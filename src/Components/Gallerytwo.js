import { useState } from 'react';
import { sculptureList } from './Data';

export default function Gallerytwo() {
    const [index, setIndex] = useState(0);
   
    function handleNext() {
        if (index < sculptureList.length - 1) {
            setIndex(index + 1);
        }
    }

    function handlePrev() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    let sculpture = sculptureList[index];

    return (
        <div>
            <button onClick={handlePrev} disabled={index === 0}>Previous</button>
            <button onClick={handleNext} disabled={index === sculptureList.length - 1}>Next</button>

            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img 
                src={sculpture.url} 
                alt={sculpture.alt} 
            />
            <p>
                {sculpture.description}
            </p>
        </div>
    );
}
