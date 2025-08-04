import { fireEvent, render } from "@testing-library/react-native";
import CustomButton from "../../../src/components/ui/CustomButton";


describe("CustomButton Test cases",()=>{


    const mockOnPress=jest.fn()
    const title="Testing title"
    const backgroundColor="#000"
    const textColor="#fff"

    afterEach(()=>{
        jest.clearAllMocks()
    })

    it("Should render correctly with loading true",()=>{
        const {getByText,getByTestId}=render(<CustomButton 
        onPress={mockOnPress}
        title={title}
        backgroundColor={backgroundColor}
        textColor={textColor}
        loading={true}
        />)
      fireEvent.press(getByTestId("custom-button"))
      expect(mockOnPress).toHaveBeenCalled()
      expect(getByTestId("activity-indicator")).toBeOnTheScreen()

    })

    it("Should render correctly with loading true test color",()=>{
        const {getByText,getByTestId}=render(<CustomButton 
        onPress={mockOnPress}
        title={title}
        backgroundColor={backgroundColor}
     
        loading={true}
        />)
      fireEvent.press(getByTestId("custom-button"))
      expect(mockOnPress).toHaveBeenCalled()
      expect(getByTestId("activity-indicator")).toBeOnTheScreen()

    })

    it("Should render correctly with loading false",()=>{
        const {getByText,getByTestId}=render(<CustomButton 
        onPress={mockOnPress}
        title={title}
     
       
        />)
      fireEvent.press(getByTestId("custom-button"))
      expect(mockOnPress).toHaveBeenCalled()
     
       expect(getByText(title)).toBeTruthy()
    })





})