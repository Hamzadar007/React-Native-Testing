import { fireEvent, render } from "@testing-library/react-native";
import OnboardItem from "../../../src/components/global/OnboardItem";


describe("Onboarding screen test",()=>{
    const mockFirstPress=jest.fn()
    const mockSecondPress=jest.fn()
    const buttonTitleFirst="FirstButton"
    const buttonTitleSecond="SecondButton"
    const title="Title"
    const subtitle="Subtitle"
    const imageSource={uri:"https://via.placeholder.com/150"}

    afterEach(()=>{
        jest.clearAllMocks()
    })
    it("Should render correctly with one button",()=>{
        const {getByText,getByTestId}=render(<OnboardItem 
        title={title}
        subtitle={subtitle}
        imageSource={imageSource}
        buttonTitleFirst={buttonTitleFirst}
        onPressFirst={mockFirstPress}
        />)

        expect(getByText(title)).toBeTruthy()
        expect(getByText(subtitle)).toBeTruthy()
        expect(getByText(buttonTitleFirst)).toBeTruthy()
        expect(getByTestId("background-image")).toBeTruthy()
        expect(getByTestId("background-image").props.source).toEqual(imageSource)
        fireEvent.press(getByText(buttonTitleFirst))
        expect(mockFirstPress).toHaveBeenCalled()
        expect(getByText(buttonTitleFirst)).toBeTruthy()
    })
    it("Should render correctly with two button",()=>{
        const {getByText,getByTestId}=render(<OnboardItem 
        title={title}
        subtitle={subtitle}
        imageSource={imageSource}
        buttonTitleFirst={buttonTitleFirst}
        onPressFirst={mockFirstPress}
        buttonTitleSecond={buttonTitleSecond}
        onPressSecond={mockSecondPress}
        />)

        expect(getByText(title)).toBeTruthy()
        expect(getByText(subtitle)).toBeTruthy()
        expect(getByText(buttonTitleFirst)).toBeTruthy()
        expect(getByTestId("background-image")).toBeTruthy()
        expect(getByTestId("background-image").props.source).toEqual(imageSource)
        fireEvent.press(getByText(buttonTitleFirst))
        expect(mockFirstPress).toHaveBeenCalled()
        expect(getByText(buttonTitleFirst)).toBeTruthy()
        expect(getByText(buttonTitleSecond)).toBeTruthy()
        fireEvent.press(getByText(buttonTitleSecond))
        expect(mockSecondPress).toHaveBeenCalled()
        
    })
})