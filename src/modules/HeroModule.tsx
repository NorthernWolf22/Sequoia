"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

//images and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faUsers } from "@fortawesome/free-solid-svg-icons";
import graph from "@/../public/images/graph.png";
import graph_mob from "@/../public/images/graph_mob.png";

//components
import DoughnutChart from "@/components/DoughnutChart";

function HeroModule() {
    return (
        <section id="about" className="mod-space-lg">
            <div className="cont">
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-12 sm:gap-6">

                    <div className="col-span-4 sm:col-span-12 md:col-span-5 lg:col-span-4 lg:col-start-2 lg:col-end-6 md:pl-5">
                        <div className="h-full flex flex-col justify-center items-start">
                            <div className="body-lg mb-4">About Sequoia</div>
                            <div className="h1 mb-5">A full service marketing agency for B2B growth</div>
                            <p className="mb-10">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.</p>
                            <Link href="#" className="a--btn">Find out more</Link>
                        </div>
                    </div>

                    <div className="col-span-4 sm:col-span-12 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-7 lg:col-end-12 px-5 pt-10 pb-0 md:p-0 md:pr-5">
                        <div className="flex flex-wrap justify-center items-center w-full h-auto">
                            <div className="w-full mb-6">
                                <div className="flex justify-end items-end">

                                    <motion.div
                                        initial={{ x: -80, y: -80, opacity: 0 }}
                                        animate={{ x: 0, y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeOut",
                                        }}
                                        className="rounded-3xl bg-brand-200 w-[calc(50%-16px)] h-35 mr-6 p-5 relative"
                                    >
                                        <span className="hidden xsm:block text-2xl absolute top-5 left-5">7 +</span>
                                        <div className="flex flex-row justify-between items-end h-full w-full">
                                            <span className="hidden xsm:block max-w-16">Senior specialists</span>
                                            <FontAwesomeIcon icon={faUsers} className="fa-3x xsm:fa-2x text-[#F5FEFE]" />
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ x: 80, y: -80, opacity: 0 }}
                                        animate={{ x: 0, y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeOut",
                                        }}
                                        className="rounded-3xl rounded-tr-none bg-gradient-to-r from-[#14b8a6] to-[#09524A]
 w-1/2 h-63 relative"
                                    >
                                        <DoughnutChart
                                            percentage={75}
                                        />
                                    </motion.div>

                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex justify-end items-start">

                                    <motion.div
                                        initial={{ x: -80, y: 80, opacity: 0 }}
                                        animate={{ x: 0, y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeOut",
                                        }}
                                        className="rounded-3xl bg-brand-100 w-[calc(50%-16px)] h-35 mr-6 p-5 relative"
                                    >
                                        <span className="hidden xsm:block text-2xl absolute top-5 left-5">24 +</span>
                                        <div className="flex flex-row justify-between items-end h-full w-full">
                                            <span className="hidden xsm:block max-w-16">Global partners</span>
                                            <FontAwesomeIcon icon={faGlobe} className="fa-3x xsm:fa-2x text-[#F2F2E7]" />
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ x: 80, y: 80, opacity: 0 }}
                                        animate={{ x: 0, y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeOut",
                                        }}
                                        className="rounded-3xl rounded-tl-none bg-brand-900 w-1/2 h-auto p-5 md:p-10 flex flex-col justify-between"
                                    >
                                        <span className="text-2xl text-white mb-5">£194,000 +</span>
                                        {/* mobile image */}
                                        <Image
                                            src={graph_mob}
                                            alt="graph"
                                            className="block sm:hidden"
                                        />
                                        {/* desktop image */}
                                        <Image
                                            src={graph}
                                            alt="graph"
                                            className="hidden sm:block"
                                        />
                                    </motion.div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HeroModule;