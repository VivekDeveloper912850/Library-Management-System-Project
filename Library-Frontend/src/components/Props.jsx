
import React from 'react';

const DisplayNumber = (props) => {
    return <h1>{props.number + 10}</h1>;
}
const Greeting = (props) => {
    return <h1>Hello, {props.name}</h1>;
}

const DiplayArray = (props) => {
    return (
        <ul>
            {props.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

const DisplayObject = (props) => {
    return (
        <h1>
            {props.person.name} is {props.person.age} years old and lives at {props.person.address}
        </h1>
        
        
    );
}
const Button = (props) => {
    return <button onClick={props.handleClick}>Click me!!</button>
}


const Props = () => {
    const personData = {
        name: 'John Doe',
        age: 25,
        address: '123 Main St',
    };
    const showMessage = () => {
        alert('Button clicked!!!!!!!!!!!!!!');
    };
    return (
        <div>
            <Greeting name="John" />
            <Greeting name="Jane" />
            <Greeting name="Doe" />
            <DisplayNumber number = {10} />
            <DiplayArray items = {['Apple', 'Banana', 'Cherry']} />
            <DisplayObject person = {personData} />
            <Button handleClick={showMessage} />
                </div>
    );
}

export default Props;