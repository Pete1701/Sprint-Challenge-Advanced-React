import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { render } from "@testing-library/react";
import Player from './Player';
// import renderer from 'react-test-renderer';
import * as rtl from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Player />, div);
  ReactDOM.unmountComponentAtNode(div);
});

afterEach(rtl.cleanup)  

it('Player component has props', () => {
    // const div = document.createElement('div');
    const comp = rtl.render(<Player />);
    expect(comp.props);
});