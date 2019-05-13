<template>
    <div class="cms-table-wrapper">
        <el-table
            :data="data">
			<template v-for="(colum, index) in fields">
				<el-table-column :key="index" v-if="colum.type!==undefined"
					:type="colum.type"
					:width="colum.width || ''"></el-table-column>
				<el-table-column :key="index" v-if="colum.type===undefined"
					:label="colum.label"
					:prop="colum.prop"
					:width="colum.width || ''">
					<template slot-scope="scope">
						<template v-if="!colum.template && !colum.customTemplate">
							<span>{{scope.row[colum.prop] | columFilter(colum)}}</span>
						</template>
						<component v-if="colum.template" :is="getTemplate(colum.template)" :scope="scope" :colum="colum" @operate="onFieldClick(scope.$index, scope.row, index, $event)"></component>
						<component v-if="colum.customTemplate" :is="colum.customTemplate" :scope="scope" :colum="colum" @operate="onFieldClick(scope.$index, scope.row, index, $event)"></component>
					</template>
				</el-table-column>
			</template>
        </el-table>
    </div>
</template>

<script>
import TextButton from '@/components/cms-table-components/TextButton.vue'
import Image from '@/components/cms-table-components/Image.vue'
import EditButton from '@/components/cms-table-components/EditButton.vue'
import ButtonGroup from '@/components/cms-table-components/ButtonGroup.vue'
import Input from '@/components/cms-table-components/Input.vue'
import Link from '@/components/cms-table-components/Link.vue'

export default {
	components: {
		TextButton
	},
	props: {
		fields: {
			type: Array,
			default () {
				return [{
					label: '第一列',
					prop: 'field1'
				},
				{
					label: '第二列',
					prop: 'field2'
				}]
			}
		},
		data: {
			type: Array,
			default () {
				return [
					{
						field1: '第一列内容',
						field2: '第二列内容'
					}]
			}
		}
	},
	data () {
		return {
			nothing: ''
		}
	},
	methods: {
		getTemplate (template) {
			let component
			switch (template) {
			case 'text-button':
				component = TextButton
				break
			case 'image':
				component = Image
				break
			case 'edit-button':
				component = EditButton
				break
			case 'button-group':
				component = ButtonGroup
				break
			case 'input':
				component = Input
				break
			case 'link':
				component = Link
				break
			}
			return component
		},
		onFieldClick (rowindex, row, index, event) {
			if (this.fields[index].operateCallback) {
				this.fields[index].operateCallback(rowindex, event, row)
			}
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
</script>
