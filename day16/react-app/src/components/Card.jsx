const Card =() => {     // parent
    const Img = () =>{  // child
        return (
            <img src="https://images.firstpost.com/wp-content/uploads/2017/06/Sundar_Pichai_New.jpg" />
        );
    };
    return (
        <div className = "Card">
            <Img />
            <h2>Google CEO Sundar Pichai</h2>
            <p> This is a Card</p>
        </div>
    )
}

export default Card;
