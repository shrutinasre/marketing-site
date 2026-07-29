import { ShieldIllustration } from "@/components/illustrations/ShieldIllustration";
import { FoundationCategoryIllustration } from "@/components/illustrations/categories/FoundationCategoryIllustration";
import { CloudCategoryIllustration } from "@/components/illustrations/categories/CloudCategoryIllustration";
import { SystemsCategoryIllustration } from "@/components/illustrations/categories/SystemsCategoryIllustration";
import { WebsiteCategoryIllustration } from "@/components/illustrations/categories/WebsiteCategoryIllustration";
import { EmployeeCategoryIllustration } from "@/components/illustrations/categories/EmployeeCategoryIllustration";
import { ContinuityCategoryIllustration } from "@/components/illustrations/categories/ContinuityCategoryIllustration";
import { SupportCategoryIllustration } from "@/components/illustrations/categories/SupportCategoryIllustration";
import type { Service } from "@/types";

export function ServiceCategoryIllustration({ category }: { category: Service["category"] }) {
  switch (category) {
    case "foundation":
      return <FoundationCategoryIllustration />;
    case "security":
      return <ShieldIllustration />;
    case "cloud":
      return <CloudCategoryIllustration />;
    case "systems":
      return <SystemsCategoryIllustration />;
    case "website":
      return <WebsiteCategoryIllustration />;
    case "employee":
      return <EmployeeCategoryIllustration />;
    case "continuity":
      return <ContinuityCategoryIllustration />;
    case "support":
      return <SupportCategoryIllustration />;
    default:
      return null;
  }
}
