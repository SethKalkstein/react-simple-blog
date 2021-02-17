import { useState } from 'react';

const Home = () => {
    // let count = 0;
    const [newHeading, setNewHeading] = useState('Home Page');
    const [count, setCount] = useState(0);

    const handleClick = (e) => {
        console.log(e);
    }

    const handleClickAgain = (name, e) => {
        console.log('Yo, planet. This is ' + name);
        console.log(e.target);
    }

    const yetAnotherCLick = () => {
        console.log("I'm a world, say hello to me");
    }

    const renameHeading = () => {
        setNewHeading(count % 2 == 0 ? 'Original Home Page ' + count  : 'New Home Page ' + count );
        setCount(count + 1);
    }

    return ( 
        <div className="home">
            <h2>{ newHeading }</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('Rocky', e)}>Another Click</button>
            <button onClick={yetAnotherCLick}>Yet Another</button>
            <button onClick={renameHeading}>Change heading</button>
        </div>
        );
}
 
export default Home;