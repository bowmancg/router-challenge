import { RouterProvider } from 'react-router';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage'
import EventDetailPage, { loader as eventDetailLoader } from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import EventsRoot from './pages/EventsRoot';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events', element: <EventsRoot />, children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          { path: ':id', id: 'event-detail', loader: eventDetailLoader, children: [
            { index: true, element: <EventDetailPage /> },
            { path: 'edit', element: <EditEventPage /> }
          ] },
          { path: 'new', element: <NewEventPage /> },
        ]
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
