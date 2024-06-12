import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Root from './layout/Root'
import Routes from './Routes/Routes'
import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react'
import AuthProvider from './AuthProvider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'


// Create a client
const queryClient = new QueryClient()


const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={Routes}>
            <Root />
            <Toaster />
          </RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ChakraBaseProvider>
  </React.StrictMode>,
)
