import { fireEvent, render } from "@testing-library/react-native";
import CustomHeading from "../../../src/components/global/CustomHeading";
import { goBack } from "../../../src/utils/NavigationUtil";

//Mock goBack Function for jest

jest.mock("../../../src/utils/NavigationUtil", () => ({ 
  goBack:jest.fn()
}))

describe("CustomHeading", () => {
  it("should render correctly", () => {
    const title="Testing title"
    const { getByText } = render(<CustomHeading title={title}/>);
    expect(getByText(title)).toBeTruthy();
  });
  it("Should call goBack when press back button", () => {
    const title="Testing title"
    const { getByTestId } = render(<CustomHeading title={title}/>);

    fireEvent.press(getByTestId("back-button"));
    expect(goBack).toHaveBeenCalled()
  })
});