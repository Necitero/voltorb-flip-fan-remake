declare global {
    interface GlobalEventHandlersEventMap {
        'game-status': CustomEvent
    }
}

export {}
