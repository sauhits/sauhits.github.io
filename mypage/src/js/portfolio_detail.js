const jsonFilePath = "../portfolio_data/portfolio.json";

const List1 = [
  { title: "技術スタック:", class: "insert_tech-stack" },
  { title: "状態:", class: "insert_status" },
  { title: "詳細:", class: "insert_details" },
  { title: "概略: ", class: "insert_img" },
];

const externalLinksConfig = [
  {
    key: "github",
    img: "../img/GitHub_Invertocat_Black.svg",
    text: "GitHubはこちら",
    className: "insert_github",
  },
  {
    key: "qiita",
    img: "../img/qiita-icon.svg",
    text: "Qiitaはこちら",
    className: "insert_qiita",
  },
  {
    key: "out",
    img: "../img/WEBpage.svg",
    text: "外部公開はこちら",
    className: "insert_external",
  },
];

function createTitle() {
  const Container = document.getElementById(
    "portfolio-detail-title-content-container",
  );
  const Template = document.getElementById("content-template-6");

  if (!Container || !Template) return;

  Container.innerHTML = "";
  const clone = Template.content.cloneNode(true);
  Container.appendChild(clone);
}

function createDescription() {
  const Container = document.getElementById(
    "portfolio-detail-description-content-container",
  );
  const Template = document.getElementById("content-template-5");

  if (!Container || !Template) return;

  Container.innerHTML = "";

  List1.forEach((data) => {
    const clone = Template.content.cloneNode(true);
    clone.querySelector(".mini-content-title").textContent = data.title;
    clone.querySelector(".mini-content-description").classList.add(data.class);
    Container.appendChild(clone);
  });
}

function createExternalLinks(data) {
  const container = document.getElementById(
    "portfolio-detail-external-container",
  );
  const template = document.getElementById("content-template-7");

  if (!container || !template) {
    console.error("External links container or template not found");
    return;
  }

  container.innerHTML = "";

  externalLinksConfig.forEach((config) => {
    if (data[config.key]) {
      const clone = template.content.cloneNode(true);
      clone.querySelector("li").classList.add(config.className);
      clone.querySelector(".external-img").src = config.img;
      const aTag = clone.querySelector(".external-a");
      aTag.href = data[config.key];
      aTag.classList.add(config.className);
      clone.querySelector(".external-text").textContent = config.text;
      container.appendChild(clone);
    }
  });
}

function loadPortfolioDetail() {
  const hash = window.location.hash;

  if (hash.startsWith("#portfolio-detail/")) {
    const targetIdStr = hash.split("/")[1];
    const targetId = Number(targetIdStr);

    if (!targetId) {
      console.error("URLから有効なidが取得できませんでした");
      return;
    }

    fetch(jsonFilePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("ネットワークエラーが発生しました");
        }
        return response.json();
      })
      .then((dataList) => {
        const targetData = dataList.find((item) => item.id === targetId);

        if (targetData) {
          createTitle();
          createDescription();
          createExternalLinks(targetData);
          renderPage(targetData);
        } else {
          console.error("指定されたidに対応するデータが見つかりませんでした");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
}

function renderPage(data) {
  const insertTitles = document.getElementsByClassName("insert_title");
  if (insertTitles.length > 0) insertTitles[0].textContent = data.title;
  if (insertTitles.length > 1) insertTitles[1].textContent = data.title;

  const insertSubtitles = document.getElementsByClassName("insert_subtitle");
  if (insertSubtitles.length > 0)
    insertSubtitles[0].textContent = data.subtitle;

  const insertTech = document.getElementsByClassName("insert_tech-stack");
  if (insertTech.length > 0) insertTech[0].textContent = data.tech;

  const insertStatus = document.getElementsByClassName("insert_status");
  if (insertStatus.length > 0) insertStatus[0].textContent = data.status;

  const insertDetails = document.getElementsByClassName("insert_details");
  if (insertDetails.length > 0) insertDetails[0].textContent = data.description;

  const insertImgs = document.getElementsByClassName("insert_img");
  console.log("insertImgs:", insertImgs);
  if (insertImgs.length > 0) {
    console.log("data.img:", data.img);
    if (data.img) {
      const objectElement = document.createElement("object");
      objectElement.data = data.img;
      objectElement.type = "image/svg+xml";
      objectElement.classList.add("portfolio-summary-img");
      objectElement.textContent = "概略画像";
      insertImgs[0].appendChild(objectElement);
    } else {
      const parentContainer = insertImgs[0].closest(".mini-content");
      if (parentContainer) {
        parentContainer.style.display = "none";
      }
    }
  }
}

window.addEventListener("DOMContentLoaded", loadPortfolioDetail);
window.addEventListener("hashchange", loadPortfolioDetail);
