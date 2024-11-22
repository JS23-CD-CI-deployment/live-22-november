import { render, screen, fireEvent } from "@testing-library/react";
import { useLocation, useNavigate, MemoryRouter } from "react-router-dom";
import { describe } from "vitest";
import { vi } from "vitest";
import Buy from "./Buy";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom"); // Importera react router dom
  return {
    ...actual, // Behåll alla vanliga exports
    useLocation: vi.fn(), // Mocka endast useLocation
    useNavigate: vi.fn(),
  };
});

describe("Buy", () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    // Mocka useNavigate så vi kan kontrollera om den anropas korrekt
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
  });

  it("should display event details when eventInfo is available", () => {
    const mockEvent = {
      state: {
        event: {
          name: "Pelle trubadur",
          where: "Puben på hörnet",
          price: 119,
          when: {
            date: "11 Apr",
            from: "21:00",
            to: "23:00",
          },
        },
      },
    };

    vi.mocked(useLocation).mockReturnValue(mockEvent);

    render(
      <MemoryRouter>
        <Buy />
      </MemoryRouter>
    );

    expect(
      screen.getByText("You are about to score some sweet tickets to")
    ).toBeInTheDocument();
    expect(screen.getByText("Pelle trubadur")).toBeInTheDocument();
    expect(screen.getByText("11 Apr 21:00 - 23:00")).toBeInTheDocument();
    expect(screen.getByText("@ Globen")).toBeInTheDocument();
    expect(screen.getByText("119 sek")).toBeInTheDocument();
  });

  it("should display an message when eventInfo is not available", () => {
    const mockEvent = {
      state: {
        event: {
          name: "Pelle trubadur",
          where: "Puben på hörnet",
          price: 119,
          when: {
            date: "11 Apr",
            from: "21:00",
            to: "23:00",
          },
        },
      },
    };

    vi.mocked(useLocation).mockReturnValue(mockEvent);

    render(
      <MemoryRouter>
        <Buy />
      </MemoryRouter>
    );

    const button = screen.getByText("Take my money!");
    fireEvent.click(button);

    // Kontrollera att navigate anropades med rätt argument
    expect(mockNavigate).toHaveBeenCalledWith("/confirmation", {
      state: { event: mockEvent.state.event },
    });
  });
});
