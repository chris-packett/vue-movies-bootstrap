<template>
    <div>
    </div>
</template>

<script>
export default {
    name: "cast-member-details",
    data() {
        return {
            id: this.$route.params.id
        }
    },
    props: {
        castMembers: Array
    },
    computed: {
        currentCastMember() {
            return this.castMembers
                .find(castMember => castMember.id == this.id);
        }
    }
}
</script>