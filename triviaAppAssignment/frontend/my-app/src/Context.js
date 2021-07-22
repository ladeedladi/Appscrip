import { createContext,useState } from "react";

export const AppContext=createContext()


function AppContextProvide({children}){
    const [name,setName]=useState('')
   return(
       <AppContext.Provider value={{name,setName}}>
           {children}
       </AppContext.Provider>
   )

}

export default AppContextProvide