import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";

export default function Post({ post, compact }) {
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      {!compact && (
        <Image
          src={post.frontmatter.cover_image}
          alt=""
          height={420}
          width={600}
          className="mb-4 rounded"
        />
      )}
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className="mt-2">
        <Link passHref href={`/blog/${post.slug}`}>
          <span className="text-2xl text-gray-700 font-bold hover:underline">
            {post.frontmatter.title}
          </span>
        </Link>
        <p className="mt-2 text-gray-600">{post.frontmatter.excerpt}</p>
      </div>

      {!compact && (
        <div className="flex justify-between items-center mt-6">
          <Link passHref href={`/blog/${post.slug}`}>
            <span className="text-gray-900 hover:text-blue-600">Read More</span>
          </Link>
          <div className="flex items-center">
            <Image
              width={70}
              height={70}
              src={post.frontmatter.author_image}
              alt=""
              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            />
            <h3 className="text-gray-700 font-bold">
              {post.frontmatter.author}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
