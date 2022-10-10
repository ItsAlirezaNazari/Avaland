<template>
  <LayoutView>
    <template v-slot:content>
      <section>
        <main>
          <!-- ======= Breadcrumbs ======= -->
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb__item"><a href="#">بارگذاری آهنگ</a></li>
              <li class="breadcrumb__item_active" aria-current="page">
                ذخیره اطلاعات
              </li>
            </ol>
          </nav>
          <!-- End Breadcrumbs -->

          <!-- ======= Upload Area ======= -->
          <div class="upload-area">
            <!-- Upload Area Header -->
            <div class="upload-area__header">
              <p>بارگذاری آهنگ</p>
            </div>
            <!-- End Upload Area Header -->
            <!-- Upload Area Body -->
            <div class="upload-area__body">
              <!-- Drop Zoon -->
              <div
                class="drop-zoon"
                @click="readFile"
                @dragover="dragOver"
                @drop="readDropedFile"
              >
                <p class="drop-zoon_paragraph">
                  کلیک کنید یا آهنگ خود را در این قسمت رها کنید
                </p>
                <button class="drop-zoon_button">آپلود آهنگ</button>
                <input
                  type="file"
                  ref="inputMusicFile"
                  class="drop-zoon_file-input"
                  accept="audio/*"
                  @change="selectFile"
                />
              </div>
              <!-- End dropzone -->
              <!-- Upload Area Footer -->
              <div class="upload-area__info">
                <img src="@/assets/icons/bold/info-circle-orange.svg" alt="" />
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </div>
              <!-- End Upload Area Footer -->
            </div>
            <!-- End Upload Area Body -->
          </div>
          <!-- End Upload Area -->
        </main>
      </section>
    </template>
  </LayoutView>
</template>

<script setup>
import { ref } from "vue";
import LayoutView from "@/layout/LayoutView.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const inputMusicFile = ref(null);

const readFile = () => {
  inputMusicFile.value.click();
};

const selectFile = (event) => {
  const file = event.target.files[0];
  uploadFile(file);
};

function uploadFile(file) {
  const reader = new FileReader();
  reader.addEventListener("load", (event) => {
    const result = event.target.result;
    console.log(result);
    router.push({ name: "music-upload-3" });
  });

  reader.addEventListener("progress", (event) => {
    if (event.loaded && event.total) {
      const percent = (event.loaded / event.total) * 100;
      console.log(`Progress: ${Math.round(percent)}`);
    }
  });
  reader.readAsDataURL(file);
}

const dragOver = (event) => {
  event.preventDefault();
};

const readDropedFile = (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  uploadFile(file);
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/music-upload-1.scss";
</style>
