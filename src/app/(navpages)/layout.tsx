import NavbarVarient from "@/components/navbar-varient";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
            <NavbarVarient/>
            {children}
    </>
  );
}
