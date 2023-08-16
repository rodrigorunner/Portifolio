import { MagnifyingGlass } from "react-loader-spinner"
import "./loader.css"

const Loader = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="loader col-sm-12 col-md-6 mx-auto">
                    <MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor = '#c0efff'
                    color = '#e15b64'
                    />
                    <MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor = '#c0efff'
                    color = '#e15b64'
                    />               
                </div>
            </div>
        </div>
    )
}

export default Loader