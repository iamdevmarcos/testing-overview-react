import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import App from "./App";

describe("testing math functions", () => {
  it("should add 1 to 2 and return 3", () => {
    const result = 1 + 2;

    expect(result).toBe(3);
  });
});

it("should multiply 5 by 3 and return 15", () => {
  const result = 5 * 3;

  expect(result).toBe(15);
});

it("should have a container div", () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(container.getElementsByClassName("container").length).toBeGreaterThan(
    0
  );
});

it("should render NotFound component when entering a non existing route", () => {
  const { container } = render(
    <MemoryRouter initialEntries={["/blablalba"]}>
      <App />
    </MemoryRouter>
  );

  const h2 = container.getElementsByTagName("h2")[0];
  expect(h2.innerHTML).toBe("Página não encontrada");
});

it("should go to the registration page when clicking on the register button", () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  act(() => {
    const registerBtn = container
      .getElementsByClassName("headerRight")[0]
      .getElementsByTagName("a")[0];

    registerBtn.click();
  });

  const registerTitle = screen.getByText("Cadastro de carro");
  expect(registerTitle).toBeInTheDocument();
});

export {};
