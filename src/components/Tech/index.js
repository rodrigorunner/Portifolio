const Tech = ({ title }) => {
    return(
            <div className="row mt-5">
                <h3 className="">{title}</h3>
                <div className="col-sm-12 col-md-4 text-center ">
                    <h5>Frontend</h5>
                    <p><i className="fa-brands fa-html5 fa-flip text-danger fa-2xl"></i></p>
                    <p><i className="fa-brands fa-css3-alt bg-primary text-primary fa-flip fa-2xl"></i></p>
                    <p><i className="fa-brands fa-square-js bg-warning text-warning fa-flip fa-2xl"></i></p>
                </div>
                <div className="col-sm-12 col-md-4 text-center ">
                    <h5>Backend</h5>
                    <p><i className="fa-brands fa-node bg-success text-success fa-beat fa-2xl"></i></p>
                </div>
                <div className="col-sm-12 col-md-4 text-center ">
                    <h5>Database</h5>
                    <p><i className="fa-sharp fa-solid fa-database bg-primary text-primary fa-spin fa-2xl"></i></p>
                    <p className="mt-4"><i className="fa-solid fa-table fa-spin bg-primary text-primary fa-spin-reverse fa-2xl"></i></p>
                </div>
            </div>
    )
}

export default Tech