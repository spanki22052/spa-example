import "styled-components"
import type { GlobalTheme } from "@styles/theme"

declare module "styled-components" {
  export interface DefaultTheme extends GlobalTheme {}
}

