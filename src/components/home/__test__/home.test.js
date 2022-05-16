import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../home';
import renderer from 'react-test-renderer';

it("renders home section", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Home></Home>, div);
})

it("Match snapshot", ()=>{
    const home = renderer.create(<Home></Home>);
    expect(home).toMatchSnapshot();
})