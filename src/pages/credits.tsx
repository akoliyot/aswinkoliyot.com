import React from "react";
import { Link } from "../components/Link";

const CreditsPage: React.FC = () => {
  return (
    <>
      <div>
        Powered by{" "}
        <Link to="https://www.gatsbyjs.org/" mode="default">
          Gatsby
        </Link>
      </div>
      <div>
        Styles inspired by{" "}
        <Link
          to="https://github.com/nodejh/hugo-theme-cactus-plus"
          mode="default"
        >
          nodejh
        </Link>
      </div>
    </>
  );
};

export default CreditsPage;
