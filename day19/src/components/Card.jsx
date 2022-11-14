import { useState } from "react";

var Card = () => {
    var [count, setCount] = useState( 0 );
    return (
        <button className="button" onClick={() => { setCount( ( count += 1 ) ); }}>
            {count}
        </button>

    );
};

export default Card;