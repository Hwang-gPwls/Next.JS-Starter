import "./styles/global.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/" className="logo">
            Hyejin
          </Link>
          <Link href="/list">List</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
