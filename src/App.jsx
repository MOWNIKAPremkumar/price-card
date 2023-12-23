
import React from "react";
import Card from "./components/card";
function App() {
  let cardData = [
    {
      title: "Free",
      monthPrice: "$0",
      user: "Single User",
      isUser:"true",
      storage: "50GB Storage",
      isStorage:"true",
      project: "text-muted",
      isProject:"true",
      projectIcon: "fas fa-times",
      isProjectIcon:"true",
      phone: "tex-muted",
      isPhone:"false",
      phoneIcon: "fas fa-times",
      isPhoneIcon:"false",
      subdomain: "text-muted",
      isSubdomain:"false",
      subdomainIcon: "fas fa-times",
      isSubdomainIcon:"false",
      montlyStatus: "text-muted",
      isMonthlyStatus:"false",
      monthlyStatusIcon: "fas fa-times",
      isMonthlyStatusIcon:"false",
    },
    {
      title: "Plus",
      monthPrice: "$9",
      user: "5 Users",
      isUser:"true",
      storage: "50GB Storage",
      isStorage:"true",
      project: "",
      isProject:"true",
      projectIcon: "fas fa-check",
      isProjectIcon:"true",
      phone: "",
      isPhone:"true",
      phoneIcon: "fas fa-check",
      isPhoneIcon:"true",
      subdomain: "",
      isSubdomain:"true",
      subdomainIcon: "fas fa-check",
      isSubdomainIcon:"true",
      montlyStatus: "text-muted",
      isMonthlyStatus:"false",
      monthlyStatusIcon: "fas fa-times",
      isMonthlyStatusIcon:"false",
    },
    {
      title: "Pro",
      monthPrice: "$49",
      user: "Unlimited Users",
      isUser:"true",
      storage: "50GB Storage",
      isStorage:"true",
      project: "",
      isProject:"true",
      projectIcon: "fas fa-check",
      isProjectIcon:"true",
      phone: "",
      isPhone:"true",
      phoneIcon: "fas fa-check",
      isPhoneIcon:"true",
      subdomain: "",
      isSubdomain:"true",
      subdomainIcon: "fas fa-check",
      isSubdomainIcon:"true",
      montlyStatus: "",
      isMonthlyStatus:"true",
      monthlyStatusIcon: "fas fa-check",
      isMonthlyStatusIcon:"false",
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {cardData.map((e, i) => {
            return <Card data={e} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;