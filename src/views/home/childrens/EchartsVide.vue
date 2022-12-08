<template>
    <div class="container">
        <div class="itemleft">
            <Ip>
                <template #main>
                    <One/>
                </template>
            </Ip>
            <Ip>
                <template #main>
                    <Two/>
                </template>
            </Ip>
        </div>
        <div class="itemright">
            <Ip>
                <template #main>
                    <Three/>
                </template>
            </Ip>
            <Ip>
                <template #main>
                    <Four/>
                </template>
            </Ip>
        </div>
    </div>
</template>

<script setup lang="ts">
import Ip from "@/components/ItemPage.vue"
import One from "@/components/one.vue"
import Two from "@/components/two.vue"
import Three from "@/components/three.vue"
import Four from "@/components/four.vue"
</script>

<style lang="scss">
.container{
    width: 100%;
    margin: 0 auto;
    // background-color: gray;
    display: flex;
    .itemleft,.itemright{
        flex: 1;
    }
}
</style>