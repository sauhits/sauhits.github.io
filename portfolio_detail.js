const jsonFilePath = "./portfolio_data/portfolio.json";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const targetId = Number(urlParams.get("id"));

  if (targetId == null) {
    console.error("URLにidパラメータが見つかりませんでした");
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
        renderPage(targetData);
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
});

// 画面表示用の関数
function renderPage(data) {
  document.getElementsByClassName("insert_title")[0].textContent = data.title;
  document.getElementsByClassName("insert_title")[1].textContent = data.title;
  document.getElementsByClassName("insert_subtitle")[0].textContent =
    data.subtitle;
  document.getElementsByClassName("insert_tech-stack")[0].textContent =
    data.tech;
  document.getElementsByClassName("insert_status")[0].textContent = data.status;
  document.getElementsByClassName("insert_details")[0].textContent =
    data.description;

  if (data.github == null) {
    document.getElementsByClassName("insert_github")[0].style.display = "none";
  } else {
    document.getElementsByClassName("insert_github")[0].href = data.github;
  }
  if (data.qiita == null) {
    document.getElementsByClassName("insert_qiita")[0].style.display = "none";
  } else {
    document.getElementsByClassName("insert_qiita")[0].href = data.qiita;
  }
  if (data.out == null) {
    document.getElementsByClassName("insert_external")[0].style.display =
      "none";
  } else {
    document.getElementsByClassName("insert_external")[0].href = data.out;
  }
}
