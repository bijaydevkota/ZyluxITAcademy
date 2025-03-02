import { IconCloud } from "../../components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "postgres",
  "mongodb",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="p-20 space-y-8">
      <div><p className="flex justify-center text-3xl font-semibold">
        What <span className="text-[#33c6f2] mx-2">Technologies</span> We Use
      </p></div>

      <div className="relative flex w-5/12 mx-auto items-center justify-center overflow-hidden border border-[#33c6f2] border-opacity-20">
        <IconCloud images={images} />
      </div>
    </div>
  );
}
