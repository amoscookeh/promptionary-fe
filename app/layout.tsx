import SquiggleDep from "@/components/common/squiggle/squiggle-dep";
import "@styles/globals.css";

export const metadata = {
  title: "Promptionary",
  description: "A modern twist on Taboo & Pictionary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light-primary min-h-screen">
        <div className={"h-screen"}>{children}</div>
        <SquiggleDep />
      </body>
    </html>
  );
}
