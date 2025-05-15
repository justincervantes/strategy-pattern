import { render, screen, fireEvent } from "@testing-library/react";
import TemperatureConverter from "../../src/components/TemperatureConverter";

// Do not touch this file

describe("TemperatureConverter Integration Test", () => {
  test("32 degrees fahrenheit should log and show 0", async () => {
    // Arrange
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    render(<TemperatureConverter />);
    const input = screen.getByLabelText("Enter Temperature");
    const select = screen.getByRole("combobox");
    const checkbox = screen.getByLabelText("Enable Logging");
    const convertButton = screen.getByRole("button", { name: "Convert" });

    // Act
    fireEvent.click(checkbox);
    fireEvent.mouseDown(select);
    const option = screen.getByRole("option", {
      name: "Fahrenheit to Celsius",
    });
    fireEvent.click(option);
    fireEvent.click(convertButton);

    // Assert
    expect(consoleLogSpy).toHaveBeenCalledWith("0");
    expect(input).toHaveValue(32);
    expect(checkbox).toBeChecked();
    const resultText = await screen.findByText("0");
    expect(resultText).toBeInTheDocument();

    // Cleanup
    consoleLogSpy.mockRestore();
  });

  test("32 degrees fahrenheit should not log but show 0 celsius", async () => {
    // Arrange
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});
    render(<TemperatureConverter />);
    const input = screen.getByLabelText("Enter Temperature");
    const select = screen.getByRole("combobox");
    const checkbox = screen.getByLabelText("Enable Logging");
    const convertButton = screen.getByRole("button", { name: "Convert" });

    // Act
    fireEvent.mouseDown(select);
    const option = screen.getByRole("option", {
      name: "Fahrenheit to Celsius",
    });
    fireEvent.click(option);
    fireEvent.click(convertButton);

    // Assert
    expect(input).toHaveValue(32);
    expect(checkbox).not.toBeChecked();
    expect(consoleLogSpy).not.toHaveBeenCalled();
    const resultText = await screen.findByText("0");
    expect(resultText).toBeInTheDocument();

    // Cleanup
    consoleLogSpy.mockRestore();
  });

  test("100 degrees celsius should log and show 212 fahrenheit", async () => {
    // Arrange
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});
    render(<TemperatureConverter />);
    const input = screen.getByLabelText("Enter Temperature");
    const select = screen.getByRole("combobox");
    const checkbox = screen.getByLabelText("Enable Logging");
    const convertButton = screen.getByRole("button", { name: "Convert" });

    // Act
    fireEvent.change(input, { target: { value: 100 } });
    fireEvent.click(checkbox);
    fireEvent.mouseDown(select);
    const option = screen.getByRole("option", {
      name: "Celsius to Fahrenheit",
    });
    fireEvent.click(option);
    fireEvent.click(convertButton);

    // Assert
    expect(checkbox).toBeChecked();
    const resultText = await screen.findByText("212");
    expect(consoleLogSpy).toHaveBeenCalledWith("212");
    expect(resultText).toBeInTheDocument();

    // Cleanup
    consoleLogSpy.mockRestore();
  });

  test("100 degrees celsius should not log but show 212 fahrenheit", async () => {
    // Arrange
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});
    render(<TemperatureConverter />);
    const input = screen.getByLabelText("Enter Temperature");
    const select = screen.getByRole("combobox");
    const checkbox = screen.getByLabelText("Enable Logging");
    const convertButton = screen.getByRole("button", { name: "Convert" });

    // Act
    fireEvent.change(input, { target: { value: 100 } });
    fireEvent.mouseDown(select);
    const option = screen.getByRole("option", {
      name: "Celsius to Fahrenheit",
    });
    fireEvent.click(option);
    fireEvent.click(convertButton);

    // Assert
    expect(checkbox).not.toBeChecked();
    expect(consoleLogSpy).not.toHaveBeenCalled();
    const resultText = await screen.findByText("212");
    expect(resultText).toBeInTheDocument();

    // Cleanup
    consoleLogSpy.mockRestore();
  });
});
