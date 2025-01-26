import React, { createContext, useEffect, useState } from "react";

export const OrganizaClinicContext = createContext()

const OrganizaClinicProvider = ({ children }) => {

    const contextValue = {}

    return (
        <OrganizaClinicContext.Provider value={contextValue}>
            {children}
        </OrganizaClinicContext.Provider>
    )
}

export default OrganizaClinicProvider
