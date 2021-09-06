import "./priceComponent.css";

function PriceComponent(props) {
  const features = props.priceDetail;
  console.log(features);
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">{features.type}</h6>
          <div class="card-title">
            <h1 class="priceHeading">{features.price}</h1>/month
          </div>
          <hr />

          <ul class="list">
            <li>&#x2714;&nbsp;{features.users} </li>
            <li>&#x2714;&nbsp;{features.storage} Storage</li>

            {features.availableFeatures.publicProjects ? (
              <li>&#x2714;&nbsp;{features.publicProjects}</li>
            ) : (
              <li class="disable">&#x2716;&nbsp;{features.publicProjects}</li>
            )}

            {features.availableFeatures.comunityAccess ? (
              <li>&#x2714;&nbsp;{features.comunityAccess}</li>
            ) : (
              <li>&#x2716;&nbsp;{features.comunityAccess}</li>
            )}

            {features.availableFeatures.privateProjects ? (
              <li>&#x2714;&nbsp;{features.privateProjects}</li>
            ) : (
              <li class="disable">&#x2716;&nbsp;{features.privateProjects}</li>
            )}

            {features.availableFeatures.phoneSupport ? (
              <li>&#x2714;&nbsp;{features.phoneSupport}</li>
            ) : (
              <li class="disable">&#x2716;&nbsp;{features.phoneSupport}</li>
            )}

            {features.availableFeatures.subdomain ? (
              <li>&#x2714;&nbsp;{features.subdomain}</li>
            ) : (
              <li class="disable">&#x2716;&nbsp;{features.subdomain}</li>
            )}

            {features.availableFeatures.statusReports ? (
              <li>&#x2714;&nbsp;{features.statusReports}</li>
            ) : (
              <li class="disable">&#x2716;&nbsp;{features.statusReports}</li>
            )}
          </ul>

          <button type="button" class="btn btn-primary">
            Button
          </button>
        </div>
      </div>
    </>
  );
}

export default PriceComponent;
