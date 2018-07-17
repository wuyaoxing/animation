import Vue from 'vue'
import BubbleTransitionComponent from './transition-bubble'

const transitionComponent = {
    __transition__bubble__: BubbleTransitionComponent
}

const TRANSITION_INSTANCE = {}

function createTransitionInstance(Component) {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Instance = new Vue({
        el: div,
        render: h => h(Component)
    }).$children[0]

    return Instance
}

function initTransition(TransitionComponent, alias) {
    const instance = createTransitionInstance(TransitionComponent)

    return TRANSITION_INSTANCE[alias] || (
        TRANSITION_INSTANCE[alias] = {
            register: () => {
                return instance.animate('show', false)
            },
            unregister: () => {
                return instance.animate('hide', true)
            }
        }
    )
}

for (const key in transitionComponent) {
    initTransition(transitionComponent[key], key)
}

export default TRANSITION_INSTANCE