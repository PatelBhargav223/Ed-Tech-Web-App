import { render, screen, act, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Provider } from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";
import App from "./App";
import store from "./store/store"; // Relative path
import { vi } from "vitest";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("App", () => {
  it("renders without crashing", async () => {
    const mockNavigate = vi.mocked(useNavigate).mockReturnValue(vi.fn());
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );
    });
    await waitFor(
      () => {
        const element = screen.getByText(/The modern StudyNotion/i);
        expect(element).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
