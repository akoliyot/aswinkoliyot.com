/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import { Lightbox } from "./src/components/Lightbox";
// require('prismjs/themes/prism-okaidia.css');
require("./src/assets/github-theme.css");

export const wrapRootElement = ({ element }) => {
  return <Lightbox>{element}</Lightbox>;
};
