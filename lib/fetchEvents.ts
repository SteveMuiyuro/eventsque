import "server-only"
import { unstable_cache } from "next/cache";
import capitalize from "./capitalize";
import prisma from "./db";

export const FetchEvents = unstable_cache(async(city:string, page = 1)=>{

const events = await prisma.eventEvento.findMany({
    where:{
        city: city === "all" ? undefined : capitalize(city),
    },

    orderBy:{
        date:"asc",

    },

    take:6,
    skip: (page - 1) * 6

})

let totalCount = 0;

if(city === "all") {
    totalCount = await prisma.eventEvento.count()
} else {
    totalCount = await prisma.eventEvento.count({
        where:{
            city:capitalize(city)
        }
    })
}

    return {
        events, totalCount
    }

})
