import React from "react";

const Card = () => {
  const obj = [
    {
      id: 1,
      available: "FREE",
      price: "$0/month",
      data: [
        { id: 1, user: "Single User" },
        { id: 2, user: "50GB Storage" },
        { id: 3, user: "Unlimited Public Projects" },
        { id: 4, user: "Community Access" },
        { id: 5, user: "Unlimited Private Projects" },
        { id: 6, user: "Dedicated phone Support" },
        { id: 7, user: "Free Subdomain" },
        { id: 8, user: "Monthly Status Reports" },
      ],
    },
    {
      id: 2,
      available: "PLUS",
      price: "$9/month",
      data: [
        { id: 1, user: "5 Users" },
        { id: 2, user: "50GB Storage" },
        { id: 3, user: "Unlimited Public Projects" },
        { id: 4, user: "Community Access" },
        { id: 5, user: "Unlimited Private Projects" },
        { id: 6, user: "Dedicated phone Support" },
        { id: 7, user: "Free Subdomain" },
        { id: 8, user: "Monthly Status Reports" },
      ],
    },
    {
      id: 3,
      available: "PRO",
      price: "$49/month",
      data: [
        { id: 1, user: "Single User" },
        { id: 2, user: "50GB Storage" },
        { id: 3, user: "Unlimited Public Projects" },
        { id: 4, user: "Community Access" },
        { id: 5, user: "Unlimited Private Projects" },
        { id: 6, user: "Dedicated phone Support" },
        { id: 7, user: "Free Subdomain" },
        { id: 8, user: "Monthly Status Reports" },
      ],
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {obj.map((item, index) => (
            <div>
              <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="card">
                  <div className="card-body border-bottom-0">
                    <h6 className="card-title">{item.available}</h6>
                    <h2 className="card-text">{item.price}</h2>
                    <hr />
                  </div>
                  <ul className="list-group list-group-flush ">
                    {item.data.map((subItem, index) => (
                      <li className="list-group-item border-bottom-0">
                        {subItem.user}
                      </li>
                    ))}
                  </ul>
                  <div className="card-body">
                    <button className="btn btn-primary w-100">Button</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
