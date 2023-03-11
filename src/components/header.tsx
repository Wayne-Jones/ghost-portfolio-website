import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Photography", href: "/photography" },
    { name: "Blog", href: "/blog" },
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="container absolute left-0 right-0">
            <nav
                className="flex max-w-full items-center justify-between py-11"
                aria-label="Navigation">
                <Link href="/" className="uppercase text-2xl font-bold">
                    Wayne Jones
                </Link>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-1.5 inline-flex items-center justify-center rounded-md p-1.5 "
                        onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <BiMenuAltRight className="h-8 w-8" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-base">
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-8 py-6 sm:max-w-sm bg-white dark:bg-dark-gray">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="uppercase text-2xl font-bold">
                            Wayne Jones
                        </Link>
                        <button
                            type="button"
                            className="-m-1.5 rounded-md p-1.5"
                            onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Close menu</span>
                            <HiXMark className="h-8 w-8" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6">
                        <div className="space-y-2 py-6 flex flex-col">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 py-2 px-3 text-base">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Header;
