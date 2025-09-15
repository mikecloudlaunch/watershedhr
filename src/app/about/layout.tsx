import { generateSEO, seoConfigs } from "@/utils/seo";

export const metadata = generateSEO(seoConfigs.about);

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}