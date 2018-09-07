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
import CastMember from './CastMember.vue'
export default {
    name: "cast-members",
    components: {
        CastMember
    },
    props: {
        movieId: String
    },
    mounted: function () {
        this.fetchCastData()
    },
    data: function () {
        return {
            castMembers: []
        }
    },
    methods: {
        fetchCastData: function () {
            const API_KEY = '39df1c4c7a287510f53854893ba3d788'
            let URL = `https://api.themoviedb.org/3/movie/${this.movieId}/credits?api_key=${API_KEY}`
            fetch(URL)
            .then(resp => resp.json())
            .then(castData => {
                console.log(castData)
                this.castMembers = castData.cast
            })
        }
    }
}
</script>


