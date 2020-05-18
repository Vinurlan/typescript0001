<template>
    <div class="usercard">
        <p class="cname">Name: {{ user.name }}</p>
        <p class="csurname">Surname: {{ user.surname }}</p>
        <p class="cage">Age: {{ user.age }}</p>
        <p class="cid">Id: {{ user.id }}</p>
    </div>
</template>

<script>
export default {
    name: 'UserCard',
    props: ["user"]
}
</script>

<style lang="scss" scoped>

.usercard {
    width: 300px;
    height: 200px;
    border: 1px solid rgb(109, 108, 108);
}

</style>