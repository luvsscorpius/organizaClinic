import React, {createContext, useState} from "react";

export const OrganizaClinicContext = createContext()

const OrganizaClinicProvider = ({children}) => {
    console.log('teste')

    return (
        <OrganizaClinicContext.Provider>
            {children}
        </OrganizaClinicContext.Provider>
    )
}

export default OrganizaClinicProvider
