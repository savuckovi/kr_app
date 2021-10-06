import React from 'react';


export default class card extends React.Component{
  constructor() {
    super();
    this.state = {
      show:false,
      data: 
        {
          acctype:null ,
          rate: null,
          users: null,
          pvtproject:false,
          storage: null,
          phonesupport: false,
          subdomain: false,
        monthlyreport: false,
          show:true,
        
        }
      
    }
  }

  componentDidMount=()=> {
    this.setState({
      acctype:this.props.acctype ,
      rate: this.props.rate,
      users: this.props.users,
      pvtproject:this.props.pvtproject,
      storage: this.props.storage,
      phonesupport: this.props.phonesupport,
      subdomain: this.props.subdomain,
      monthlyreport:this.props.monthlyreport,
    })
  }
  check = (data, msg) => {
    console.log(msg);
    if (data)
      return (<li ><span class="fa-li">< i class="fas fa-check" ></i ></span>{msg}</li>)
    else
    return (<li class="text-muted"><span class="fa-li">< i class="fas fa-times" ></i ></span>{msg}</li>)
  }
  render() {
    return (
      <>
      
        {

          <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">{ this.state.acctype}</h5>
                <h6 class="card-price text-center">${ this.state.rate}<span class="period">/month</span></h6>
              <br/>
              <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fas fa-check"></i></span>{ this.state.users}</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span>{ this.state.storage} GB Storage</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                  {this.check(this.state.pvtproject, "Unlimited Private Projects")}
                  {this.check(this.state.phonesupport, "Dedicated Phone Support")}
                  {this.check(this.state.subdomain, "Free Subdomain")}
                  { this.check(this.state.monthlyreport,"Monthly Status Reports")}
              
              </ul>
              <div class="d-grid text-center">
                <a href="#" class="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
          </div>
          
 
        }
    
        
      </>
    );
  }
}
