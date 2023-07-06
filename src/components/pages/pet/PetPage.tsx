import type { PetPayload } from "@/types";

export interface PetPageProps {
  data: PetPayload | null;
}

export function PetPage({ data }: PetPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { name } = data ?? {};

  return (
    <div>
      {name && (
        <div className="">
          <div className="text-xs md:text-sm">Pet Name:</div>
          <div className="text-md md:text-lg">{name}</div>
        </div>
      )}
    </div>
  );
}
