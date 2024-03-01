import "server-only"
import { notFound } from "next/navigation";
import prisma from "./db";
import { unstable_cache } from "next/cache";

export const FetchEvent = unstable_cache(async(slug:string) => {
  const event = await prisma.eventEvento.findUnique({
    where: {
      slug:slug,
    }
  });

  if(!event){
    return notFound()
  }

  return event;

})
