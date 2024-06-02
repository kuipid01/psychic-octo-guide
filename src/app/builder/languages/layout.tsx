import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Languages Page of Resume",
  description: "Fill Contact",
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
