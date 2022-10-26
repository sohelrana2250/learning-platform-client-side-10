
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Course from './components/Course/Course';
import AuthProvider from './AuthProvider/AuthProvider';
import CourseDetails from './components/CourseDetails/CourseDetails';
import DynamicAllCourseData from './components/DynamicAllCourseData/DynamicAllCourseData';
import Login from './components/Logain/Login';
import Register from './components/Register/Register';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import Blog from './components/BLOG/Blog';




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
          element: <CourseDetails></CourseDetails>,
          loader: (props) => {
            const CourseId = props.params.id;
            const CourseReplace = CourseId.replace(":", "")
            return fetch(`https://b610-lerning-platform-server-side-one.vercel.app/CourseDetails/${CourseReplace}`);
          }
        },
        {
          path: '/AllCourse/:id',
          element: <PrivateRouter><DynamicAllCourseData></DynamicAllCourseData></PrivateRouter>,
          loader: (props) => {
            const CourseId = props.params.id;
            const CourseReplace = CourseId.replace(":", "")
            return fetch(`https://b610-lerning-platform-server-side-one.vercel.app/CourseDetails/${CourseReplace}`);
          }
        },
        {
          path: '/login', element: <Login></Login>
        },
        {
          path: '/register', element: <Register></Register>
        },
        {
          path: '/blog', element: <Blog></Blog>
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
