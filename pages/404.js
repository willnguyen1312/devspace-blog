import { NextSeo } from "next-seo";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <NextSeo title="Not Found" description="Not Found Page Description xD" />
      <div className="flex flex-col items-center mt-20">
        <Image
          alt="Whoops!"
          src="/images/logo.png"
          width={70}
          height={70}
          className="bg-gray-800 rounded-2xl"
        />

        <h1 className="text-6xl my-5">Whoops!</h1>

        <h2 className="text-4xl text-gray-400 mb-5">
          This page does not exist
        </h2>
      </div>
    </Layout>
  );
}
