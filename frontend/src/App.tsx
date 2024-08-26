import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

/* Routes */
import Root from './routes/Root'
import Home from './routes/Home'
import ErrorPage from './routes/ErrorPage';

/* Browser Router */
const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
    ],
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
