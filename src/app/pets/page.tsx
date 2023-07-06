import { getClient } from "@/lib/sanity.client";
import { allPetQuery } from "@/lib/sanity.queries";

import { notFound } from "next/navigation";
import { PetPayload } from "@/types";
import Link from "next/link";

export default async function PetsRoute() {
  const client = getClient();
  const data = await client.fetch<PetPayload[] | null>(allPetQuery, {});

  if (!data) {
    notFound();
  }

  return (
    <main>
      <h2>Pets</h2>
      {data && data.length > 0 && (
        <ul>
          {data?.map((pet) => (
            <li key={pet._id}>
              <Link href={`/pets/${pet.slug.current}`}>{pet.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
