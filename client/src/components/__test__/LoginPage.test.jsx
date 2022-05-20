import { render } from '@testing-library/react';
import LoginPage from "../loginPage/LoginPage";

let getByTestId

beforeEach(() =>{
    const component = render(<LoginPage/>)
    getByTestId = component.getByTestId
})


test('btnLogIn render with correct text GO!', () => {
    expect(getByTestId('btnLogInTest').textContent).toBe('Go!')
})

test('input contains correct placeholder', () => {
    expect(getByTestId('textPassword').placeholder).toBe('Password')
})