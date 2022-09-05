import { wrapRootElement as wrapper } from "./wrapRootElement";
import { GatsbyBrowser } from "gatsby";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = wrapper;
