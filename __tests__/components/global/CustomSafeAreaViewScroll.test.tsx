import { fireEvent, render } from "@testing-library/react-native";
import CustomSafeAreaScrollView from "../../../src/components/global/CustomSafeAreaViewScroll";
import { Text } from "react-native";


describe("CustomSafeAreaViewScroll", () => {
    it("should render correctly", () => {
        const { getByText } = render(<CustomSafeAreaScrollView>
            <Text>Testing Text</Text>
        </CustomSafeAreaScrollView>);
        expect(getByText("Testing Text")).toBeTruthy();
    });
});