import {createRoot} from 'react-dom/client';
import HelloWorld from '../hello-world/HelloWorld.jsx';
import {StrictMode} from 'react';
import Container from '../hello-world/Container.jsx';
import TodoList from './TodoList.jsx';
import Table from '../table/Table.jsx';
import AlertButton from '../button/AlertButton.jsx';
import MyButton from '../button/MyButton.jsx';

createRoot(document.getElementById('root'))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
                <Table/>
                <AlertButton text="Click Me" message="Maneh Klick Urang"/>
                <MyButton text="Smash Me" onSmash={() => alert("You Smash Me")}/>
                <MyButton text="Hit Me" onSmash={() => alert("You hit Me")}/>    
            </Container>
        </StrictMode>
    );