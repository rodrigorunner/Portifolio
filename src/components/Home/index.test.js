import { render, screen } from "@testing-library/react";
import Home from "./index";

test('If name exists', () => {
    render(<Home />)
    const textEl = screen.getByText(/rodrigo silva regis/i)
    expect(textEl)
})