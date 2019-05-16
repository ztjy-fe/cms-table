<template>
    <div>
        <a class="my-link" :href="scope.row[colum.prop] | columFilter(colum)" :target="colum.target || '_blank'" >{{colum.text || scope.row[colum.prop]}}</a>
    </div>
</template>

<style scoped>
    .my-link {
        color: dodgerblue;
    }
</style>
