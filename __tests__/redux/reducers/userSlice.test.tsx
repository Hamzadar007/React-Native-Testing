import { loginUser, registerUser, selectUser, setUser } from "../../../src/redux/reducers/userSlice"
import { RootState, store } from "../../../src/redux/store"


jest.mock("redux-persist",()=>{
    const requireActual=jest.requireActual("redux-persist")

    return {
        ...requireActual,
     persistStore:jest.fn().mockReturnValue({})
    }
})

describe("Redux persist",()=>{

    it("Check initial state",()=>{
        const initialState=store.getState() as RootState
        expect(selectUser(initialState)).toBeNull()
    })


    it("Check user state",()=>{
        const user={name:"Hamza dar",email:"hamzadar535@gmail.com"}
        store.dispatch(setUser(user))
        const currentState=store.getState() as RootState
        expect(selectUser(currentState)).toEqual(user)
    })
})


describe("Register user thunk",()=>{

    it("Register user successfully",async()=>{
        const user={name:"Hamza dar",email:"hamzadar535@gmail.com"}
        const action=await store.dispatch(registerUser(user))
        const currentUser=store.getState() as RootState
        expect(action.type).toBe(registerUser.fulfilled.type)
        expect(selectUser(currentUser)).toEqual(user)
    })


    it("Check user null state",async()=>{
        const user={}
        let action = await store.dispatch(registerUser(user))
        const currentState=store.getState() as RootState
        expect(action.type).toBe(registerUser.rejected.type)
        expect(selectUser(currentState)).toBeNull()
    })
})


describe("Login user thunk",()=>{

    it("Register user successfully",async()=>{
        const user={email:"hamzadar535@gmail.com",password:"12345678"}
        const action=await store.dispatch(loginUser(user))
        const currentUser=store.getState() as RootState
        expect(action.type).toBe(loginUser.fulfilled.type)
        expect(selectUser(currentUser)).toEqual(user)
    })


    it("Check user login  failed",async()=>{
       
 
            const user={}
          
            const action=await store.dispatch(loginUser(user))
            console.log(action.type,action.payload);
            
            const currentState=store.getState() as RootState
            expect(action.type).toBe(loginUser.rejected.type)
            expect(selectUser(currentState)).toBeNull()
  
    })
})