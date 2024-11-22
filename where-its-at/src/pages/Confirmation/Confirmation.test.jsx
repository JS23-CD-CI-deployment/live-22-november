import { render, screen } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import { describe } from "vitest";
import { vi } from "vitest";
import Confirmation from "./Confirmation";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom"); // Importera react router dom
  return {
    ...actual, // Behåll alla vanliga exports
    useLocation: vi.fn(), // Mocka endast useLocation
  };
});

describe("Confirmation", () => {
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

    render(<Confirmation />);

    expect(screen.getByText("Pelle trubadur")).toBeInTheDocument();
    expect(screen.getByText("Puben på hörnet")).toBeInTheDocument();
    expect(screen.getByText("11 Apr")).toBeInTheDocument();
    expect(screen.getByText("21:00")).toBeInTheDocument();
    expect(screen.getByText("23:00")).toBeInTheDocument();
  });

  it("should display an message when eventInfo is not available", () => {
    vi.mocked(useLocation).mockReturnValue({});

    render(<Confirmation />);

    expect(
      screen.getByText("Ingen biljett finns att visa")
    ).toBeInTheDocument();
  });
});
