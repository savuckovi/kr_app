import logo from "./logo.svg";
import "./App.css";
import PriceComponent from "./priceComponent";

function App() {
  const priceDetails = [
    {
      type: "FREE",
      price: "$0",
      users: "Single User",
      storage: "5GB",
      publicProjects: "Unlimited Public Projects",
      comunityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      statusReports: "Monthly Status Reports",
      availableFeatures: {
        publicProjects: true,
        comunityAccess: true,
        privateProjects: false,
        phoneSupport: false,
        subdomain: false,
        statusReports: false,
      },
    },

    {
      type: "PLUS",
      price: "$9",
      users: "5 Users",
      storage: "50GB ",
      publicProjects: "Unlimited Public Projects",
      comunityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      statusReports: "Monthly Status Reports",
      availableFeatures: {
        publicProjects: true,
        comunityAccess: true,
        privateProjects: true,
        phoneSupport: true,
        subdomain: true,
        statusReports: false,
      },
    },
    {
      type: "PRO",
      price: "$49",
      users: "Unlimited Users ",
      storage: "150GB ",
      publicProjects: "Unlimited Public Projects",
      comunityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subdomain: "Unlimited Free Subdomain",
      statusReports: "Monthly Status Reports",
      availableFeatures: {
        publicProjects: true,
        comunityAccess: true,
        privateProjects: true,
        phoneSupport: true,
        subdomain: true,
        statusReports: true,
      },
    },
  ];
  return (
    // <div className="App">
    //   <header className="App-header">

    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      <div class="main">
        <div class="container ">
          <div class="row mt-5 ">
            <div class="col-4 ">
              {" "}
              <PriceComponent priceDetail={priceDetails[0]} />
            </div>
            <div class="col-4 ">
              {" "}
              <PriceComponent priceDetail={priceDetails[1]} />
            </div>
            <div class="col-4 ">
              <PriceComponent priceDetail={priceDetails[2]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
