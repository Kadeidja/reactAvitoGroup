import App from "../Styles/App.css";
function TitleParagraph({defaultTitlePara}){
    return (
        <div key={defaultTitlePara.ttlparaid} className="bigttlClass">
            <h2 className="ttlPart">{defaultTitlePara.title}</h2>
            <p className="pPart">{defaultTitlePara.para}</p>
        </div>
    )
}

export default TitleParagraph;