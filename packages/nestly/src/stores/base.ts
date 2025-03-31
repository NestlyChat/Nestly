interface Listener {
	(): void;
}

export default class BaseStore {
	#listener = new Set<Listener>();

	public addChangeListener(listener: Listener) {
		this.#listener.add(listener);

		return () => this.#listener.delete(listener);
	}
	public removeChangeListener(listener: Listener) {
		return this.#listener.delete(listener);
	}

	public emitChange() {
		for (const element of this.#listener) {
			element();
		}
	}
}