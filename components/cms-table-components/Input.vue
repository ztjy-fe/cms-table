<template>
    <div>
        <el-input size="mini" v-model="scope.row[colum.prop]" :maxlength="colum.maxLength || 10" :placeholder="colum.placeHolder || ''" @change="operate('change')"></el-input>
    </div>
</template>
