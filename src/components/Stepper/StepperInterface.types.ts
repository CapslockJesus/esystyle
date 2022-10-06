export interface StepperInterface {
    /**
     * Use this props:
     * showLineNextStep - val: 'hidden' - not required
     * tailwindIcon - JSX Element -> HeroIcon - required
     * linkTo - string - required
     * stepName - string - required
     * isActive - boolean - required
     **/
    steps: Steps[]
}

interface Steps {
    showLineNextStep: boolean
    tailwindIcon: JSX.Element
    linkTo: () => void
    stepName: string
    isFinishdStep: boolean
}