import { render, screen } from "@testing-library/react";
import Project from ".";

test('Project Components', () => {
    render(<Project />)
    const textEl = screen.getByText(/reactjs frontend/i)
    expect(textEl)
})