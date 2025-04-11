import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/Components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Creativity Agency - SmartSEO",
  description:
    "Turning Creative Ideas into SuccessConsectetur adipiscing elit, sed do eiusmod tempor incididuntdolore magna aliqua quis nostrud exerc.Discover Nowcreative agencyWe help your business growDicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.Creative designNatus error sit voluptatem accus antium doloremque.Endless possibilitiesSit voluptatem accus antium doloremque laudan.0Projects0People0Years0Officescreative solutionsWe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
