import { ipcMain, ipcRenderer, shell } from 'electron';
import { contextBridge } from 'electron/renderer';
import type { EventType, ListenerType } from "@shared/preload.ts";
import OnEvents from 'src/ipcs/onevents';

// [Kaan] - It works?
// @ts-ignore
document.addEventListener('click', (event: EventType) => {
    const target = event.target.closest('a');
    if (target && target.href) {
        event.preventDefault();
        ipcRenderer.send(OnEvents.LinkClicked, {
            href: target.href,
            target: target.target || '_self'
        })
    }
});


const NestlyNative = {
    ipc: {
        send: (channel: string, ...args: any) => ipcRenderer.send(channel, ...args),
        on: (channel: string, listener: ListenerType) => ipcRenderer.on(channel, listener),
        invoke: (channel: string, ...args: any) => ipcRenderer.invoke(channel, ...args)
    }
};

contextBridge.exposeInMainWorld("NestlyNative", NestlyNative);
