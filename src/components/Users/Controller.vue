<template>
    <div class="controller">
        <div class="controller__nav">
            <button
                v-for="input of inputs"
                :key="input"
                :class="{input: true, active: currentInput === input}"
                @click="currentInput = input"
            >{{input}}</button>
        </div>
        <div class="controller__input">
            <component :is="currentInputComponent"></component>
        </div>
    </div>
</template>

<script>
import Create from './Inputs/Create'
import Get from './Inputs/Get'
import Delete from './Inputs/Delete'

export default {
    name: 'Controller',
    data() {
        return {
            currentInput: "create",
            inputs: ["create", "get", "delete"],
            comp: [Create, Get, Delete]
        }
    },
    computed: {
        currentInputComponent() {
            return this.comp.find(k => k.name.toLowerCase() === this.currentInput)
        }
    }
}
</script>

<style lang="scss" scoped>

.controller {
    width: 350px;
    height: 400px;
    border: 1px solid rgb(107, 107, 107);
    position: fixed;
    top: 150px;
    left: 10px;

    &__input {
        width: 100%;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>
