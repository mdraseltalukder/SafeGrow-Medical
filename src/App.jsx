import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Root from './components/Root';
import NotFound from './Pages/Page404';

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
      },
      {
        path:"/404",
        element:<NotFound/>
      },
     
    ]
  }
])

export default function App() {

  return (
<>
<RouterProvider router={router} />

</>  )
}
