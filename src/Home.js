const Home = () => {

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

return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('Rocky', e)}>Another Click</button>
            <button onClick={yetAnotherCLick}>Yet Another</button>
        </div>
     );
}
 
export default Home;