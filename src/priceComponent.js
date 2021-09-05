import './priceComponent.css';

function PriceComponent(props) {

    const features = props.priceDetail
    console.log(features)
    return (<>
        <div class="card">
            <div class="card-body">


{/* price PriceComponent */}
                <h6 class="card-subtitle mb-2 text-muted">{features.type}</h6>
                <div class="card-title"><h1 class="priceHeading" >{features.price}</h1>/month</div>
                <hr />
                <ul class="list">
                    <li>&#x2714;&nbsp;{features.users}</li>
                    <li>&#x2714;&nbsp;{features.storage}</li>
                    <li>&#x2714;&nbsp;{features.publicProjects}</li>
                    <li>&#x2714;&nbsp;{features.comunityAccess}</li>

                    {features.type === "FREE" ? <><li class="disable">&#x2716;&nbsp;{features.privateProjects}</li>
                        <li class="disable">&#x2716;&nbsp;{features.phoneSupport}</li>
                        <li class="disable">&#x2716;&nbsp;{features.subdomain}</li>
                        <li class="disable">&#x2716;&nbsp;{features.statusReports}</li></> : <><li>&#x2714;&nbsp;{features.privateProjects}</li>
                        <li >&#x2714;&nbsp;{features.phoneSupport}</li>
                        <li>&#x2714;&nbsp;{features.subdomain}</li>


                        {features.type === "PLUS" ? <li class="disable">&#x2716;&nbsp;{features.statusReports}</li> : <li>&#x2714;&nbsp;{features.statusReports}</li>}
                    </>}

                </ul>

                <button type="button" class="btn btn-primary">Button</button>



                {/* <p> &#x2714;</p> */}

            </div>
        </div>
    </>);
}

export default PriceComponent;