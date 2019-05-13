<template>
    <div>
        <el-button v-for='(btn, index) in colum.btns' :key="index"
            :size="btn.size || 'mini'"
            :type="btn.type || ''"
            @click="operate(btn.flag || 'click')">{{btn.label || '按钮'}}</el-button>
    </div>
</template>
