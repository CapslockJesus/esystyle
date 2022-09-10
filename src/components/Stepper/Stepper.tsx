import React, {FC} from "react";
import '../../tw-esystyle.css';

import {StepperInterface} from "./StepperInterface.types";

export const Stepper: FC<StepperInterface> = ({steps}) => {
    
    return (
        <div className={"mx-4 p-4"}>
            <div className={"flex items-center"}>
                {steps.map(step => (
                    <>
                        <a href={step.linkTo}>
                            <div className={"flex items-center relative"}>
                                <div className={" h-12 w-12 p-2.5 border border-2 border-yellow-400 rounded-full text-yellow-400"}>
                                    {step.tailwindIcon}
                                </div>
                                <div className={"absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-yellow-500"}>{step.stepName}</div>
                            </div>
                        </a>
                        <div className={`${step.showLineNextStep} flex-auto border-t-2 transition duration-500 ease-in-out ${step.isFinishdStep ? 'border-yellow-300' : 'border-gray-300'}`}/>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Stepper;