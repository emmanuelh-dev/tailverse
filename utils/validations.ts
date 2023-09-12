import { toast } from "react-hot-toast";

export function ValidationCard(source: string) {
  return source.replace(/screen|type=/g, (match) => {
    if (match === "screen") return "full";
    if (match === "type=") return "type=";
    if (match === "z-") return "";
    if (match === "relative") return "";
    if (match === "class=") return "className=";
    const validSource = match.replace(/\t/g, '  ');

    return validSource;
  });
}

export function validationSource(source: string) {
  if (source.includes("w-screen") || source.includes("h-screen")) {
    toast.error("Please remove 'w-screen' or 'h-screen' from the code.");
    return;
  } else if (source.includes("type=")) {
    toast.error("Please use 'typeof' instead");
    return;
  }
}
