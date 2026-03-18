function addTask() {
  const newRowHTML = `<tr>
        <td><select name="date" id="date">
            <option value="needSelect" selected>選択してください</option>
            <option value="one">1日</option>
            <option value="two">2日</option>
            <option value="three">3日</option>
            <option value="four">4日</option>
            <option value="five">5日</option>
            <option value="six">6日</option>
            <option value="seven">7日</option>
            <option value="eight">8日</option>
            <option value="nine">9日</option>
            <option value="ten">10日</option>
            <option value="eleven">11日</option>
            <option value="twelve">12日</option>
            <option value="thirteen">13日</option>
            <option value="fourteen">14日</option>
            <option value="fifteen">15日</option>
            <option value="sixteen">16日</option>
            <option value="seventeen">17日</option>
            <option value="eighteen">18日</option>
            <option value="nineteen">19日</option>
            <option value="twenty">20日</option>
            <option value="twentyone">21日</option>
            <option value="twentytwo">22日</option>
            <option value="twentythree">23日</option>
            <option value="twentyfour">24日</option>
            <option value="twentyfive">25日</option>
            <option value="twentysix">26日</option>
            <option value="twentyseven">27日</option>
            <option value="twentyeight">28日</option>
            <option value="twentynine">29日</option>
            <option value="thirty">30日</option>
            <option value="thirtyone">31日</option>
        </select></td>
        <td><input type="text" id="task[]" placeholder="タイトル(7文字以内)"></td>
        <td><input type="text" id="description[]" placeholder="内容(20文字以内)"></td>
        <td><input type="button" value="削除" onclick="deleteTask(this)"></td>
        </tr>`;
  const buttonRow = document.getElementById("button-row");
  buttonRow.insertAdjacentHTML("beforebegin", newRowHTML);
}

function deleteTask(buttonElement) {
  const row = buttonElement.closest("tr");
  row.remove();
}

document
  .getElementById("calendar-form")
  .addEventListener("submit", async function (event) {
    const formData = new FormData(this);
    event.preventDefault();
    const yearMonthStr = formData.get("year") || "";
    const [yearStr, monthStr] = yearMonthStr.split("-");
    const yearNum = yearStr ? parseInt(yearStr, 10) : 0;
    const monthNum = monthStr ? parseInt(monthStr, 10) : 0;
    const dates = formData.getAll("date[]");
    const titles = formData.getAll("task[]");
    const descriptions = formData.getAll("description[]");
    const tasks = [];

    for (let i = 0; i < titles.length; i++) {
      tasks.push({
        day: dates[i] || "",
        title: titles[i] || "",
        description: descriptions[i] || "",
      });
    }

    const requestData = {
      year: yearNum,
      month: monthNum,
      tasks: tasks,
    };

    const jsonBody = JSON.stringify(requestData);
    const apiUrl =
      "https://calendar-api-service-406088920323.asia-northeast1.run.app/calender";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Nadvqnr4cou7rA3PlW/JAw==`,
          "accept": "application/json",
        },
        body: jsonBody,
      });
      if (!response.ok) {
        throw new Error("APIの呼び出しに失敗しました");
      }

      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = function () {
        const base64data = reader.result;
        const imgElement = document.getElementById("resultImage");
        imgElement.src = base64data;
        imgElement.style.display = "block";
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("エラー:", error);
      alert("画像の取得に失敗しました。");
    }
  });
