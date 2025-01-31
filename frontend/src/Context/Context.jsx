import React, { createContext, useEffect, useState } from "react";

export const OrganizaClinicContext = createContext()

const OrganizaClinicProvider = ({ children }) => {
    const [medicos, setMedicos] = useState([])

    const contextValue = {medicos, setMedicos}

    return (
        <OrganizaClinicContext.Provider value={contextValue}>
            {children}
        </OrganizaClinicContext.Provider>
    )
}

export default OrganizaClinicProvider
