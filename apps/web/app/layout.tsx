import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";
import { name } from "@/src/lib/data";

export const metadata: Metadata = {
  title: "OpenPlan",
  description: "jeong eunseon's OpenPlan assignment"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <header className="app-header">
            <div className="app-header__title">{name} | eunseonJeong</div>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
