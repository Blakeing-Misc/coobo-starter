/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from "@/lib/sanity.api";
import { previewDocumentNode } from "@/plugins/previewPane";
import { productionUrl } from "@/plugins/productionUrl";
import { pageStructure, singletonPlugin } from "@/plugins/settings";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import pet from "@/schemas/documents/pet";
import project from "@/schemas/documents/project";
// import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  "Next.js Personal Website with Sanity.io";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  // home.name,
  // page.name,
  pet.name,
];

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "",
  dataset: dataset || "",
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      // Documents
      pet,
      // Objects
    ],
  },
  plugins: [
    deskTool({
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    // singletonPlugin([home.name, settings.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    // unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
