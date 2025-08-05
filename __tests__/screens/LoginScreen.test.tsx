import { fireEvent, render } from "@testing-library/react-native"
import { Provider } from "react-redux"
import LoginScreen from "../../src/screens/LoginScreen"
import { persistor, store } from "../../src/redux/store"
import { loginUser } from "../../src/redux/reducers/userSlice"
import { navigate } from "../../src/utils/NavigationUtil"

jest.mock("../../src/utils/NavigationUtil",()=>({
    navigate:jest.fn()
}))

jest.mock("redux-persist",()=>({
    persistStore:jest.fn().mockReturnValue({
        purge:jest.fn()
    }),
    persistReducer:jest.requireActual("redux-persist").persistReducer
}))

describe('LoginScreen', () => {

    beforeEach(()=>{
        persistor.purge()
        jest.clearAllMocks()
    })

    it("should render correctly",()=>{
        const {getByText,getByPlaceholderText}=render(<Provider store={store}>
            <LoginScreen />
        </Provider>)
        expect(getByPlaceholderText('Email')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(getByText("Don't have an account? Sign Up")).toBeTruthy()
    })

    it("handle onChange press event",()=>{
        const {getByText,getByPlaceholderText,getByTestId}=render(<Provider store={store}>
            <LoginScreen />
        </Provider>)
        fireEvent(getByPlaceholderText("Email"),"changeText","hamzadar535@gmail.com")
        fireEvent(getByPlaceholderText("Password"),"changeText","12345")
        fireEvent(getByTestId("Login"),"press")
    })

    it("handle invalid input event",()=>{
        const {getByText,getByPlaceholderText,getByTestId}=render(<Provider store={store}>
            <LoginScreen />
        </Provider>)
        fireEvent(getByPlaceholderText("Email"),"changeText","hamza11")
        fireEvent(getByPlaceholderText("Password"),"changeText","")
        fireEvent(getByTestId("Login"),"press")
        expect(getByText("Please enter a valid email")).toBeTruthy()
        expect(getByText("Enter your password")).toBeTruthy()
    })
    it("handle error event",()=>{
        const {getByText,getByPlaceholderText,getByTestId}=render(<Provider store={store}>
            <LoginScreen />
        </Provider>)
        fireEvent(getByPlaceholderText("Email"),"changeText","")
        fireEvent(getByPlaceholderText("Password"),"changeText","")
        fireEvent(getByTestId("Login"),"press")
        expect(getByText("Please enter your email")).toBeTruthy()
        expect(getByText("Enter your password")).toBeTruthy()
    })
    it("successful login and navigate to next screen",async()=>{
        const {getByText,getByPlaceholderText,getByTestId}=render(<Provider store={store}>
            <LoginScreen />
        </Provider>)
        fireEvent(getByPlaceholderText("Email"),"changeText","hamzadar@gmail.com")
        fireEvent(getByPlaceholderText("Password"),"changeText","12345")
        fireEvent(getByTestId("Login"),"press")
        let action =await store.dispatch(loginUser({email:"hamzadar@gmail.com",password:"12345"}))
        expect(action.type).toBe(loginUser.fulfilled.type)
        expect(navigate).toHaveBeenCalledWith("HomeScreen")
    })
    it("navigate to register screen",async()=>{
        const {getByText,getByPlaceholderText,getByTestId}=render(<Provider store={store}>
            <LoginScreen />
        </Provider>)
        fireEvent.press(getByText("Don't have an account? Sign Up"))
        expect(navigate).toHaveBeenCalledWith("RegisterScreen")
    })
    it("handle error ",async()=>{
        const {getByText,getByPlaceholderText,getByTestId}=render(<Provider store={store}>
            <LoginScreen />
        </Provider>)
        fireEvent(getByPlaceholderText("Email"),"focus","")
        fireEvent(getByPlaceholderText("Password"),"focus","")
        fireEvent(getByTestId("Login"),"press")
  
    })
})