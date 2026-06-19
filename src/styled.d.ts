import "@strapi/design-system";
import { Theme } from "@strapi/design-system";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
