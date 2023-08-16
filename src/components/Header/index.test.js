import { render, screen } from "@testing-library/react";
import Header from ".";

test('If name exists', () => {
    render(<Header name={'Rodrigo Silva Regis'} />)
    const textEl = screen.getByText(/rodrigo silva regis/i)
    expect(textEl)
})