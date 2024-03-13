const reducer = (state,action)=>{
    switch(action.type){
        case "formonedata": 
        return{
            ...state,
            fOneData:action.payload.data
        };
        case "formtwodata": 
        return{
            ...state,
            fTwoData:action.payload.data
        };
        case "dob" :
            return{
                ...state,
                dateVal:action.payload.dobVal
            };
        case "clear":
            return{
                fOneData:{},
                fTwoData:{},
                dateVal:""
            }
    }
}

export {reducer}