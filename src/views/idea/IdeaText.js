import React from "react";
import ideaData from "./ideaData";

export default function IdeaText() {
  return (
    <div className="idea-info">
      {ideaData.map((data, i) => {
        return (
          <div className="idea-text" key={i}>
            <div className="idea-copy">
              <p>
                {new Date().getFullYear()} <span>&copy;</span> A. Tsiomakh
              </p>
            </div>

            <div className="idea-block">
              <h2 className="idea-block__title h2">{data.basicRu}</h2>
              <p className="idea-block__text">{data.appSampleRu}</p>
              <h3 className="h3">{data.possibilitiesTitleRu}</h3>
              <ul>
                {data.possibilitiesStarRu.map((item, a) => {
                  return (
                    <li key={a}>
                      {item}
                      <span className="idea-block__star"> *</span>
                    </li>
                  );
                })}
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
                <p className="idea-block__text"></p>
                <p className="idea-block__text"></p>
                <p className="idea-block__text"></p>
              </div>
              <div className="idea-concept">
                <h3 className="h3"></h3>
                <p className="idea-block__text"></p>
                <p className="idea-block__text"></p>
              </div>
            </div>

            <div className="idea-block">
              <h2 className="h2">Excursus. Начальное производство.</h2>
              <p className="idea-block__text">
                Первичный запуск задействует рубрику Журналистика и рабочий
                имиджборд с идеями, рекламой и продвижением остального, что
                должно способствовать начальному толчку, набору аудитории и
                дальнейшему развитию.
              </p>
            </div>

            <div className="idea-block">
              <h2 className="h2">Почему(?):</h2>
              <p className="idea-block__text">
                Все текущие социальные сети превратились или превращаются в
                “телевизоры былой эпохи”, где вокруг сплошная цензура и поток
                нескончаемой рекламы. Выбор просматриваемого контента всё реже
                остается за пользователем. Поэтому и нужна новая свободная
                площадка, свежий воздух.
              </p>
              <p className="idea-block__text">
                Для Украины это будет первое, своего рода, место для раскрытия
                творческого потенциала, создании и реализации личности,
                открытости и совершенно нового виденья. Здесь и будут собраны
                лучшие возможности воедино, без лишней мишуры и ненужных
                функций, с умопомрачительным минималистически-модернистским
                дизайном, футуристическим ответвлением и максимальной
                отзывчивостью к потребителю.
              </p>
              <p className="idea-block__text">
                На фоне текущей войны в стране и после очевидной победы Украины
                такое место идеально займет свою нишу производства всего выше
                перечисленного.
              </p>
            </div>

            <div className="idea-block idea-block--features">
              <h2 className="h2"></h2>
              <ul>
                <li>
                  <span>&plusmn;</span>
                </li>
                <li>
                  <span>&plusmn;</span>
                </li>
                <li>
                  <span>&plusmn;</span>
                </li>
                <li>
                  <span>&plusmn;</span> Сжатие (качество) картинок. Рассмотреть
                  возможности меньшие со всех зол. Лучше без потери качества.
                </li>
                <li>
                  <span>&plusmn;</span> Сторис/короткие повестки дня.
                </li>
                <li>
                  <span>&plusmn;</span> Попробовать переработать/видоизменить
                  лайки, репости, комменты, etc.
                </li>
                <li>
                  <span>&plusmn;</span> Индивидуальный конструктор
                  эмодзи/метаверс персонажа с неограниченными возможностями
                  добавлять любые детали к чему и куда угодно. Детально обдумать
                  расширение под метавселенную.
                </li>
                <li>
                  <span>&plusmn;</span> Рассмотреть возможность бесплатного
                  онлайн стриминга вседоступных при этом фильмов. Выбор разного
                  качества видео, наилучшее в приоритете.
                </li>
                <li>
                  <span>&plusmn;</span> Различные доступные озвучки (наилучшие
                  выбраны логичными экспертами) и оригинал с субтитрами.
                  Правильный перевод озвучки – не цензурировать выражения с
                  лучше всего подобранными словосочетаниями и голосами которые
                  имеют идеальное сходство с героями.
                </li>
                <li>
                  <span>&plusmn;</span> Добавить возможность к постам создавать
                  платную подписку для юзеров или отдельно выводимый платный
                  контент. Для деталей рассмотреть патреон, бусти, онли фанс,
                  etc.
                </li>
                <li>
                  <span>&plusmn;</span> Простейшая система донатов в различной
                  валюте/криптовалюте. Кнопка должна быть в простой и постоянной
                  доступности для каждого аккаунта.
                </li>
                <li>
                  <span>&plusmn;</span> Рассмотреть возможность расширения
                  рубрик, добавка новых страниц/отраслей под каждый аккаунт.
                  Таким образом каждый пользователь сможет рекламировать свою
                  производственную деятельность. Рассмотреть возможность
                  создавать/добавлять интернет магазин под созданный из
                  несколько популярных стандартных шаблонов с возможностью
                  простой кастомизации сайта под нужды клиента – идет как
                  отдельная страница приложения(как бы приложение в приложении).
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
