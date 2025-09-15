import { generateSEO, seoConfigs } from "@/utils/seo";

export const metadata = generateSEO(seoConfigs.features);

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}