"use client";

import { useState } from "react";
import { motion } from "motion/react";

//models
import { Accordion, AccordionItem } from "@/generated/prisma/client";

//components
import AccordionItemComponent from "@/components/Accordion/AccordionItemComponent";

//motion variants
import { containerVariants } from "@/components/Accordion/AccordionMotionVariants";

type ServicesModuleProps = {
    accordion: Accordion & { items: AccordionItem[] } | null;
};

function ServicesModule({ accordion }: ServicesModuleProps) {
    const [activeId, setActiveId] = useState<number | null>(null);

    //If the accordion does not exist, the accordion items do not exist or the items array has nothing it to render, do not render this module
    if (!accordion || !accordion.items?.length) {
        return null;
    }

    //This check filters out any accordion items whose properties are null, undefined, false, 0, or empty strings preventing bad data from reaching the UI.
    const validAccordionItems = accordion.items.filter(
        (i) => i.id && i.label && i.content && i.icon
    );

    const toggleItem = (id: number): void => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section id="services" className="mod-space-lg">
            <div className="cont">
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-12 sm:gap-6 mb-10">
                    <div className="col-span-4 sm:col-span-7">
                        <div className="body-lg mb-5">Grow your business</div>
                        <div className="h1 mb-5">Why choose Sequoia?</div>
                        <p className="max-w-106">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex cupiditate tenetur, amet molestias officiis sit sapiente omnis quae numquam! Repellat nemo sapiente asperiores quibusdam est placeat quo tempora odio suscipit.</p>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-0 sm:grid-cols-12 sm:gap-6">
                    <div className="col-span-4 sm:col-span-6"> {/* acc container - column 1*/}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {
                                validAccordionItems.slice(0, 4).map((accItem) => (
                                    <AccordionItemComponent
                                        key={accItem.id}
                                        accItem={accItem}
                                        activeId={activeId}
                                        toggleItem={toggleItem}
                                    />
                                ))
                            }
                        </motion.div>
                    </div>
                    <div className="col-span-4 sm:col-span-6"> {/* acc container - column 2*/}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {
                                validAccordionItems.slice(4, 8).map((accItem) => (
                                    <AccordionItemComponent
                                        key={accItem.id}
                                        accItem={accItem}
                                        activeId={activeId}
                                        toggleItem={toggleItem}
                                    />
                                ))
                            }
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesModule;

