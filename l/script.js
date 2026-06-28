const API_URL = 'https://【あなたのCloud RunのURL】/generate';

const streamContainer = document.getElementById('stream-container');
let STREAM_WORDS = [];

async function loadPhrases() {
    try {
        const response = await fetch('phrases.txt');
        const text = await response.text();
        STREAM_WORDS = text.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
        
        if (STREAM_WORDS.length > 0) {
            setInterval(createStreamingText, 250);
        }
    } catch (error) {
        console.error('Failed to load phrases.txt:', error);
    }
}

function createStreamingText() {
    if (STREAM_WORDS.length === 0) return;

    const textElement = document.createElement('div');
    textElement.classList.add('streaming-text');
    
    const randomWord = STREAM_WORDS[Math.floor(Math.random() * STREAM_WORDS.length)];
    textElement.innerText = randomWord;

    const topPosition = Math.random() * 95; 
    const duration = 6 + Math.random() * 12; 
    const fontSize = 14 + Math.random() * 18; 
    const opacity = 0.3 + Math.random() * 0.4; 

    textElement.style.top = `${topPosition}%`;
    textElement.style.animationDuration = `${duration}s`;
    textElement.style.fontSize = `${fontSize}px`;
    textElement.style.opacity = opacity;

    textElement.addEventListener('animationend', () => {
        textElement.remove();
    });

    streamContainer.appendChild(textElement);
}

loadPhrases();

document.getElementById('submitBtn').addEventListener('click', async () => {
    const urlInput = document.getElementById('targetUrl').value;
    const resultArea = document.getElementById('resultArea');
    
    if (!urlInput) {
        alert('URLを入力してください');
        return;
    }

    resultArea.style.display = 'block';
    resultArea.style.backgroundColor = '#e9ecef';
    resultArea.innerText = '生成中...';

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: urlInput })
        });

        const data = await response.json();

        if (response.ok && data.success) {
            resultArea.style.backgroundColor = '#d4edda';
            resultArea.innerHTML = `作成完了！<br><a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
        } else {
            resultArea.style.backgroundColor = '#f8d7da';
            resultArea.innerText = data.error || 'エラーが発生しました';
        }
    } catch (error) {
        resultArea.style.backgroundColor = '#f8d7da';
        resultArea.innerText = 'サーバーとの通信に失敗しました';
    }
});