import { generateSEO, seoConfigs } from "@/utils/seo";

export const metadata = generateSEO(seoConfigs.blog);

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}