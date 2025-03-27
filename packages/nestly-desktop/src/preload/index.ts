import { ipcMain, ipcRenderer, nativeImage, shell } from 'electron';
import { clipboard } from 'electron';
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
    /*ipc: {
        send: (channel: string, ...args: any) => ipcRenderer.send(channel, ...args),
        on: (channel: string, listener: ListenerType) => ipcRenderer.on(channel, listener),
        invoke: (channel: string, ...args: any) => ipcRenderer.invoke(channel, ...args)
    },*/
    clipboard: {
        copy: (text: string) => clipboard.writeText(text),
        copyImage: async (src: string) => {
            const image = await fetch(src);
            const buffer = await image.arrayBuffer();
            clipboard.writeImage(nativeImage.createFromBuffer(Buffer.from(buffer)));
        }
    }
};

contextBridge.exposeInMainWorld("NestlyNative", NestlyNative);