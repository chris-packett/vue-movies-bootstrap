<template>
    <div>
        <!-- {{ id }} -->
    </div>
</template>

<script>
export default {
    name: "cast-member-details",
    data: function () {
        return {
            id: this.$route.params.id
        }
    },
    props: {
        castMembers: Array
    },
    computed: {
        currentCastMember: function () {
            return this.castMembers.filter(castMember => castMember.id == this.id)[0]
        }
    }
}
</script>
