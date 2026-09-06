"use client";

import { MotionValue, useScroll } from "motion/react";

//model types
import { Logo, LogoRow } from "@/generated/prisma/client";

// component
import LogoScrollRowComponent from "@/components/LogoScrollRowComponent";

type LogoScrollModuleProps = {
    rows: (LogoRow & { items: Logo[] })[];
};

function LogoScrollModule({ rows }: LogoScrollModuleProps) {
    const { scrollY }: { scrollY: MotionValue<number> } = useScroll();

    //1. If there are no rows, do not render module
    if (!rows.length) {
        return null;
    }

    //2. If it has rows, exclude any row which has nothing in it
    const rowsWithItems = rows.filter((row: LogoRow & { items: Logo[] }) => row.items?.length);

    //3. If after the above checks you are left with no valid rows, do not render the module
    if (!rowsWithItems.length) {
        return null;
    }

    //4. check the properties of all the items in a valid row. Filter out any item whose properties are not truthy (null, undefined, false, 0, empty string).
    const validRows = rowsWithItems.map((row: LogoRow & { items: Logo[] }) : LogoRow & { items: Logo[] } => {
        const validLogos = row.items.filter(
            (item) => item.id && item.src && item.alt
        );

        return {
            ...row,
            items: validLogos
        };
    });

    //5. if a row originally had items but after check 4 all its items were found to be invalid leaving an empty row, the row must be removed
    const fullyValidRows = validRows.filter((row: LogoRow & { items: Logo[] }) => {
        return row.items.length;
    });

    //6. If after checking the validity of each rows items you are left with no valid rows, do not render the module
    if(!fullyValidRows.length) {
        return null;
    }

    return (
        <section className="mod-space-sm">
            <div className="cont">
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-12 sm:gap-6">
                    <div className="col-span-4 sm:col-span-12 m-auto">
                        <p className="text-2xl text-center text-gray-400">Businesses we're proud to partner with...</p>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden pt-12">
                <div className="flex flex-col">
                    {fullyValidRows.map(
                        (row: LogoRow & { items: Logo[] }) => (
                            <LogoScrollRowComponent
                                key={row.id}
                                logos={row.items}
                                reverse={row.reverse}
                                scrollY={scrollY}
                            />
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

export default LogoScrollModule;