export type EventType = { target: { closest: (arg0: string) => any; }; preventDefault: () => void; }
export type ListenerType = (event: Electron.IpcRendererEvent, ...args: any[]) => void;

export type CustomEvent = (EventType | Event) & {
    target: {
      closest: (selector: string) => any;
    };
    preventDefault: () => any;
  };
  