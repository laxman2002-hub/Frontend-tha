import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import './style.css';
function App() {
    return ( 
        <div className="App">
        <h1> Chess Board</h1> 
            <Card1 />
            <Card2 />
            <Card1 />
            <Card2 />
            <Card1 />
            <Card2 />
            <Card1 />
            <Card2 />
        </div>
    );
}

export default App;