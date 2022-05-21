import { render } from '@testing-library/react';
import {fireEvent, render} from "@testing-library/react";
import Main from "../../views/main/Main";

let getByTestId

beforeEach(() =>{
    const component = render(<Main/>)
    getByTestId = component.getByTestId
})



test('btnLogIn render with correct text GO!', () => {
    expect(getByTestId('btnTextEdit').textContent).toBe('Edit')
})

test('input contains correct placeholder', () => {
    expect(getByTestId('textArea').placeholder).toBe('write something...')
})