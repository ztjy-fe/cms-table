import cmstable from './components/cms-table.vue'

const cmsTablePlugin = {
	install (Vue) {
		Vue.component('cms-table', cmstable)
	}
}

export default cmsTablePlugin
