import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-linear-to-r from-[#ad2b1b] to-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">

                {/* Logo */}
                <Image
                    src="/images/logo1.png"
                    alt="Defence & Services Personnel’s Welfare Housing Society Logo"
                    width={233}
                    height={16}
                />
            </div>
        </header>
    )
}