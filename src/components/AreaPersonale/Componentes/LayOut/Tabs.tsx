interface TabsProps {
    children?: React.ReactNode;
    classNameDiv?: string;
    classNameUl?: string;
}

export const Tabs = ({children, classNameDiv, classNameUl}:TabsProps) =>{
    return (<>
    <div className={`mb-2 border-b border-gray-200 dark:border-gray-700 ${classNameDiv}`}>
        <ul 
            className={`flex flex-wrap ${classNameUl}`}
            id="myTab" 
            data-tabs-toggle="#myTabContent" 
            role="tablist"
        >
            {children}   
        </ul>
    </div>
</>);
}

interface TabProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    setValue: Function;
}

export const Tab = ({index, value, setValue, children}:TabProps) => {
    return(
        <>
        <li className="mr-1" role="presentation">
            <button 
                className={(index == value)?
                    "inline-block p-1 border-b-4 border-b-[white] border bg-[#ffffff] border-[1px] rounded-t-lg"
                    :
                    "inline-block p-1 border-b-2 border bg-[#f1f1f1] border-[2px] rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                 }
                id={`tab-${index}`} 
                onClick={()=>setValue(index)}
            >
                {children}
            </button>
        </li>
        </>
    );
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    className?: string;
}

export const TabPanel = ({children, index, value, className}: TabPanelProps)=>{
    return (
        <>
            <div className={`${index !== value?`hidden`:`block`} p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${className}`}             
            >
                {children}
            </div>
        </>
    )
}

interface TabContainerProps {
    children?: React.ReactNode;
    className?: string;
}

export const TabContainer =({children, className}:TabContainerProps)=> {
    return(<>
            <div id="TabContainer"
                className={className}
            >
                {children}
            </div>
        </>
    );
}

export default TabPanel;