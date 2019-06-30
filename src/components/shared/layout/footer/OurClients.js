import React, { Component } from "react";

import client_log_1 from "../../../../images/client-logo-1.png";
import client_log_2 from "../../../../images/client-logo-2.png";
import client_log_3 from "../../../../images/client-logo-3.png";
import client_log_4 from "../../../../images/client-logo-4.png";
import client_log_5 from "../../../../images/client-logo-5.png";
import client_log_6 from "../../../../images/client-logo-6.png";

class OurClients extends Component {
  state = {
    client: [
      { img: client_log_1 },
      { img: client_log_2 },
      { img: client_log_3 },
      { img: client_log_4 },
      { img: client_log_5 },
      { img: client_log_6 }
    ]
  };

  render() {
    let clients = (
      <ul class="clearfix">
        {this.state.client.map((img, index) => {
          return (
            <li key={index}>
              <div class="client-logo text-center">
                <a href="#!">
                  <img src={img.img} alt="Logo_not_found" />
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    );
    return (
      <div class="our-clients subs-img relative">
        <div class="overlay" />
        <div class="container">
          <div class="row">
            <h2 className="our-clients__text u-margin-bottom-medium text-white">
              Our Clients
            </h2>
            {clients}
          </div>
        </div>
      </div>
    );
  }
}

export default OurClients;
