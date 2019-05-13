<template>
    <div>
        <el-button type="text" @click="operate('add')">{{scope.row[colum.prop] | columFilter(colum)}}</el-button>
    </div>
</template>

<script>
import fieldMixin from '@/components/cms-table-components/field-mixin'

export default {
	mixins: [fieldMixin]
}
</script>
