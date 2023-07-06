import { groq } from "next-sanity";

export const petBySlugQuery = groq`
  *[_type == "pet" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    
  }
`;

export const petPaths = groq`
  *[_type == "pet" && slug.current != null].slug.current
`;

export const allPetQuery = groq`
  *[_type == "pet" ]
`;
