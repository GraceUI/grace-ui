import List from './src/main.vue'

List.install = Vue => {
    Vue.component(List.name, List)
}

export default List