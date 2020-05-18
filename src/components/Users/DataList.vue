<template>
    <div ref="datalist" class="datalist">
        <UserCard
            v-for="user of $store.state.usersList"
            :key="user.id"
            :user="user"
        />
    </div>
</template>

<script>
import UserCard from './UserCard'

export default {
    name: 'DataList',
    components: {
        UserCard
    },
    data() {
        return {
            usersList: [
                {id: 0, name: "Inner", surname: "Stagfold", age: 65},
                {id: 1, name: "Inner", surname: "Stagfold", age: 65},
                {id: 2, name: "Inner", surname: "Stagfold", age: 65},
                {id: 3, name: "Inner", surname: "Stagfold", age: 65},
                {id: 4, name: "Inner", surname: "Stagfold", age: 65},
                {id: 5, name: "Inner", surname: "Stagfold", age: 65},
                {id: 6, name: "Inner", surname: "Stagfold", age: 65},
                {id: 7, name: "Inner", surname: "Stagfold", age: 65},
                {id: 8, name: "Inner", surname: "Stagfold", age: 65},
                {id: 9, name: "Inner", surname: "Stagfold", age: 65},
                {id: 10, name: "Inner", surname: "Stagfold", age: 65},
                {id: 11, name: "Inner", surname: "Stagfold", age: 65},
                {id: 12, name: "Inner", surname: "Stagfold", age: 65},
            ]
        }
    },
    methods: {
        setCountColumnGrid() {
            const userdata = document.querySelector(".userdata")
            const widthList = Math.floor((userdata.clientWidth - 500) / 300)
            this.$refs.datalist.style.gridTemplateColumns = `repeat(${widthList}, 1fr)`
        }
    },
    mounted() {
        this.setCountColumnGrid()
    }
}
</script>

<style lang="scss" scoped>

.datalist {
    margin: 150px 10px 0 400px;
    display: grid;
    gap: 10px;
}

</style>