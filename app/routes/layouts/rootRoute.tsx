import { isRouteErrorResponse, Outlet, useRouteError } from 'react-router'

const rootRoute = () => {
    return (
        <Outlet />
    )
}


const ErrorBoundary = () => {
    const error = useRouteError();

    // React Router has a special type for loader/action thrown responses
    if (isRouteErrorResponse(error)) {
        return (
            <div style={{ padding: "2rem" }}>
                <h1>{error.status} - {error.statusText}</h1>
                <p>{error.data || "Something went wrong."}</p>
            </div>
        );
    }

    // Generic JS error
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Oops!</h1>
            <p>{(error as Error)?.message ?? "Unknown error occurred."}</p>
        </div>
    );
}

export { ErrorBoundary };
export default rootRoute;
