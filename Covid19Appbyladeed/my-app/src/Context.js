import { createContext, useState } from "react";
export const AppContext=createContext()
//context api is used to make a state available to all its children by avoiding props drilling

export default function AppProvider({children}){
  //the AppProvider  will wrap the components to make access to the childrens the state is passed by value=state 
    const [datas,setData]=useState([])
return(
    <AppContext.Provider value={{datas,setData}}>
      {children}
    </AppContext.Provider>
)
}

