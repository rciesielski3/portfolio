import { render, screen } from "@testing-library/react";
import PrivacyPolicy from "./PrivacyPolicy";

test("includes Google Play privacy policy essentials for apps and services", () => {
  render(<PrivacyPolicy />);

  expect(
    screen.getByRole("heading", { name: /privacy policy/i })
  ).toBeInTheDocument();
  expect(screen.getAllByText(/Adateo Rafał Ciesielski/i)).toHaveLength(1);
  expect(screen.getByText(/privacy point of contact/i)).toBeInTheDocument();
  expect(screen.getByText(/apps and related services/i)).toBeInTheDocument();
  expect(screen.queryByText(/Expo|React Native/i)).not.toBeInTheDocument();
  expect(screen.getByText(/We do not sell user data/i)).toBeInTheDocument();
  expect(screen.getByText(/Retention and deletion/i)).toBeInTheDocument();
  expect(screen.getByText(/Children and students/i)).toBeInTheDocument();
});
