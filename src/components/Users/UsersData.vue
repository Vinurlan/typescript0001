<template>
    <div class="userdata">
        <Controller />
        <DataList />
    </div>
</template>

<script>
import Controller from './Controller'
import DataList from './DataList'

export default {
    name: 'UserData',
    components: {
        Controller, DataList
    }
}
</script>

<style lang="scss" scoped>

.userdata {
    max-width: 100%;
}

</style>

