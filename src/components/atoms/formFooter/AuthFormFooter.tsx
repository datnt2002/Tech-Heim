import { Button, Divider } from "antd";
import { Link, type To } from "react-router-dom";

type FooterProps = {
  title?: string;
  message: string;
  href: To;
  hrefLabel: string;
};

const AuthFormFooter = ({ title, message, href, hrefLabel }: FooterProps) => {
  return (
    <>
      <Divider plain>
        <span className="text-gray-2D2D2D">{title}</span>
      </Divider>
      <div className="flex justify-between gap-6">
        <Button
          size="large"
          className="border-primary border-2 text-primary flex-1 "
        >
          <img src="/assets/icons/google_icon.svg" />
          Google
        </Button>
        <Button
          size="large"
          className="border-primary border-2 text-primary flex-1 "
        >
          <img src="/assets/icons/facebook_icon.svg" />
          Facebook
        </Button>
      </div>
      <div className="flex justify-center py-3 mt-4 gap-8">
        <p>{message}</p>
        <Link to={href} className="text-primary">
          {hrefLabel}
        </Link>
      </div>
    </>
  );
};

export default AuthFormFooter;
