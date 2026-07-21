import { useRouteError } from "react-router"

const GlobalError = () => {

    const error = useRouteError();

    return (
        <div>
            <h4>OOOPS !</h4>
            <p>{JSON.stringify(error)}</p>
        </div>
    )
}

export default GlobalError