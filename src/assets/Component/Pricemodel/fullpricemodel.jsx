import Pricemodelcomp from "./Pricemodelcomp";
import "./Pricemodel.css";

Pricemodelcomp;

function Fullpricemodel() {
  const accesslist1 = [
    "Social Media Management (2 platforms)",
    "Basic SEO Optimization",
    "2 Ad Campaigns ",
    "Monthly Performance Report",
    "Email Support",
  ];
  const accesslist2 = [
    "Social Media Management (4 platforms)",
    "Advanced SEO (On-Page & Off-Page)",
    "5 Ad Campaigns ",
    "Basic Website Audit",
    "Content Marketing (4 posts/month)",
    "Priority Support ",
  ];
  const accesslist3 = [
    "Complete Brand Management",
    "Unlimited Social Media Platforms",
    "Advanced SEO + SEM",
    "Influencer & Video Marketing",
    "Dedicated Account Manager",
    "Weekly Analytics & Strategy Calls",
    "24/7 Support",
  ];
  return (
    <>
      <div className="mainpagefullpricesectiondivv">
        <h2 className="Pricingmodelheadingforfullpricemodel">Pricing</h2>
        <p className="paragraphforpricingmodelheading">
          Our flexible pricing plans are designed to suit every business stage —
          from startups to enterprises.
        </p>
      </div>
      <div className="fullpricedetailsdivv">
        <Pricemodelcomp
          planname={"Standerd"}
          price={"$299"}
          accessname={accesslist1}
          classname={"fullpricemodeldivsection"}
          buttonclassname={"bookacallbuttonforpricingsection"}
        />
        <Pricemodelcomp
          planname={"Premium"}
          price={"$999"}
          accessname={accesslist2}
          classname={"fullpricemodeldivsectioncenter"}
          buttonclassname={"bookacallbuttonforpricingsectioncenter"}
        />
        <Pricemodelcomp
          planname={"Enterprise"}
          price={"$1999+"}
          accessname={accesslist3}
          classname={"fullpricemodeldivsection"}
          buttonclassname={"bookacallbuttonforpricingsection"}
        />
      </div>
    </>
  );
}

export default Fullpricemodel;
