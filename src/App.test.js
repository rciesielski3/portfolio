import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio home page", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /rafal ciesielski/i })).toBeInTheDocument();
  expect(screen.getAllByText(/quality engineering/i)[0]).toBeInTheDocument();
});
