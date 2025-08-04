import { fireEvent, render, screen } from "@testing-library/react-native";
import FooterTextTouchable from "../../../src/components/ui/FooterTextTouchable";
import { ViewStyle } from "react-native";


describe("FooterTextTouchable test cases",()=>{
    it("should render with correct text and style",()=>{
        const text="Footer text"
        const styles:ViewStyle={
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"row",
            gap:10
        }

        render(<FooterTextTouchable onPress={()=>{}} text={text} style={styles}/>)
        const buttonText=screen.getByText(text)
        expect(buttonText).toBeTruthy()
        expect(screen.getByTestId("footer-view")).toHaveStyle(styles)
    })
})