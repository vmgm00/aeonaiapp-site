import { redirect } from "next/navigation";

const WEB_URL =
  process.env.NEXT_PUBLIC_AEON_WEB_URL ?? "https://app.aeonaiapp.com";

export default function AeonWeb() {
  redirect(WEB_URL);
}
