import Header from "@/components/Header";
import { PreviewBanner } from "@/components/preview/PreviewBanner";
import PreviewProvider from "@/components/preview/PreviewProvider";
import { readToken } from "@/lib/sanity.api";

import { draftMode } from "next/headers";

export const revalidate = 60;

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined;

  const layout = (
    <>
      {preview && <PreviewBanner />}
      <Header />
      <div className="flex min-h-screen flex-col bg-white text-black">
        <div className="container mt-20 flex-grow ">{children}</div>
      </div>
    </>
  );

  if (preview) {
    return <PreviewProvider token={preview.token}>{layout}</PreviewProvider>;
  }

  return layout;
}
