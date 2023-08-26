export function ValidationCard(source: string) {
    return source.replace(/screen|type=/g, (match) => {
      if (match === "screen") return "full";
      if (match === "type=") return "type=";
      if (match === "z-") return "";
      if (match === "h-full") return "";

      return match;
    });
  }