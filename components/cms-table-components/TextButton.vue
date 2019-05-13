<template>
    <div>
        <el-button type="text" @click="operate('add')">{{scope.row[colum.prop] | columFilter(colum)}}</el-button>
    </div>
</template>
