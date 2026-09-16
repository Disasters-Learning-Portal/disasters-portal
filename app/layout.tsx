import { Footer } from "@teamimpact/veda-ui-blocks";
import type { Metadata } from "next";
import "@teamimpact/veda-ui-blocks/hds.css";
import "./styles/overrides.css";

import { HeaderWithCurrentPath } from "@/app/components";
import { AppLink } from "@/app/components/AppLink";
import { withBasePath } from "@/app/site-config/base-path.helpers";
import { MOCK_FOOTER_PROPS } from "./site-config/footer";

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
          "--image-logo-emblem-url": `url("${withBasePath("/img/logo-emblem.svg")}")`,
        } as React.CSSProperties
      }
    >
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
