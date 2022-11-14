const Card =(props) => {     
    return (
        <div className="Card">
        <h1>{props.food}</h1>
        <h2>you have consumed {props.calory} cals today</h2>  
        </div>
    )
};

export default Card;
