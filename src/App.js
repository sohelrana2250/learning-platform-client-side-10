
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Course from './components/Course/Course';
import AuthProvider from './AuthProvider/AuthProvider';
import CourseDetails from './components/CourseDetails/CourseDetails';




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


        { path: '/courses', element: <Course></Course>, },

        {
          path: '/courseDetails/:id',
          element: <CourseDetails></CourseDetails>



          // loader: (props) => {
          //   const CourseId = props.params.id;
          //   const CourseReplace = CourseId.replace(":", "")
          //   return fetch(`https://b610-lerning-platform-server-side-one.vercel.app/CourseDetails/${CourseReplace}`);
          // }
        },
        {
          path: '/AllCourse/:id',
          element: <div>All Course Detais</div>
        }

      ]

    }

  ])
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
