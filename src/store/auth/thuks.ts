import { checkingCredentials } from "."
import { Dispatch } from "@reduxjs/toolkit";

export const checkingAuthentication = ()=>{
    return async(dispatch: Dispatch)=>{
        dispatch(checkingCredentials);


    }
}