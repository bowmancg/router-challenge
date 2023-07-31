import { RouterProvider } from 'react-router';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage'
import EventDetailPage from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import EventsRoot from './pages/EventsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events', element: <EventsRoot />, children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          { path: ':id', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':id/edit', element: <EditEventPage /> }
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
