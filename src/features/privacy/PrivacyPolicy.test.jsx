import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";

const renderPrivacyPolicy = () =>
  render(
    <MemoryRouter>
      <PrivacyPolicy />
    </MemoryRouter>
  );

test("includes Google Play privacy policy essentials for apps and services", () => {
  renderPrivacyPolicy();

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

test("keeps the contact call to action outside the paragraph copy", () => {
  const { container } = renderPrivacyPolicy();

  const contactLink = screen.getByRole("link", { name: /open contact form/i });

  expect(contactLink).toHaveAttribute("href", "/contact");
  expect(container.querySelector("p .privacy-contact-link")).not.toBeInTheDocument();
});
