export default {
	props: ['scope', 'colum'],
	methods: {
		operate (event) {
			this.$emit('operate', event)
		}
	},
	filters: {
		columFilter (val, field) {
			if (field.filter) {
				return field.filter(val)
			} else {
				return val
			}
		}
	}
}
