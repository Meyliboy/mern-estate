import { toast } from "react-hot-toast";

export const notifyMessage = (
  text: string,
  type: "error" | "success" | "custom" | "loading"
) => toast[type](text);
