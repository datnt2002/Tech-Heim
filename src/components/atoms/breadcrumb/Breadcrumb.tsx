import { Breadcrumb as AntBreadcrumb } from "antd";

import { Link, To, useLocation } from "react-router-dom";
import capitalize from "../../../utils/capitalize";
import { cn } from "../../../utils/utils";

type Props = {
  className?: string;
};

const Breadcrumb = ({ className }: Props) => {
  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const items = [
    {
      title: "Home",
      href: "/",
    },
    ...pathSnippets.slice(0, length + 1).map((item, index) => {
      return {
        title: item,
        href: `/${pathSnippets.slice(0, index + 1).join("/")}`,
      };
    }),
  ];

  return (
    <AntBreadcrumb
      className={className}
      separator=">"
      items={items}
      itemRender={({ title, href }) => {
        return (
          <Link
            to={href as To}
            className={cn(
              "hover:underline hover:!text-primary hover:!bg-transparent",
              title === pathSnippets?.[length] && "!underline !text-primary"
            )}
          >
            {capitalize(title as string)}
          </Link>
        );
      }}
    />
  );
};

export default Breadcrumb;
