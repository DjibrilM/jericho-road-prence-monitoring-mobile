
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import React from "react";


const queryClient = new QueryClient()


const Providers = ({ children }: { children: React.JSX.Element }) => {
    return (

        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>

    )
}

export default Providers