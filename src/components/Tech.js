const Tech = ({ title }) => {
    return(
        <>
            <h3>{title}</h3>
            <div className="row text-center">
                <div className="col-sm-12 col-md-4">
                    <h5>Frontend</h5>
                    <p><i className="fa-brands fa-html5 fa-flip text-danger fa-2xl"></i></p>
                    <p><i className="fa-brands fa-css3-alt bg-primary text-primary fa-flip fa-2xl"></i></p>
                    <p><i className="fa-brands fa-square-js bg-warning text-warning fa-flip fa-2xl"></i></p>
                </div>
                <div className="col-sm-12 col-md-4">
                    <h5>Backend</h5>
                    <p><i className="fa-brands fa-node bg-success text-success fa-beat fa-2xl"></i></p>
                </div>
                <div className="col-sm-12 col-md-4">
                    <h5>Database</h5>
                    <p><i className="fa-sharp fa-solid fa-database bg-primary text-primary fa-spin fa-2xl"></i></p>
                    <p><i className="mt-2 fa-solid fa-table fa-spin bg-primary text-primary fa-spin-reverse fa-2xl"></i></p>
                </div>
            </div>
        
        </>
    )
}

export default Tech