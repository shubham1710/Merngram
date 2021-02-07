import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>404 - Not Found</h1>
            <p class="zoom-area">Looks like you are lost!</p>
            <section class="error-container">
                <span>4</span>
                <span><span class="screen-reader-text">0</span></span>
                <span>4</span>
            </section>
            <div class="link-container">
                <Link to='/'><a class="btn btn-info">Go Back Home</a></Link>
            </div>
        </div> 
     );
}
 
export default NotFound;