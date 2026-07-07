import './HelloWorld.css';

function HelloWorld() {
    const props = {
        text: "Hello, World from Spread Syntax!"
    }
    return (
        <div>
            <HeaderHelloWorld {...props}/>
            <ParagraphHelloWorld/>
        </div>
    );
}

function HeaderHelloWorld({text = "Ups, lupa kasih text!"}) {
    return (
        <h1 className="title"
            style = {{
                color: "red",
                backgroundColor: "aqua"
            }}>{text.toUpperCase()}</h1>
    );
}

function ParagraphHelloWorld(){
    const text = "Selamat belajar ReactJS!";
    return (
        <p className="content">{text.toLowerCase()}</p>
    );
} 



export default HelloWorld;