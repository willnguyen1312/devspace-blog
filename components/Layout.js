import Head from "next/head";
import Header from "./Header";
import Search from "./Search";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}
