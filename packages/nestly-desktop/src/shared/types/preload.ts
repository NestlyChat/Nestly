export interface EventType { target: { closest: (arg0: string) => any; }; preventDefault: () => void; }
export type ListenerType = (event: Electron.IpcRendererEvent, ...args: any[]) => void;