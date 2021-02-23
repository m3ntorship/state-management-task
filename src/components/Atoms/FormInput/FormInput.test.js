import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormInput from "./FormInput";
describe("FromInput", () => {
  it("renders FormInput with ClickHandler", () => {
    const clickHandler = jest.fn();

    const { queryByTestId } = render(<FormInput clickHandler={clickHandler} />);

    // involved elements
    const input = queryByTestId("nile-input");

    // initially
    expect(input).toBeInTheDocument();
    expect(clickHandler).not.toBeCalled();

    // click the input
    userEvent.click(input);
    expect(clickHandler).toBeCalled();
  });

  it("renders FormInput focused mode", () => {
    const { queryByTestId } = render(<FormInput />);

    // involved elements
    const input = queryByTestId("nile-input");
    const inputIcon = queryByTestId("nile-error-icon");
    const inputWrapper = queryByTestId("nile-input-wrapper");

    // initially
    expect(input).toBeInTheDocument();

    // focus
    userEvent.click(input);
    expect(inputIcon).toHaveClass("block");

    // blur
    userEvent.click(inputWrapper);
    expect(inputIcon).toHaveClass("hidden");
  });

  describe("FromInput[variants]", () => {
    it("renders FormInput with variant [error]", () => {
      const { queryByTestId } = render(<FormInput variant="error" />);

      // involved elements
      const input = queryByTestId("nile-input");

      // initially
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("data-variant", "error");
    });
    
    it("renders FormInput with variant [default]", () => {
      const { queryByTestId } = render(<FormInput />);

      // involved elements
      const input = queryByTestId("nile-input");

      // initially
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("data-variant", "default");
    });

    it("renders FormInput with variant [success]", () => {
      const { queryByTestId } = render(<FormInput variant="success" />);

      // involved elements
      const input = queryByTestId("nile-input");

      // initially
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("data-variant", "success");
    });
  });
});
