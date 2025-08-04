import { render } from "@testing-library/react-native";
import App from "../App";

describe("App", () => {
  it("snapshot test", () => {
    const { toJSON } = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });
});