import React from 'react';
import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
    const error = useRouteError()
    
    let title = 'An Error occurred.'
    let message = 'Something went wrong.'

    if (error.status === 500) {
        message = error.data.message
    }

    if (error.status === 404) {
        title = 'Not found.'
        message = 'Could not find resource.'
    }

return (
    <>
    <MainNavigation />
     <PageContent title={title}>
        <p>{message}</p>
     </PageContent>
    </>
    );
}

export default ErrorPage;