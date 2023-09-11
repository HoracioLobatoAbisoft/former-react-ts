import SectionEnviaFile from "./SectionEnviaFile"
import SectionEnviaFileDirettamente from "./SectionEnviaFileDirettamente";
import SectionFileInviato from "./SectionFileInviato"
type FileSectionPros = {
    step: number;
    props?: any;
}
const FileSection  = ({step, props}: FileSectionPros) => {
    const Section: { [key: number]: any } = {
        1: <SectionEnviaFile  {...props}/>,
        2: <SectionFileInviato {...props} />,       
        3: <SectionEnviaFileDirettamente {...props} />       
    }
    return (
        <>
            {Section[step]}
        </>
    )
}

export default FileSection;