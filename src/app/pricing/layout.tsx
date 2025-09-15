import { generateSEO, seoConfigs } from "@/utils/seo";

export const metadata = generateSEO(seoConfigs.pricing);

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}