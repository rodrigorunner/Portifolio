import { MagnifyingGlass } from "react-loader-spinner"

const Loader = () => {
    return(
        <div style={{
            position: 'absolute',
            top:'45%',
            left: '30%'
        }} className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
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