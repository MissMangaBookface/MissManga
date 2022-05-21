import {fireEvent, render} from "@testing-library/react";
import OnlineUsers from "../onlineUsers/OnlineUsers";


let getByTestId

beforeEach(() =>{
    const component = render(<OnlineUsers/>)
    getByTestId = component.getByTestId
})


