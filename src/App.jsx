import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Root from './components/Root';

const router =createBrowserRouter([
  {
   
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  }
])

export default function App() {

  return (
<>
<RouterProvider router={router} />

</>  )
}
