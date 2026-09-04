import Image from "next/image";
import Link from "next/link";
import sequoiaLogo from "@/../public/images/sequoia.svg";

function FooterModule() {
    return ( 
        <footer className="mod-space-sm">
            <div className="cont">
                <div className="flex justify-between items-center">
                    <div>Copyright C E Knight</div>
                    <div className="max-h-11 flex row">
                        <Image 
                            src={sequoiaLogo}
                            width={42}
                            height={42}
                            alt="Geometric logo"
                        />
                        <div className="text-4xl font-bold tracking-tighter ml-3.5">Sequoia</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterModule;