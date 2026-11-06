import { Footer } from "@teamimpact/veda-ui-blocks";
import type { Metadata } from "next";
import "@teamimpact/veda-ui-blocks/hds.css";

import { HeaderWithCurrentPath } from "@/app/components";
import { AppLink } from "@/app/components/AppLink";
import { DAP_SCRIPT_SRC, withBasePath } from "@/app/site-config/env.helpers";
import { MOCK_FOOTER_PROPS } from "@/app/site-config/footer";

export const metadata: Metadata = {
  title: "NASA Disasters PORTAL",
  description: "NASA Disasters PORTAL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // CSS cannot resolve public/ URLs under a base path; expose it as a var
      style={
        {
          "--image-logo-url": `url("${withBasePath("/img/logo-emblem.svg")}")`,
        } as React.CSSProperties
      }
    >
      <head>
        {/* GSA Digital Analytics Program. id must stay "_fed_an_ua_tag": DAP reads its params via it */}
        <script id="_fed_an_ua_tag" async type="text/javascript" src={DAP_SCRIPT_SRC} />
      </head>
      <body
        className="minh-viewport"
        style={{
          display: "grid",
          gridTemplateRows: "auto auto 1fr auto" /* banner, header, main, footer */,
        }}
      >
        <HeaderWithCurrentPath />
        <main>{children}</main>
        <Footer {...MOCK_FOOTER_PROPS} linksAs={AppLink} />
      </body>
    </html>
  );
}
