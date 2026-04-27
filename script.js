* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0f0f16;
  color: white;
}

header {
  text-align: center;
  padding: 30px 15px;
  background: #181825;
}

header h1 {
  margin: 0;
  font-size: 2rem;
}

header p {
  color: #bbb;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  flex-wrap: wrap;
}

input {
  padding: 12px;
  width: 260px;
  border-radius: 8px;
  border: none;
}

button {
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background: #9146ff;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background: #772ce8;
}

.stream-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 15px;
  padding: 20px;
}

.stream-card {
  background: #1f1f2e;
  border-radius: 12px;
  overflow: hidden;
}

.stream-card h2 {
  font-size: 1rem;
  padding: 10px;
  margin: 0;
}

iframe {
  width: 100%;
  height: 300px;
  border: none;
}
