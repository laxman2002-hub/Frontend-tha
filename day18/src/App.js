import './App.css';
import React from "react";
import Card from "./components/Card"

function App() {

    return (
        <div>
            <h1>Chess Board</h1>
            <div className="head">
                {
                    [...Array( 64 )].map( ( item, index ) => {
                        let color = "white"
                        if ( (!((index/ 8)&1) && !(index & 1)) || (((index/ 8)&1) && (index &1 )) ) {
                            color = "black"
                        }
                        return (
                            <Card color={color} />
                        )
                    } )

                }
            </div>
        </div>
    );
}

export default App;