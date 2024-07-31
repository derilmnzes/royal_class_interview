
import { ReactNode } from "react";

interface HeaderTitleProps {
    title: string;
    subtitle: string;
    showTiming?: boolean;
    children?: ReactNode
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, subtitle, showTiming = false, children }) => {
    return (
        <div className="mb-10">
            <div className="border-l-[15px] px-2  border-primary_color">
                <p className="text-primary_color">{subtitle}</p>

            </div>
            <div className="flex mt-5 flex-row justify-between items-center">
                <div className="flex-row flex justify-between items-center">
                    <h2 className=" font-semibold text-xl md:text-4xl">{title}</h2>
                    <div className="hidden md:block">
                        {showTiming && <div className="flex md:ml-20 ml-5 flex-row items-center justify-between">
                            {[{
                                title: "Days",
                                time: "03"
                            }, {
                                title: "Hours",
                                time: "23"
                            }, {
                                title: "Minutes",
                                time: "03"
                            }, {
                                title: "Seconds",
                                time: "03"
                            }].map((item, index, array) => (
                                <div key={item.title} className="flex text-center flex-row items-center justify-between">
                                    <div>
                                        <div className="time-unit-title">
                                            <span className="text-xs">{item.title}</span>
                                        </div>
                                        <div className="time-unit-value">
                                            <span className="md:text-3xl text-base font-bold">{item.time}</span>
                                        </div>
                                    </div>
                                    {index < array.length - 1 && (
                                        <div className="md:mx-5 mx-2">
                                            <span className="text-xl">:</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>}
                    </div>
                </div>

                <div >
                    {children}
                </div>
            </div>


        </div>
    );
};


export default HeaderTitle