<template>
    <div class="img-wraper" :style="colum.style" @click="operate('tap')">
        <img :src="scope.row[colum.prop] | columFilter(colum)" alt="图片" />
    </div>
</template>

<style scoped lang="scss">
    .img-wraper {
        width: 60px;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
</style>
