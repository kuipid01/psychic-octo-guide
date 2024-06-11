import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design your Resume",
  description: "Match Skin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
