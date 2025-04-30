<script lang="ts">
    import Homeicon from "@components/design/homeicon.svelte";
</script>

<ul class="serverNav">
    <Homeicon />
    <div class="spaceSeperator"></div>
    <!-- <div class="dummySpace">
        <img class="spaceIcon" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/cf22d390219141.5e11c96d2d9a5.jpg" alt="">
    </div>
    <div class="dummySpace">
        <img class="spaceIcon" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/cf22d390219141.5e11c96d2d9a5.jpg" alt="">
    </div>
    <div class="dummySpace">
        <img class="spaceIcon" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/cf22d390219141.5e11c96d2d9a5.jpg" alt="">
    </div>
    <div class="dummySpace">
        <img class="spaceIcon" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/cf22d390219141.5e11c96d2d9a5.jpg" alt="">
    </div> -->
</ul>

<style>
    .serverNav {
        position: fixed;
        height: 72px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: var(--background-primary);
        width: 100%;
        bottom: 0;
    }
    .spaceSeperator {
        position: relative;
        width: 3px;
        height: 60%;
        background-color: var(--background-secondary);
        margin: 10px;
        border-radius: 20%;
    }
    .dummySpace {
        display: inline-grid;
        width: 60px;
        height: 100%;
        margin: 2px;
        margin-top: 1.2%;
        img {border-radius: 50%;}
    }
</style>
