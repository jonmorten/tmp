import { describe, expect, it } from "vitest";

import { render, screen, userEvent } from "./test/utils";
import App from "./App";

describe("App", () => {
  it("has a visible title", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(<App />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
  });
});
