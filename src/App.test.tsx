import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
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
    <MemoryRouter initialEntries={["/s"]}>
      <App />
    </MemoryRouter>
  );

  const h2 = container.getElementsByTagName("h2")[0];
  expect(h2.innerText).toBe("Página não encontrada");
});

export {};
