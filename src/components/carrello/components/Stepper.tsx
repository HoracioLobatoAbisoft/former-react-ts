
type PropsStep ={
    stepNumber:number    
}

const Stepper = ({stepNumber} : PropsStep) => {    
    //const cphase3 = "https://localhost:44311/img/StrisciaCarrello_"+ cphase2 + ".png"  ;
    const phase = `https://localhost:44311/img/StrisciaCarrello_${stepNumber}.png`;
    return (
        <div className="mt-[15px] mb-[10px]  flex justify-center">
            <img src={phase} className="hasTooltip" data-hasqtip="9" aria-describedby="qtip-9"/>
        </div>
    )
}

export default Stepper