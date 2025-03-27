import { ipcRenderer, nativeImage } from 'electron';
import { clipboard } from 'electron';
import { contextBridge } from 'electron/renderer';
import type { EventType, ListenerType, CustomEvent } from "@shared/preload.ts";
import OnEvents from 'src/ipcs/onevents';

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