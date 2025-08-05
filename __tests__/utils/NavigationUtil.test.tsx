import { CommonActions, createNavigationContainerRef, StackActions } from "@react-navigation/native"
import { goBack, navigate, navigationRef, prepareNavigation, push, resetAndNavigate } from "../../src/utils/NavigationUtil"


jest.mock("@react-navigation/native",()=>{
    let requireActualImplementation=jest.requireActual("@react-navigation/native")

    return {
        ...requireActualImplementation,
        createNavigationContainerRef:jest.fn(()=>({
            isReady:jest.fn().mockReturnValue(true),
            dispatch:jest.fn(),

        })),
        CommonActions:{
            reset:jest.fn(),
            navigate:jest.fn(),
            goBack:jest.fn(),
        },
        StackActions:{
            push:jest.fn()
        }
    }
})



describe("Navigation functions",()=>{
    it("Should navigate to the screen",async()=>{
        let routeName="TestRoute"
        let testParams={id:"abc"}
        await navigate(routeName,testParams)
        expect(CommonActions.navigate).toHaveBeenCalledWith(routeName,testParams)
    })
    it("Should goBack to the screen",async()=>{
      
        await goBack()
        expect(CommonActions.goBack).toHaveBeenCalled()
    })
    it("Should reset navigate to the screen",async()=>{
        let routeName="TestRoute"
     
        await resetAndNavigate(routeName)
        expect(CommonActions.reset).toHaveBeenCalledWith({
            index:0,
            routes:[{name:routeName}]
        })
    })

    it("Should push",async()=>{
        let routeName="TestRoute"
        let testParams={id:"abc"}
        await push(routeName,testParams)
        expect(StackActions.push).toHaveBeenCalledWith(routeName,testParams)
    })

    it("Navigation ready",async()=>{
      
      let result=  await prepareNavigation()
        expect(navigationRef.isReady).toHaveReturned()
    })
})





