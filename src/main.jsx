import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Root from './layout/Root'
import Routes from './Routes/Routes'
import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <RouterProvider router={Routes}>
        <Root />
      </RouterProvider>
    </ChakraBaseProvider>
  </React.StrictMode>,
)
