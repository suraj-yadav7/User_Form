import { useContext, createContext, useReducer } from "react";
import { reducer } from "./reducer";

const AppContext = createContext()

const initial = {
    fOneData:{},
    fTwoData:{},
    dateVal:""
}

const AppProvider= ({children})=>{
    const [state,dispatch] = useReducer(reducer, initial)
    
    // adding form one data
    const addFormOneData=(datas)=>{
        dispatch({
            type:"formonedata",
            payload:{
                data:datas
            }
        })
    }

    //adding form two data
    const addFormTwoData=(datas)=>{
        dispatch({
            type:"formtwodata",
            payload:{
                data:datas
            }
        })
    }

    //adding date value
    const addDateVal=(dateData)=>{
        dispatch({
            type:"dob",
            payload:{
                dobVal:dateData
            }
        })
    }

    // clearing initial state values
    const clearPreviousData = ()=>{
        dispatch({
            type:"clear"
        })
    }

    return(
        <AppContext.Provider value={{...state,addFormOneData,addFormTwoData ,addDateVal,clearPreviousData}}>{children}</AppContext.Provider>
    )
}

const useGlobalContext= ()=>{
    return useContext(AppContext)
}

export{useGlobalContext,AppProvider}