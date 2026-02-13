import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center justify-center bg-[#efefef]">
            {/* Main Footer Content */}
            <div className="w-full max-w-[1440px] px-6 sm:px-8 md:px-[60px] lg:px-[160px] py-[40px] flex flex-col md:flex-row justify-between items-start border-t border-[#d7d7d7]">

                {/* Left Side: Jithin Sabu */}
                <div className="font-semibold text-[40px] md:text-[54px] leading-[1] md:leading-[49px] text-black mb-15 md:mb-0">
                    <p>Jithin</p>
                    <p>Sabu</p>
                </div>

                {/* Right Side: Links */}
                <div className="flex flex-col gap-[48px] items-start w-full md:w-auto">

                    {/* Let's Talk Section */}
                    <div className="flex flex-col gap-[18px] items-start w-full">
                        <p className="font-medium text-[20px] md:text-[24px] text-black tracking-[-0.48px]">Let’s Talk</p>
                        <div className="flex gap-[12px] w-full flex-row">
                            {/* Email Button */}
                            <Link
                                href="mailto:jithinsabu.mec@gmail.com"
                                className="bg-white rounded-[12px] border border-[#d7d7d7] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)] w-full sm:w-fit h-[48px] px-3 sm:px-4 flex items-center justify-center gap-[8px] sm:gap-[12px] hover:bg-gray-50 transition-colors"
                            >
                                <div className="relative w-[20px] h-[19px] sm:w-[25px] sm:h-[19px]">
                                    <Image src="/assets/gmail-icon.png" alt="Email" fill className="object-contain" />
                                </div>
                                <span className="font-mono font-normal text-[16px] sm:text-[16px] md:text-[16px] text-black uppercase tracking-[-0.5px] whitespace-nowrap">EMAIL ME</span>
                            </Link>

                            {/* Call Button */}
                            <Link
                                href="tel:+353899884326"
                                className="bg-white rounded-[12px] border border-[#d7d7d7] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)] w-full sm:w-fit h-[48px] px-3 sm:px-4 flex items-center justify-center gap-[8px] sm:gap-[12px] hover:bg-gray-50 transition-colors"
                                target="_blank"
                            >
                                <div className="relative w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]">
                                    <Image src="/assets/call-icon.svg" alt="Call" fill className="object-contain" />
                                </div>
                                <span className="font-mono font-normal text-[16px] sm:text-[16px] md:text-[16px] text-black uppercase tracking-[-0.5px] whitespace-nowrap">CALL ME</span>
                            </Link>
                        </div>
                    </div>

                    {/* Follow Me Section */}
                    <div className="flex flex-col gap-[18px] items-start w-full">
                        <p className="font-medium text-[20px] md:text-[24px] text-black tracking-[-0.48px]">Follow me</p>

                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-[12px] w-full xs:w-fit">
                            {/* LinkedIn */}
                            <Link
                                href="https://linkedin.com/in/jithinsabu"
                                target="_blank"
                                className="bg-white rounded-[24px] border border-[#d7d7d7] h-[44px] px-[6px] w-full xs:w-[166px] flex items-center justify-center gap-[8px] hover:bg-gray-50 transition-colors"
                            >
                                <div className="w-[18px] h-[18px] flex items-center justify-center overflow-hidden rounded-none relative">
                                    <Image src="/assets/linkedin-icon.png" alt="LinkedIn" fill className="object-cover" />
                                </div>
                                <span className="font-medium text-[16px] text-black">@jithinsabu</span>
                            </Link>

                            {/* X (Twitter) */}
                            <Link
                                href="https://twitter.com/sabu_jithin"
                                target="_blank"
                                className="bg-white rounded-[24px] border border-[rgba(215,215,215,1)] h-[44px] px-[2px] w-full xs:w-[166px] flex items-center justify-center gap-[8px] hover:bg-gray-50 transition-colors"
                            >
                                <div className="w-[24px] h-[24px] flex items-center justify-center relative">
                                    <Image src="/assets/x-icon.svg" alt="X" fill className="object-contain p-1" />
                                </div>
                                <span className="font-medium text-[16px] text-black">@sabu_jithin</span>
                            </Link>

                            {/* Instagram */}
                            <Link
                                href="https://instagram.com/_jithin.sabu"
                                target="_blank"
                                className="bg-white rounded-[24px] border border-[rgba(215,215,215,1)] h-[44px] px-[6px] w-full xs:w-[166px] flex items-center justify-center gap-[4px] hover:bg-gray-50 transition-colors"
                            >
                                <div className="w-[24px] h-[24px] flex items-center justify-center relative">
                                    <Image src="/assets/instagram-icon.png" alt="Instagram" fill className="object-contain" />
                                </div>
                                <span className="font-medium text-[16px] text-black">@_jithin.sabu</span>
                            </Link>

                            {/* YouTube */}
                            <Link
                                href="https://youtube.com/@JithinSabu"
                                target="_blank"
                                className="bg-white rounded-[24px] border border-[#d7d7d7] h-[44px] px-[6px] w-full xs:w-[166px] flex items-center justify-center gap-[12px] hover:bg-gray-50 transition-colors"
                            >
                                <div className="w-[18px] h-[18px] flex items-center justify-center relative">
                                    <Image src="/assets/youtube-icon.svg" alt="YouTube" fill className="object-contain" />
                                </div>
                                <span className="font-medium text-[16px] text-black">@JithinSabu</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black w-full min-h-[48px] py-4 flex items-center justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-1.5 md:gap-1.5 text-white text-[15px] sm:text-[17px] font-normal font-sans text-center">
                    <span>Made by Jithin </span>
                    <span className="inline-flex items-center gap-1.5 opacity-[0.35]">
                        <span>(and </span>
                        <Link href="https://antigravity.google" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:opacity-100 transition-opacity">
                            <div className="relative w-[15px] h-[14px] inline-block align-middle">
                                <Image src="/assets/google-antigravity-icon.png" alt="Cursor" fill className="object-contain" />
                            </div>
                        </Link>
                        <span>&</span>
                        <Link href="https://cursor.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:opacity-100 transition-opacity">
                            <div className="relative w-[15px] h-[14px] inline-block align-middle">
                                <Image src="/assets/antigravity-icon.svg" alt="Antigravity" fill className="object-contain" />
                            </div>
                        </Link>
                        <span>)</span>
                    </span>
                </div>
            </div>
        </footer>
    );
}
