import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyOverview } from "../api/api";

interface CompanyOverviewI {
  Symbol: string;
  Description: string;
  Name: string;
  Exchange: string;
  Sector: string;
  Industry: string;
}
const CompanyOverview = () => {
  const { id } = useParams();
  const [overView, setOverview] = useState<CompanyOverviewI>();
  useEffect(() => {
    const fetchOverview = async () => {
      const response = await getCompanyOverview(id);
      setOverview(response);
    };

    fetchOverview();
  }, [id]);
  return (
    <div className="company-overview-container py-6 px-5 border-b border-[#c4c4c480]">
      <h2 className="font-light text-base mt-2 font-roboto mb-3.5 font-normal ml-">
        Company Overview
      </h2>
      <h4 className="text-[0.95rem] font-medium">{overView?.Name}</h4>
      <p className="text-ternary-text my-1.5 text-[0.7rem]">{`${overView?.Exchange} | ${overView?.Sector} | ${overView?.Industry}`}</p>
      <p className="text-sm tracking-wide trancate-text">
        {overView?.Description}
      </p>
    </div>
  );
};

export default CompanyOverview;
