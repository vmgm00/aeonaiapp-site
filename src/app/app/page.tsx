import { redirect } from "next/navigation";

const REDIRECT_URL =
  process.env.NEXT_PUBLIC_AEON_WEB_URL ?? "https://app.aeonaiapp.com";

export default function AppRedirect() {
  redirect(REDIRECT_URL);
}
