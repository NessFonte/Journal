<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name: 'entry', params: {id: 10}})">
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">20</span>
        <span class="mx-1 fs-5">May</span>
        <span class="text-info mx-1 fs-5">2023, saturday</span>
    </div>

    <div class="entry-description">
        Sunt et minim voluptate et commodo voluptate ipsum veniam amet ullamco ex sit. Ut est consectetur eu velit aliqua sit et nulla laborum. Quis labore sunt exercitation do tempor dolor mollit minim quis adipisicing. Labore deserunt fugiat et do adipisicing occaecat laborum quis. Sunt anim deserunt nisi velit irure. Consequat incididunt reprehenderit dolore esse pariatur ex dolor in. Officia sunt enim cupidatat irure dolore consequat eiusmod nisi anim deserunt sint.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}
</style>