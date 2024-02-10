import React from "react";

const Card = () => {
  const obj = [
    {
      id: 1,
      available: "FREE",
      price: "$0/month",
      data: [
        {
          id: 1,
          user: "Single User ",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 2,
          user: "50GB Storage",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 3,
          user: "Unlimited Public Projects",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 4,
          user: "Community Access",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 5,
          user: <span className="gray">Unlimited Private Projects</span>,
          icon: <i class="fa-solid fa-x"></i>,
        },
        {
          id: 6,
          user: <span className="gray">Dedicated phone Support</span>,
          icon: <i class="fa-solid fa-x"></i>,
        },
        {
          id: 7,
          user: <span className="gray">Free Subdomain</span>,
          icon: <i class="fa-solid fa-x"></i>,
        },
        {
          id: 8,
          user: <span className="gray">Monthly Status Reports</span>,
          icon: <i class="fa-solid fa-x"></i>,
        },
      ],
    },
    {
      id: 2,
      available: "PLUS",
      price: "$9/month",
      data: [
        { id: 1, user: "5 Users", icon: <i class="fa-solid fa-check"></i> },
        {
          id: 2,
          user: "50GB Storage",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 3,
          user: "Unlimited Public Projects",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 4,
          user: "Community Access",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 5,
          user: "Unlimited Private Projects",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 6,
          user: "Dedicated phone Support",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 7,
          user: "Free Subdomain",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 8,
          user: <span className="gray">Monthly Status Reports</span>,
          icon: <i class="fa-solid fa-x"></i>,
        },
      ],
    },
    {
      id: 3,
      available: "PRO",
      price: "$49/month",
      data: [
        { id: 1, user: "Single User", icon: <i class="fa-solid fa-check"></i> },
        {
          id: 2,
          user: "50GB Storage",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 3,
          user: "Unlimited Public Projects",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 4,
          user: "Community Access",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 6,
          user: "Dedicated phone Support",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 5,
          user: "Unlimited Private Projects",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 7,
          user: "Free Subdomain ",
          icon: <i class="fa-solid fa-check"></i>,
        },
        {
          id: 8,
          user: "Monthly Status Reports",
          icon: <i class="fa-solid fa-check"></i>,
        },
      ],
    },
  ];
  return (
    <>
      <div className="container">
        <h1>React Price Card Task</h1>
        <div className="row">
          {obj.map((item, index) => (
            <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 ">
              <div className="card  mt-4">
                <div className="card-body border-bottom-0">
                  <h6 className="card-title">{item.available}</h6>
                  <h2 className="card-text">{item.price}</h2>
                  <hr />
                </div>
                <ul className="list-group list-group-flush ">
                  {item.data.map((subItem, index) => (
                    <li className="list-group-item border-bottom-0">
                      {subItem.icon}{" "}
                      <span className="ms-2">{subItem.user}</span>
                    </li>
                  ))}
                </ul>
                <div className="card-body">
                  <button className="btn btn-primary w-100">Button</button>
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
