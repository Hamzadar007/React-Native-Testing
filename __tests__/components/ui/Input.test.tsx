import { act, fireEvent, render, screen } from "@testing-library/react-native";
import Input from "../../../src/components/ui/Input";

describe("Input test cases",()=>{
    const mockOnChangeText=jest.fn()
    const mockOnFocus=jest.fn()
    const mockOnBlur=jest.fn()
    const value="Test value"
    const placeholder="Test placeholder"
    const error="Test error"
    const disabled=false

    afterEach(()=>{
        jest.clearAllMocks()
    })

    it("should render correctly",()=>{
        render(<Input value="" onChangeText={mockOnChangeText} placeholder={placeholder}/>)
        const textInput= screen.getByTestId("textInput")
        expect(textInput).toBeTruthy()
    })
    
    it("should call onBlur onFocus correctly",()=>{
        render(<Input value="" onChangeText={mockOnChangeText} placeholder={placeholder} onBlur={mockOnBlur} onFocus={mockOnFocus}/>)
         fireEvent(screen.getByTestId("textInput"),"blur",{})
         fireEvent(screen.getByTestId("textInput"),"focus",{})
         expect(mockOnBlur).toHaveBeenCalledTimes(1)
         expect(mockOnFocus).toHaveBeenCalledTimes(1)
    })

    it("should render error text correctly",()=>{
        render(<Input value="" onChangeText={mockOnChangeText} placeholder={placeholder} onBlur={mockOnBlur} onFocus={mockOnFocus} error={error}/>)
         const errorText=screen.getByTestId("errorText")
         expect(errorText).toBeTruthy()
    })
    it("check pointer event disabled correctly",()=>{
        render(<Input value="" onChangeText={mockOnChangeText} placeholder={placeholder} disabled={true} />)
         const parent=screen.getByTestId("animatedView")
         expect(parent).toHaveStyle({
            pointerEvents:"none"
         })
         const textInput=screen.getByTestId("textInput")
         expect(textInput.props.editable).toBe(false)
    })

    it("should call setState on focus",()=>{
        render(<Input value="" onChangeText={mockOnChangeText} placeholder={placeholder} onFocus={mockOnFocus}/>)
       act(()=>{
        fireEvent(screen.getByTestId("textInput"),"focus",{})
       })
       expect(mockOnFocus).toHaveBeenCalled()
    })

    it("should call onFocus when no function will passed",()=>{
        render(<Input value="" onChangeText={mockOnChangeText} placeholder={placeholder}/>)
       act(()=>{
        fireEvent(screen.getByTestId("textInput"),"focus",{})
       })
      
    })

    it("should call onBlur when no function will passed",()=>{
        render(<Input value="" onChangeText={mockOnChangeText} placeholder={placeholder}/>)
       act(()=>{
        fireEvent(screen.getByTestId("textInput"),"blur",{})
       })
      
    })
    
})