"use client";

import { petBySlugQuery } from "@/lib/sanity.queries";
import { useLiveQuery } from "next-sanity/preview";
import type { PetPayload } from "@/types";

import { PetPage, PetPageProps } from "./PetPage";

export default function PetPreview({ data: initialData }: PetPageProps) {
  const [data] = useLiveQuery<PetPayload | null>(initialData, petBySlugQuery, {
    slug: initialData?.slug,
  });

  return <PetPage data={data} />;
}
