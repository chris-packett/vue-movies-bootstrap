<template>
    <div class="card mb-4 shadow-lg">
        <div class="card-body">
            <div class="card-title text-center">
                <h5>{{ member.name }} as {{ member.character }}</h5>
            </div>
        </div>
        <img 
        :src="getImageURL(member.profile_path)" 
        :alt="member.name" 
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
    },
    methods: {
        getImageURL: function(imagePath) {
            return imagePath ? 'https://image.tmdb.org/t/p/w500' + imagePath : '/assets/logo.png'
        }
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
