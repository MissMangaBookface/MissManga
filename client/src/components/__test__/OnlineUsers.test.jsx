import { render} from "@testing-library/react";
import OnlineUsers from "../onlineUsers/OnlineUsers";



let getByTestId

beforeEach(() =>{
    const component = render(<OnlineUsers/>)
    getByTestId = component.getByTestId
})

test('text test', () => {
    expect(getByTestId('onlineUser').textContent).toBe('  Online Users: ')
})

