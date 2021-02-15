const Home = () => {

const handleClick = (e) => {
    console.log(e);
}

const handleClickAgain = (name, e) => {
    console.log('Yo, planet. This is ' + name);
    console.log(e.target);
}
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('Rocky', e)}>Another Click</button>
        </div>
     );
}
 
export default Home;