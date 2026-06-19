import { useContext, useMemo, useEffect } from "react";
import { ThemeContext, DefaultTheme } from "styled-components";

export default function useDesignTokens() {
  const theme = useContext(ThemeContext);

  // Add CSS variables to the document head when the theme changes
  useEffect(() => {
    if (!theme) return;

    const styleId = "strapi-design-tokens";
    const existingStyle = document.getElementById(styleId);

    if (!existingStyle) {
      const styleElement = document.createElement("style");
      styleElement.id = styleId;
      styleElement.textContent = objectToCssVariables(theme || {}, "strapi-");
      document.head.appendChild(styleElement);
    }
  }, [theme]);

  return useMemo(
    () => ({
      theme,
      borderRadius: (token: keyof DefaultTheme["borderRadius"]) => {
        return theme?.borderRadius[token];
      },
      breakpoint: (token: keyof DefaultTheme["breakpoints"]) => {
        return theme?.breakpoints[token];
      },
      color: (token: keyof DefaultTheme["colors"]) => {
        return theme?.colors[token];
      },
      fontSize: (token: keyof DefaultTheme["fontSizes"]) => {
        return theme?.fontSizes[token];
      },
      fontWeight: (token: keyof DefaultTheme["fontWeights"]) => {
        return theme?.fontWeights[token];
      },
      lineHeight: (token: keyof DefaultTheme["lineHeights"]) => {
        return theme?.lineHeights[token];
      },
      motion: (token: keyof DefaultTheme["motion"]) => {
        return theme?.motion[token];
      },
      shadow: (token: keyof DefaultTheme["shadows"]) => {
        return theme?.shadows[token];
      },
      size: (token: keyof DefaultTheme["sizes"]) => {
        return theme?.sizes[token];
      },
      space: (token: keyof DefaultTheme["spaces"]) => {
        return theme?.spaces[token];
      },
      transition: (token: keyof DefaultTheme["transitions"]) => {
        return theme?.transitions[token];
      },
      zIndex: (token: keyof DefaultTheme["zIndices"]) => {
        return theme?.zIndices[token];
      },
    }),
    [theme],
  );
}

/**
 * Converts a nested object into a string of CSS variables.
 * @param obj The object to convert into CSS variables.
 * @param prefix An optional prefix to prepend to each CSS variable name.
 * @returns A string of CSS variables in the format of `:root { --prefixkey: value; }`.
 */
export function objectToCssVariables(
  obj: Record<string, any>,
  prefix: string = "",
): string {
  const lines: string[] = [":root {"];

  const flattenObject = (
    input: Record<string, unknown>,
    currentPrefix: string = "",
  ): void => {
    for (const [key, value] of Object.entries(input)) {
      const newKey = currentPrefix ? `${currentPrefix}-${key}` : key;

      if (value && typeof value === "object") {
        flattenObject(value as Record<string, unknown>, newKey);
      } else if (typeof value === "string" || typeof value === "number") {
        lines.push(`  --${prefix}${newKey}: ${value};`);
      }
    }
  };

  flattenObject(obj);
  lines.push("}");
  return lines.join("\n");
}
