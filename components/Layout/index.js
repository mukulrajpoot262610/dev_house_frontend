import React from 'react'
import { useLoadingWithRefresh } from '../../hooks/useLoadingWithRefresh'
import Loader from '../Loader'

const Layout = ({ children }) => {

    const { loading } = useLoadingWithRefresh()

    return (
        loading ? <Loader /> :
            <main>
                {children}
            </main>
    )
}

export default Layout