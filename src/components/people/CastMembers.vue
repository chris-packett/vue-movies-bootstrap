<template>
    <div>
        <h3 class="text-center mb-4">Cast Members:</h3>
        <div class="row p-4">
            <div class="col-md-4" v-for="member in castMembers" :key="member.id">
                <CastMember :member="member"/>
            </div>
        </div>
    </div>
</template>

<script>
import CastMember from './CastMember.vue';

export default {
    name: "cast-members",
    components: {
        CastMember
    },
    props: {
        movieId: String
    },
    mounted() {
        this.getCast();
    },
    data() {
        return {
            castMembers: []
        }
    },
    methods: {
        getCast() {
            const URL = `https://api.themoviedb.org/3/movie/${this.movieId}/credits?api_key=${process.env.VUE_APP_API_KEY}`;

            fetch(URL)
            .then(resp => resp.json())
            .then(resp => {
                this.castMembers = resp.cast;
            })
        }
    }
}
</script>