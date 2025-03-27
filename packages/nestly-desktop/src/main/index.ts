import { app, BrowserWindow, shell, contextBridge, ipcMain } from "electron";
import path from "node:path";
import "../ipcs/index"

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			preload: path.join(__dirname, "preload.js")
		}
	});

	win.loadURL(
		process.env.NODE_ENV === "production" ? "https://some.url/" : "http://localhost:5173/"
	);
	return win;
}

app.whenReady().then(() => {
	createWindow()
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit()
	}
});