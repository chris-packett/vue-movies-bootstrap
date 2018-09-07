<template>
    <div>
        <h3 class="text-center mb-4">Cast Members:</h3>
        <div class="row p-4">
            <div class="col-md-6" v-for="member in castMembers" :key="member.id">
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
    data: function () {
        return {
            castMembers: [
                { name: "John Adams", id: 0 },
                { name: "Adam Smith", id: 1 },
                { name: "Melissa McCarthy", id: 2 },
                { name: "Anna Jones", id: 3 }
            ]
        }
    }
}
</script>


