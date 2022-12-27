import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import RouteLayout from './components/layouts/RouteLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<RouteLayout />}>
        <Route index element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
