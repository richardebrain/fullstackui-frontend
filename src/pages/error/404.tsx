import { useRouteError } from "react-router-dom";
interface CustomError {
    message: string;
    statusText?: string;
}

export default function ErrorPage() {
    const error = useRouteError() as CustomError;
    console.error(error);


    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {/* clear the type error on the error object */}
                <i>{error && error.statusText || error?.message}</i>
            </p>
        </div>
    );
}