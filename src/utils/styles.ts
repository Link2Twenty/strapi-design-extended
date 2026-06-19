export const classCurried =
  (styles: Record<string, string>) =>
  (className: string = "") => {
    return className
      .split(" ")
      .map((cls) => styles[cls] || cls)
      .join(" ");
  };
