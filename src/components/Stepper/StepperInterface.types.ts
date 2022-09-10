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
    showLineNextStep?: 'hidden'
    tailwindIcon: JSX.Element
    linkTo: string
    stepName: string
    isFinishdStep: boolean
}