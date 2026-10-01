// app/(site)/hiring/page.tsx — one-line redirect to /about/careers.

import { permanentRedirect } from "next/navigation";

export default function HiringRedirect() {
  permanentRedirect("/about/careers");
}