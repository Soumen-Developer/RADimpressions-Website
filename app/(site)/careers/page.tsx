// app/(site)/careers/page.tsx — 301 to the careers page.
// The spec places Careers at /about/careers (SITEMAP row 18) and keeps
// /careers/ as a redirect (SITEMAP row 190).

import { permanentRedirect } from "next/navigation";

export default function CareersRedirect() {
  permanentRedirect("/about/careers");
}