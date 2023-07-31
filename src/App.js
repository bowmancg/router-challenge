import { RouterProvider } from 'react-router';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage'
import EventDetailPage from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'events/:id', element: <EventDetailPage /> },
      { path: 'events/new', element: <NewEventPage /> },
      { path: 'events/:id/edit', element: <EditEventPage /> }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
