import textData from "../textData";

export default function IdeaEn() {
  return (
    <div className="idea-text">
      {textData.map((data, i) => (
        <div key={i}>
          <div className="idea-block">
            <h2 className="idea-block__title h2">{data.basicEn}</h2>
            <p className="idea-block__text">{data.appSampleEn}</p>
            <h3 className="h3">{data.possibilitiesTitleEn}</h3>
            <ul>
              {data.possibilitiesStarEn.map((item, a) => (
                <li key={a}>
                  {item}
                  <span className="idea-block__star"> *</span>
                </li>
              ))}
              <li>{data.possibilitiesEn}</li>
            </ul>
            <p className="idea-block__desc">
              <span className="idea-block__star">* </span> &ndash;{" "}
              {data.branchDescEn}
            </p>
            <p className="idea-block__info">{data.designEn}</p>
          </div>

          <div className="idea-block">
            <h2 className="h2">{data.conceptTitleEn}</h2>
            <div className="idea-concept">
              <h3 className="h3">{data.journalistEn}</h3>
              {data.journalistInfoEn.map((journalist, j) => (
                <p key={j} className="idea-block__text">
                  {journalist}
                </p>
              ))}
            </div>
            <div className="idea-concept">
              <h3 className="h3">{data.filmTitleEn}</h3>
              {data.filmInfoEn.map((filmInfo, f) => (
                <p key={f} className="idea-block__text">
                  {filmInfo}
                </p>
              ))}
            </div>
          </div>

          <div className="idea-block">
            <h2 className="h2">{data.excursusTitleEn}</h2>
            <p className="idea-block__text">{data.excursusInfoEn}</p>
          </div>

          <div className="idea-block">
            <h2 className="h2">{data.whyTitleEn}</h2>

            {data.whyInfoEn.map((why, b) => (
              <p key={b} className="idea-block__text">
                {why}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
