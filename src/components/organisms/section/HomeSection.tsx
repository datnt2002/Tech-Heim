import React from "react";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  sectionName: string;
  viewAllButton?: boolean;
  url?: string;
};

const HomeSection = ({
  children,
  sectionName,
  viewAllButton = false,
  url = "/",
}: Props) => {
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate(url);
  };
  return (
    <div className="mx-24 mt-12">
      <div className="flex justify-between">
        <h3 className="text-[32px]">{sectionName}</h3>
        {viewAllButton && (
          <button className="flex items-center" onClick={handleViewAll}>
            View All{" "}
            <img
              src="/assets/icons/arrow/arrow_right_black.svg"
              alt=""
              className="h-3 ml-1 w-3"
            />
          </button>
        )}
      </div>
      <Divider className="bg-gray-B4B4B4 h-[2px] mt-4" />
      {children}
    </div>
  );
};

export default HomeSection;
