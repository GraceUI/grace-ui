import Swiper from '../packages/swiper/index.js'
import List from '../packages/list/index.js'

const components = [
    Swiper,
    List
]

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    Swiper,
    List
}