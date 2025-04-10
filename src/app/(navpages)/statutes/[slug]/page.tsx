import CategoryList from "@/components/category-list";
import { useRouter } from "next/navigation";
import React from "react";

const CompanyLawsPage =async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  if(!slug) return

  return (
   <>
   <CategoryList slug={slug} />
   </>

  );
};

export default CompanyLawsPage;
