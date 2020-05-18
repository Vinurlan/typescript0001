<template>
    <div class="create">
        <form class="create__form">
            <label for="fname">Name</label>
            <input type="text" name="name" id="fname">

            <label for="fsurname">Surname</label>
            <input type="text" name="surname" id="fsurname">

            <label for="fage">Age</label>
            <input type="number" name="age" id="fage">

            <button type="submit">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Create'
}
</script>

<style lang="scss" scoped>

.create {
    max-width: 250px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;

    &__form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        label {
            margin: 10px 0 0;
            text-align: left;
        }

        input {
            margin: 5px 0;
        }

        button {
            width: 100px;
            margin: 20px auto;
        }
    }
}

</style>