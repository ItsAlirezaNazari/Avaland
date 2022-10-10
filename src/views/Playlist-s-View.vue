<template>
  <LayoutView>
    <template v-slot:content>
      <section id="list-playlist">
        <h1>لیست های پخش</h1>
        <div class="list-palylist">
          <PlaylistComponent
            v-for="playlist in playlists"
            :key="playlist.id"
            :playlist="playlist"
          ></PlaylistComponent>
        </div>
      </section>
    </template>
  </LayoutView>
</template>

<script setup>
import PlaylistComponent from "@/components/PlaylistComponent.vue";
import LayoutView from "@/layout/LayoutView.vue";
const playlists = [
  {
    id: 1,
    name: "لیست پخش1",
    creator: "حامد",
    img: "playlist1.jpg",
  },
  {
    id: 1,
    name: "لیست پخش2",
    creator: "وحید",
    img: "playlist2.jpg",
  },
  {
    id: 1,
    name: "لیست پخش3",
    creator: "مصطفی",
    img: "playlist3.jpg",
  },
  {
    id: 1,
    name: "غمگین",
    creator: "علیرضا",
    img: "playlist4.jpg",
  },
  {
    id: 1,
    name: "گلچین شادمهر",
    creator: "وحید",
    img: "playlist5.jpg",
  },
  {
    id: 1,
    name: "عاشقانه",
    creator: "علیرضا",
    img: "playlist6.jpg",
  },
  {
    id: 1,
    name: "گلچین شاد",
    creator: "وحید",
    img: "playlist7.jpg",
  },
  {
    id: 1,
    name: "غمگین2",
    creator: "مصطفی",
    img: "playlist8.jpg",
  },
];
</script>

<style lang="scss" scoped>
#list-playlist {
  padding: 3.5rem 0 5rem 3.5rem;
}
h1 {
  @include font(1.75rem, 700, 1.5rem);
  margin-bottom: 2rem;
}
.list-palylist {
  display: flex;
  gap: 3.854375rem;
  flex-wrap: wrap;
  background-color: #46464666;
  padding: 1.5rem 2rem;
  border-radius: 1.5rem;
}
</style>
