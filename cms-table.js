import cmstable from './components/cms-table.vue'

import fieldMixin from './components/cms-table-components/field-mixin'

import TextButton from './components/cms-table-components/TextButton.vue'
import Image from './components/cms-table-components/Image.vue'
import EditButton from './components/cms-table-components/EditButton.vue'
import ButtonGroup from './components/cms-table-components/ButtonGroup.vue'
import Input from './components/cms-table-components/Input.vue'
import Link from './components/cms-table-components/Link.vue'

const cmsTablePlugin = {
	install (Vue) {
		Vue.mixin(fieldMixin)

		Vue.component('cms-table', cmstable)

		Vue.component('cms-text-button', TextButton)
		Vue.component('cms-image', Image)
		Vue.component('cms-edit-button', EditButton)
		Vue.component('cms-button-group', ButtonGroup)
		Vue.component('cms-input', Input)
		Vue.component('cms-link', Link)
	}
}

export default cmsTablePlugin
