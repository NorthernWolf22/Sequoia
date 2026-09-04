//models
import { AccordionItem } from "@/generated/prisma/client";

//motion variants
import { itemVariants } from "./AccordionMotionVariants";

//icons
import { faCode, faChevronDown, faGear, faSterlingSign, faPenNib, faPalette, faEnvelope, faBullhorn, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { motion } from "motion/react";

type AccordionItemProps = {
    accItem: AccordionItem;
    activeId: number | null;
    toggleItem: (id: number) => void;
};

const ICONMAP: Record<string, IconDefinition> = {
    faCode: faCode,
    faGear: faGear,
    faBullhorn: faBullhorn,
    faEnvelope: faEnvelope,
    faPalette: faPalette,
    faChartLine: faChartLine,
    faPenNib: faPenNib,
    faSterlingSign: faSterlingSign
};

function AccordionItemComponent({ accItem, activeId, toggleItem }: AccordionItemProps) {
    return (
        <motion.div
            variants={itemVariants}
        >
            <div
                className="border border-neutral-200 mb-1 has-[button:focus-visible]:ring-2 has-[button:focus-visible]:ring-black has-[button:focus-visible]:ring-offset-2"
            >
                <h3>
                    <button
                        className="btn--accordion p-5 flex justify-between items-center cursor-pointer focus-visible:outline-none"
                        onClick={() => toggleItem(accItem.id)}
                        aria-expanded={accItem.id === activeId}
                        aria-controls={`panel-${accItem.id}`}
                        id={`accordion-${accItem.id}`}
                    >
                        <div className="flex justify-start items-center">
                            <div className="p-1 w-10">
                                <FontAwesomeIcon
                                    icon={ICONMAP[accItem.icon] ?? faCode}
                                    className="text-brand-500" />
                            </div>
                            <div className="text-left ml-4">{accItem.label}</div>
                        </div>

                        <div className="p-1 w-10">
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={`text-neutral-300 transition-transform duration-600 ${accItem.id === activeId ? "-rotate-180" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </h3>
                <div
                    id={`panel-${accItem.id}`}
                    role="region"
                    aria-labelledby={`accordion-${accItem.id}`}
                    className={`grid transition-[grid-template-rows] duration-600 ease-in-out ${accItem.id === activeId
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                        }`}
                >
                    <div className="overflow-hidden">
                        <div className="p-5 pt-0">
                            <p>{accItem.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    );
}

export default AccordionItemComponent;