import { JSX } from "react";

export default function IntroGalio() : JSX.Element {
    return (
        <section>
            <div>
                <a 
                    href="https://github.com/refinedev/refine" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 dark:bg-gray-900 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 overflow-hidden border border-gray-300 dark:border-gray-700"
                >
                    <div className="relative">
                        <div className="absolute -inset-1 bg-orange-500 rounded-full opacity-0 dark:opacity-30 blur-sm animate-pulse"></div>
                        <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 16 16" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10"
                        >
                            <path d="M8.00102 1.77396e-07C8.15222 -0.000102159 8.30043 0.0440742 8.42887 0.127529C8.55731 0.210984 8.66086 0.330385 8.72779 0.472218L10.7601 4.78205L15.3065 5.47343C15.456 5.49615 15.5965 5.56217 15.712 5.66403C15.8276 5.76589 15.9135 5.89953 15.9603 6.04985C16.007 6.20016 16.0126 6.36115 15.9765 6.51462C15.9403 6.6681 15.8639 6.80793 15.7557 6.91832L12.4664 10.2736L13.2428 15.0093C13.268 15.165 13.2511 15.325 13.1941 15.4712C13.1371 15.6174 13.0422 15.7441 12.9201 15.837C12.798 15.9299 12.6535 15.9852 12.503 15.9969C12.3524 16.0085 12.2017 15.976 12.0679 15.9029L8.00102 13.6661L3.93415 15.9029C3.80045 15.9763 3.64978 16.0092 3.49916 15.9978C3.34854 15.9864 3.20397 15.9311 3.08177 15.8383C2.95958 15.7455 2.86462 15.6188 2.80762 15.4725C2.75063 15.3262 2.73387 15.1662 2.75923 15.0104L3.53675 10.2724L0.245243 6.91832C0.136786 6.80798 0.0600411 6.66806 0.0237055 6.51442C-0.0126301 6.36078 -0.0071037 6.19957 0.0396584 6.04905C0.0864206 5.89853 0.172549 5.76472 0.288283 5.66278C0.404018 5.56084 0.544731 5.49486 0.694478 5.4723L5.24082 4.78205L7.27426 0.472218C7.34119 0.330385 7.44473 0.210984 7.57317 0.127529C7.70162 0.0440742 7.84982 -0.000102159 8.00102 1.77396e-07Z" fill="#FF9933"/>
                        </svg>
                    </div>
                    <span className="font-semibold text-xs text-gray-500  dark:text-gray-300">
                        <span className="font-bold">3.2K</span>
                        <span> GitHub stars so far</span>
                    </span>
                </a>
            </div>
            <div className=" flex flex-col lg:grid lg:grid-cols-3 gap-5">
                <div className="col-span-2">
                    <h1 className="text-[32px] leading-[40px] tracking-[-0.5%] sm:text-[56px] sm:leading-[72px]">An Open-Source framework for react native</h1>
                    <p className="font-md lg:font-lg">Use the power of react native to easily give life to your future mobile projects.</p>
                    <a href="" className="self-start rounded-3xl !text-gray-100 dark:!text-gray-800 bg-blue-500 dark:bg-cyan-500 transition-[filter] duration-150 ease-in-out hover:brightness-110 py-3 px-4 w-[200px] sm:w-max flex items-center justify-center gap-2 hover:!no-underline">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.63817 4.33485C7.45968 3.87698 8.46639 3.88939 9.2762 4.36769L18.4191 9.76769C19.21 10.2348 19.7 11.0807 19.7 12C19.7 12.9193 19.21 13.7652 18.4191 14.2323L9.2762 19.6323C8.46639 20.1106 7.45968 20.123 6.63817 19.6652C5.81527 19.2065 5.3 18.343 5.3 17.4V6.6C5.3 5.65703 5.81527 4.79348 6.63817 4.33485ZM8.46252 5.74534C8.14253 5.55634 7.74213 5.55128 7.4171 5.73244C7.09346 5.91282 6.9 6.24599 6.9 6.6V17.4C6.9 17.754 7.09346 18.0872 7.4171 18.2676C7.74213 18.4487 8.14253 18.4437 8.46252 18.2547L17.6054 12.8547C17.916 12.6712 18.1 12.3452 18.1 12C18.1 11.6548 17.916 11.3288 17.6054 11.1453L8.46252 5.74534Z" fill="currentColor">
                            </path>
                        </svg>
                        <span className="text-base font-bold">See Docs</span>
                    </a>
                    <button type="button" className="self-start appearance-none focus:outline-none border-none py-3 px-6 rounded-3xl bg-blue-500 dark:bg-refine-cyan-alt bg-opacity-[12px] leading-5 leading-6 overflow-hidden relative group/copy-button hidden landing-sm:block">

                    </button>
                </div>
                <div className="flex flex-start items-center justify-center">
                    <img src="/img/logo.png" alt="galio framework" />
                </div>
            </div>
        </section>
    )
}