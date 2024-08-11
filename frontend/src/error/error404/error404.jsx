import { Helmet } from "react-helmet";

const Error404 = () => {
    return (
        <>
            <Helmet>
                <title>404 Error</title>
            </Helmet>
            <div>404 Page not Found</div>
        </>
    )
}

export default Error404;