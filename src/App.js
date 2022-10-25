
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Course from './components/Course/Course';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => { return fetch('https://b610-lerning-platform-server-side-one.vercel.app/CourseDetails') }
        },


        { path: '/courses', element: <Course></Course> }
      ]

    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
