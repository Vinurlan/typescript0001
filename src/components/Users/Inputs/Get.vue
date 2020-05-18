<template>
    <div class="get">
        <div class="get__id">
            <label for="gId">Find for Id:</label>
            <input ref="inputId" type="number" id="gId" min="1">
            <button @click="getUserForId">Get</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Get',
    methods: {
        getUserForId() {
            const id = this.$refs.inputId.value

            if (!id) {
                console.log("need id")
                return
            }
            
            this.$store.dispatch('getUserForId', id)
        }
    }
}
</script>

<style lang="scss" scoped>

.get {

    label {
        margin: 5px;
    }
    
    button {
        margin: 5px;
    }

}

</style>