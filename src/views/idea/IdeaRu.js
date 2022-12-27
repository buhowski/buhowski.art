import textData from "./textData";

export default function IdeaRu() {
  return (
    <div className="idea-text">
      {textData.map((data, i) => (
        <div key={i}>
          <div className="idea-block">
            <h2 className="idea-block__title h2">{data.basicRu}</h2>
            <p className="idea-block__text">{data.appSampleRu}</p>
            <h3 className="h3">{data.possibilitiesTitleRu}</h3>
            <ul>
              {data.possibilitiesStarRu.map((item, a) => (
                <li key={a}>
                  {item}
                  <span className="idea-block__star"> *</span>
                </li>
              ))}
              <li>{data.possibilitiesRu}</li>
            </ul>
            <p className="idea-block__desc">
              <span className="idea-block__star">* </span> &ndash;{" "}
              {data.branchDescRu}
            </p>
            <p className="idea-block__info">{data.designRu}</p>
          </div>

          <div className="idea-block">
            <h2 className="h2">{data.conceptTitleRu}</h2>
            <div className="idea-concept">
              <h3 className="h3">{data.journalistRu}</h3>
              {data.journalistInfoRu.map((journalist, j) => (
                <p key={j} className="idea-block__text">
                  {journalist}
                </p>
              ))}
            </div>
            <div className="idea-concept">
              <h3 className="h3">{data.filmTitleRu}</h3>
              {data.filmInfoRu.map((filmInfo, f) => (
                <p key={f} className="idea-block__text">
                  {filmInfo}
                </p>
              ))}
            </div>
          </div>

          <div className="idea-block">
            <h2 className="h2">{data.excursusTitleRu}</h2>
            <p className="idea-block__text">{data.excursusInfoRu}</p>
          </div>

          <div className="idea-block">
            <h2 className="h2">{data.whyTitleRu}</h2>

            {data.whyInfoRu.map((why, b) => (
              <p key={b} className="idea-block__text">
                {why}
              </p>
            ))}
          </div>

          <div className="idea-block idea-block--features">
            <h2 className="h2">{data.featuresTitleRu}</h2>
            <ul>
              {data.featuresItemRu.map((feature, c) => (
                <li key={c}>
                  <span>&plusmn;</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
