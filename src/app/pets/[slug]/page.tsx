// import { toPlainText } from "@portabletext/react";
import { PetPage } from "@/components/pages/pet/PetPage";
import PetPreview from "@/components/pages/pet/PetPreview";
import { readToken } from "@/lib/sanity.api";
import { getClient } from "@/lib/sanity.client";
import { petBySlugQuery, petPaths } from "@/lib/sanity.queries";
import { defineMetadata } from "@/lib/utils.metadata";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { PetPayload } from "@/types";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const client = getClient();
  const slugs = await client.fetch<string[]>(petPaths, {});
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectSlugRoute({ params }: Props) {
  const { slug } = params;
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined;
  const client = getClient(preview);
  const data = await client.fetch<PetPayload | null>(petBySlugQuery, {
    slug,
  });

  if (!data && !preview) {
    notFound();
  }

  return preview ? <PetPreview data={data} /> : <PetPage data={data} />;
}
