import { render, screen } from "@testing-library/react";
import Tech from ".";

test('Tech Component', () => {
    render(<Tech />)
    const textEl = screen.getByText(/frontend/i)
    expect(textEl)
})