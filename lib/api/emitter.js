/**
 * Creates an {@link Emitter}.
 * @param eventEmitter - An event emitter.
 * @param eventName - Event name.
 * @internal
 */
export function _makeEmitter(eventEmitter, eventName = "event") {
    return {
        addListener: (listener, options = {}) => {
            if (options.once) {
                eventEmitter.once(eventName, listener);
            }
            else {
                eventEmitter.addListener(eventName, listener);
            }
        },
        removeListener: (listener) => {
            eventEmitter.removeListener(eventName, listener);
        },
        on: (listener) => {
            eventEmitter.on(eventName, listener);
        },
        off: (listener) => {
            eventEmitter.removeListener(eventName, listener);
        },
        once: (listener) => {
            eventEmitter.once(eventName, listener);
        }
    };
}
