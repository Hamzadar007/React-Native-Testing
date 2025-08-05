
import { MMKV } from "react-native-mmkv";
import reduxStorage from "../../src/redux/storage";

jest.mock("react-native-mmkv",()=>{
    const mockSet=jest.fn()
    const mockGetString=jest.fn()
    const mockDelete=jest.fn()

    return {
        MMKV:jest.fn().mockImplementation(()=>({
            set:mockSet,
            getString:mockGetString,
            delete:mockDelete
        })),
        mockSet,
        mockGetString,
        mockDelete
    }
})


describe("storage test cases",()=>{
  
    let mockSet:jest.Mock;
    let mockGetString:jest.Mock
    let mockDelete:jest.Mock

    beforeEach(()=>{
       ( {mockSet,mockGetString,mockDelete}=require("react-native-mmkv"))
    })
     afterEach(()=>{
        jest.clearAllMocks()
     })

     it("set value",async()=>{
      const key="testKey"
      const value="Test value"
        await reduxStorage.setItem(key,value)
        expect(mockSet).toHaveBeenCalledWith(key,value)
     })

     it("get item value",async()=>{
        const key="testKey"
        const value="Test value"
        mockGetString.mockReturnValue(value)
         let result= await reduxStorage.getItem(key)
          expect(result).toBe(value)
          expect(mockGetString).toHaveBeenCalledWith(key)
       })
       it("remove item",async()=>{
        const key="testKey"
      
      
         await reduxStorage.removeItem(key)
         
          expect(mockDelete).toHaveBeenCalledWith(key)
       })
})