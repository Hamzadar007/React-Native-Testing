import { render, waitFor } from "@testing-library/react-native"
import SplashScreen from "../../src/screens/SplashScreen"
import { prepareNavigation, resetAndNavigate } from "../../src/utils/NavigationUtil"


jest.mock("../../src/utils/NavigationUtil",()=>({
    prepareNavigation:jest.fn()  ,
    resetAndNavigate:jest.fn()
}))

describe("Splash screen",()=>{
    it("Should render correctly",()=>{
        const {getByTestId}=render(<SplashScreen />)
        expect(getByTestId("logo-image")).toBeTruthy()
        expect(getByTestId("loading-indicator")).toBeTruthy()
        
    })
    it("Should prepare navigation correctly",()=>{
        render(<SplashScreen />)
        expect(prepareNavigation).toHaveBeenCalled()
      
        
    })

    it("Should navigate to onBoard",async()=>{
        render(<SplashScreen />)
        await waitFor(()=>{
            expect(resetAndNavigate).toHaveBeenCalledWith("OnBoardingScreen")
        },{timeout:3500})
      
        
    })
})