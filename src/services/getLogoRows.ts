import { Logo, LogoRow } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";


export async function getLogoRows() : Promise<(LogoRow & { items: Logo[] })[]> {
    return prisma.logoRow.findMany({
        include: { items: true },
        orderBy: { id: "asc" }
    });
}