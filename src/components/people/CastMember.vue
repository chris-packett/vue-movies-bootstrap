<template>
    <div class="card mb-4 shadow-lg">
        <div class="card-body">
            <div class="card-title text-center">
                <h5>{{ member.name }}</h5>
            </div>
        </div>
        <img 
        src="https://image.tmdb.org/t/p/w500/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg" 
        alt="random" 
        width="150" 
        class="d-flex align-self-center"
        >
        <div class="card-body text-center">
            <button class="btn btn-outline-dark btn-lg">See Other Movies</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "cast-member",
    props: {
        member: Object
    }
}
</script>

<style scoped>
img {
    border-radius: .5em;
}
</style>

        //    <router-link :to="'/castmember/' + member.id">
        //         <button class="btn btn-outline-dark btn-lg">See Other Movies</button>
        //     </router-link>
