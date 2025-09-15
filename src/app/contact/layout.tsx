import { generateSEO, seoConfigs } from "@/utils/seo";

export const metadata = generateSEO(seoConfigs.contact);

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}