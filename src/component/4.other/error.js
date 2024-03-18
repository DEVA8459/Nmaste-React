import { useRouteError } from "react-router-dom"
const Error =() => {
    const err = useRouteError();
    //to see how to write for destructure
    console.log(err)
    return(
    <div>
        <h1>Oops!!</h1>
        <h1>something went wrong</h1>
        {/*destructuring the useRouteError */}
        <h2>{err.status +" : " + err.statusText}</h2>
    </div>    
    )
}
export default Error