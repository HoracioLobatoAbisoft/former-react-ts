interface Props {
    htmlString:string
}
export const HTMLRender = ({htmlString}:Props) => {
    const createMarkup = () => {
        return { __html: htmlString };
      };
    return <div dangerouslySetInnerHTML={createMarkup()} />;
}