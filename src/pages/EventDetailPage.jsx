import { Await, defer, json, redirect, useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";


function EventDetailPage() {
    const { event, events } = useRouteLoaderData('event-detail')

    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={event}>
                    {loadedEvent => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={events}>
                    {loadedEvents => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
        </>
    )
}

export default EventDetailPage

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id)

    if (!response.ok) {
        throw json({ message: 'Could not find details for this event.' }, {
            status: 500
        })
    } else {
        const resData = await response.json()
        return resData.event
    }
}

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        return json({ message: 'Could not find events.' }, { status: 500 })
    } else {
        const resData = await response.json()
        return resData.events
    }
}

export async function loader({ request, params }) {
    const id = params.id
    return defer({
        event: await loadEvent(id),
        events: loadEvents()
    })
}

export async function action({ params, request }) {
    const id = params.id
    const response = fetch('http://localhost:8080/events/' + id, {
        method: request.method,
    })

    if (!response.ok) {
        throw json({ message: 'Cannot delete event.' }, {
            status: 500
        })
    }
    return redirect('/events')
}