import textData from "../textData";

export default function IdeaUa() {
  return (
    <div className="idea-text">
      {textData.map((data, i) => (
        <div key={i}>
          <div className="idea-block">
            <h2 className="idea-block__title h2">{data.basicUa}</h2>
            <p className="idea-block__text">{data.appSampleUa}</p>
            <h3 className="h3">{data.possibilitiesTitleUa}</h3>
            <ul>
              {data.possibilitiesStarUa.map((item, a) => (
                <li key={a}>
                  {item}
                  <span className="idea-block__star"> *</span>
                </li>
              ))}
              <li>{data.possibilitiesUa}</li>
            </ul>
            <p className="idea-block__desc">
              <span className="idea-block__star">* </span> &ndash;{" "}
              {data.branchDescUa}
            </p>
            <p className="idea-block__info">{data.designUa}</p>
          </div>

          <div className="idea-block">
            <h2 className="h2">{data.conceptTitleUa}</h2>
            <div className="idea-concept">
              <h3 className="h3">{data.journalistUa}</h3>
              {data.journalistInfoUa.map((journalist, j) => (
                <p key={j} className="idea-block__text">
                  {journalist}
                </p>
              ))}
            </div>
            <div className="idea-concept">
              <h3 className="h3">{data.filmTitleUa}</h3>
              {data.filmInfoUa.map((filmInfo, f) => (
                <p key={f} className="idea-block__text">
                  {filmInfo}
                </p>
              ))}
            </div>
          </div>

          <div className="idea-block">
            <h2 className="h2">{data.excursusTitleUa}</h2>
            <p className="idea-block__text">{data.excursusInfoUa}</p>
          </div>

          <div className="idea-block">
            <h2 className="h2">{data.whyTitleUa}</h2>

            {data.whyInfoUa.map((why, b) => (
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
