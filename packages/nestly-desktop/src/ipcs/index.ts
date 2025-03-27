import { ipcMain, shell } from "electron";
import OnEvents from "./onevents";

ipcMain.on(OnEvents.LinkClicked, (event, linkDetails) => {
	shell.openExternal(linkDetails.href);
})