import { redirect } from "next/navigation";
import { APP_STORE_URL } from "@/components/SiteChrome";

export default function AppRedirect() {
  redirect(APP_STORE_URL);
}
