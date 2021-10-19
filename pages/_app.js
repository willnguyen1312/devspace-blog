import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

// https://github.com/garmeeh/next-seo/issues/14#issuecomment-503715239
const url = "https://devspace-blog-cool.vercel.app";

const config = {
  title: "Welcome to DevSpace",
  titleTemplate: "%s - DevSpace Blog",
  description: "DevSpace Blog is awesome",
  openGraph: {
    title: "DevSpace Blog | Powered by Next.js",
    description: "DevSpace Blog - https://devspace-blog-cool.vercel.app",
    type: "website",
    locale: "en_IE",
    url: "https://devspace-blog-cool.vercel.app",
    site_name: "DevSpace Blog",
    images: [
      {
        url: `${url}/card.png`,
        width: 800,
        height: 600,
        alt: "DevSpace Blog",
      },
    ],
  },
  twitter: {
    handle: "@devspace",
    site: "@devspace",
    cardType: "summary_large_image",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...config} /> <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
