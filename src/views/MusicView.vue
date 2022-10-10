<template>
  <LayoutView>
    <template v-slot:content>
      <ModalComponent v-show="removeMusicModal" @closeModal="removeMusic">
        <template v-slot:body>
          <div class="remove-music">
            <p class="remove-music__message">
              آیا از حذف این آهنگ اطمینان دارید؟
            </p>
            <button class="remove-music__remove-btn" @click="confirmRemove">
              حذف
            </button>
            <button class="remove-music__cancel-btn" @click="removeMusic">
              لغو
            </button>
          </div>
        </template>
      </ModalComponent>
      <ModalComponent v-show="editMusicModal" @closeModal="modifyMusic">
        <template v-slot:body>
          <div class="edit-music">
            <form action="/" method="post" enctype="multipart/form-data">
              <div class="row wrap">
                <div class="col65">
                  <div class="nim">
                    <div class="form-text-item">
                      <label for="music-name">نام آهنگ</label>
                      <input
                        type="text"
                        id="music-name"
                        name="music-name"
                        value="اشارات"
                      />
                    </div>
                    <!-- End Form Text Item -->
                    <div class="form-text-item">
                      <label for="album-name">نام آلبوم</label>
                      <input
                        type="text"
                        id="album-name"
                        name="album-name"
                        value="اشارات"
                      />
                    </div>
                    <!-- End Form Text Item -->
                  </div>

                  <!-- </div>
											<div class="col"> -->
                  <div class="nim">
                    <div class="form-text-item">
                      <label for="singer">نام خواننده</label>
                      <input
                        type="text"
                        id="singer"
                        name="singer"
                        value=" محمدرضا شجریان و همایون شجریان"
                      />
                    </div>
                    <!-- End Form Text Item -->
                    <div class="form-text-item">
                      <label for="duration">مدت زمان آهنگ</label>
                      <input
                        type="text"
                        id="duration"
                        name="duration"
                        value="09:00"
                      />
                    </div>
                    <!-- End Form Text Item -->
                  </div>
                </div>
                <!-- End Col -->
                <div class="col30">
                  <div class="form-photo-item">
                    <div class="overlay">
                      <img src="@/assets/icons/linear/camera.svg" alt="" />
                      <p>بارگذاری عکس</p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      name="music-cover"
                      id="music-cover"
                    />
                  </div>
                  <!-- End Form Photo Item -->
                </div>
                <!-- End Col -->
              </div>
              <!-- End row -->
              <div class="row">
                <div class="col">
                  <div class="form-text-item">
                    <label for="lyric">متن آهنگ</label>
                    <textarea
                      name="lyric"
                      id="lyric"
                      value="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد"
                    >
                    </textarea>
                  </div>
                  <!-- End Form Text Item -->
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->
              <div class="row">
                <div class="col">
                  <div class="form-button-item">
                    <button type="button" @click="submit" class="active-btn">
                      ذخیره اطلاعات
                    </button>
                    <button
                      type="button"
                      @click="modifyMusic"
                      class="in-active-btn"
                    >
                      لغو
                    </button>
                  </div>
                  <!-- End Form Button Item -->
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->
            </form>
          </div>
        </template>
      </ModalComponent>
      <ModalComponent v-show="playlistModal" @closeModal="addToPlaylist">
        <template v-slot:header>
          <div class="tab">
            <div class="tab__select">
              <input
                v-model="selectedtab"
                type="radio"
                name="tab"
                id="create-playlist"
                value="create-playlist"
                checked
              />
              <label for="create-playlist"> ایجاد لیست پخش </label>
              <input
                v-model="selectedtab"
                type="radio"
                name="tab"
                id="select-playlist"
                value="select-playlist"
              />
              <label for="select-playlist"> انتخاب لیست پخش </label>
            </div>
            <div calss="tab__close-icon" @click="addToPlaylist">
              <i>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.16992 14.83L14.8299 9.16998"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.8299 14.83L9.16992 9.16998"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
            </div>
          </div>
          <hr />
        </template>
        <template v-slot:body>
          <div v-if="selectedtab === 'create-playlist'">
            <div class="playlist-input">
              <label for="playlist-name">نام لیست پخش</label>
              <div>
                <input type="text" name="playlist-name" autofocus />
                <button>ذخیره</button>
              </div>
            </div>
            <div class="playlist-music-input">
              <div class="music">
                <figure class="music__image">
                  <img src="@/assets/images/music2.jpg" alt="" />
                </figure>
                <div class="music__info info">
                  <p class="info__name">باطل</p>
                  <p class="info__singer">شادمهر عقیلی</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="select-playlists">
              <label for="filter">نام لیست پخش</label><br />
              <input
                type="text"
                id="filter"
                name="filter-playlists"
                autofocus
              />
            </div>
            <div class="playlists-container">
              <h1>لیست های پخش</h1>
              <div v-for="playlist in playlists" :key="playlist.id">
                <div class="playlist">
                  <div class="playlist__intro intro">
                    <figure class="playlist__image">
                      <img
                        :src="require(`@/assets/images/${playlist.img}`)"
                        alt=""
                      />
                    </figure>
                    <div class="playlist__info info">
                      <p class="info__name">{{ playlist.name }}</p>
                      <p class="info__song-count">
                        {{ playlist.songCount }} آهنگ
                      </p>
                    </div>
                  </div>
                  <button class="playlist__add-btn">
                    اضافه کردن به لیست پخش
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:footer>
          <hr v-if="selectedtab === 'create-playlist'" />
          <div v-if="selectedtab === 'create-playlist'" class="similar-musics">
            <h1 class="similar-musics__header">آهنگ های مشابه</h1>
            <div class="similar-musics__body">
              <div
                v-for="music in similarMusics"
                :key="music.id"
                class="similar-musics__container"
              >
                <div>
                  <figure class="similar-musics-info__image">
                    <img src="@/assets/images/music1.jpg" alt="" />
                  </figure>
                  <div class="similar-musics-info info">
                    <p class="info__name">عوض نمیشی</p>
                    <p class="info__singer">شادمهر عقیلی</p>
                  </div>
                </div>
                <button class="similar-musics__add-btn">
                  اضافه کردن به لیست پخش
                </button>
              </div>
            </div>
          </div>
        </template>
      </ModalComponent>
      <section class="music-detail">
        <figure>
          <img
            class="music-detail__image"
            src="@/assets/images/music2.jpg"
            alt=""
          />
          <button class="music-detail__play-btn">
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12V8.44C4 4.02 7.13 2.21 10.96 4.42L14.05 6.2L17.14 7.98C20.97 10.19 20.97 13.81 17.14 16.02L14.05 17.8L10.96 19.58C7.13 21.79 4 19.98 4 15.56V12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
          </button>
        </figure>
        <div>
          <h1 class="music-detail__name">باطل</h1>
          <div class="music-detail__meta-data meta-data">
            <div class="meta-data__item">
              <i>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1605 11.62C12.1305 11.62 12.1105 11.62 12.0805 11.62C12.0305 11.61 11.9605 11.61 11.9005 11.62C9.00055 11.53 6.81055 9.25 6.81055 6.44C6.81055 3.58 9.14055 1.25 12.0005 1.25C14.8605 1.25 17.1905 3.58 17.1905 6.44C17.1805 9.25 14.9805 11.53 12.1905 11.62C12.1805 11.62 12.1705 11.62 12.1605 11.62ZM12.0005 2.75C9.97055 2.75 8.31055 4.41 8.31055 6.44C8.31055 8.44 9.87055 10.05 11.8605 10.12C11.9105 10.11 12.0505 10.11 12.1805 10.12C14.1405 10.03 15.6805 8.42 15.6905 6.44C15.6905 4.41 14.0305 2.75 12.0005 2.75Z"
                    fill="#FFA928"
                  />
                  <path
                    d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z"
                    fill="#FFA928"
                  />
                </svg>
              </i>
              <p>شادمهر عقیلی</p>
            </div>
            <div class="meta-data__item">
              <i>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="#FFA928"
                  />
                  <path
                    d="M15.7101 15.93C15.5801 15.93 15.4501 15.9 15.3301 15.82L12.2301 13.97C11.4601 13.51 10.8901 12.5 10.8901 11.61V7.51001C10.8901 7.10001 11.2301 6.76001 11.6401 6.76001C12.0501 6.76001 12.3901 7.10001 12.3901 7.51001V11.61C12.3901 11.97 12.6901 12.5 13.0001 12.68L16.1001 14.53C16.4601 14.74 16.5701 15.2 16.3601 15.56C16.2101 15.8 15.9601 15.93 15.7101 15.93Z"
                    fill="#FFA928"
                  />
                </svg>
              </i>
              <p>03:44</p>
            </div>
          </div>
          <div class="music-detail__icons">
            <i>
              <svg
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 32.975C17.535 32.975 17.085 32.915 16.71 32.78C10.98 30.815 1.875 23.84 1.875 13.535C1.875 8.28499 6.12 4.02499 11.34 4.02499C13.875 4.02499 16.245 5.01499 18 6.78499C19.755 5.01499 22.125 4.02499 24.66 4.02499C29.88 4.02499 34.125 8.29999 34.125 13.535C34.125 23.855 25.02 30.815 19.29 32.78C18.915 32.915 18.465 32.975 18 32.975ZM11.34 6.27499C7.365 6.27499 4.125 9.52999 4.125 13.535C4.125 23.78 13.98 29.48 17.445 30.665C17.715 30.755 18.3 30.755 18.57 30.665C22.02 29.48 31.89 23.795 31.89 13.535C31.89 9.52999 28.65 6.27499 24.675 6.27499C22.395 6.27499 20.28 7.33999 18.915 9.18499C18.495 9.75499 17.535 9.75499 17.115 9.18499C15.72 7.32499 13.62 6.27499 11.34 6.27499Z"
                  fill="white"
                />
              </svg>
            </i>
            <i>
              <svg
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.9304 20.105C30.3604 20.105 29.8804 19.67 29.8054 19.1C29.4454 15.71 27.6154 12.635 24.7954 10.685C24.2854 10.325 24.1654 9.63503 24.5104 9.12503C24.8704 8.61503 25.5754 8.49503 26.0704 8.84003C29.4304 11.165 31.5904 14.825 32.0254 18.86C32.0854 19.475 31.6504 20.03 31.0204 20.105C31.0054 20.105 30.9604 20.105 30.9304 20.105Z"
                  fill="white"
                />
                <path
                  d="M5.23584 20.1799C5.19084 20.1799 5.16084 20.1799 5.11584 20.1799C4.50084 20.1049 4.05084 19.5499 4.11084 18.9349C4.51584 14.8999 6.66084 11.2549 9.97584 8.8999C10.4858 8.5399 11.1908 8.6599 11.5508 9.1699C11.9108 9.6799 11.7908 10.3849 11.2808 10.7449C8.49083 12.7099 6.69084 15.7849 6.34584 19.1749C6.30084 19.7449 5.80584 20.1799 5.23584 20.1799Z"
                  fill="white"
                />
                <path
                  d="M18.0899 34.415C15.8699 34.415 13.7549 33.905 11.7749 32.915C11.2199 32.63 10.9949 31.955 11.2799 31.4C11.5649 30.845 12.2399 30.62 12.7949 30.905C16.0349 32.54 19.9349 32.57 23.2049 30.995C23.7599 30.725 24.4349 30.965 24.7049 31.52C24.9749 32.075 24.7349 32.75 24.1799 33.02C22.2599 33.95 20.2199 34.415 18.0899 34.415Z"
                  fill="white"
                />
                <path
                  d="M18.0899 13.16C15.1649 13.16 12.7949 10.79 12.7949 7.86501C12.7949 4.94001 15.1649 2.57001 18.0899 2.57001C21.0149 2.57001 23.3849 4.94001 23.3849 7.86501C23.3849 10.79 20.9999 13.16 18.0899 13.16ZM18.0899 4.83501C16.4099 4.83501 15.0449 6.20001 15.0449 7.88001C15.0449 9.56001 16.4099 10.925 18.0899 10.925C19.7699 10.925 21.1349 9.56001 21.1349 7.88001C21.1349 6.20001 19.7549 4.83501 18.0899 4.83501Z"
                  fill="white"
                />
                <path
                  d="M7.24422 31.505C4.31922 31.505 1.94922 29.135 1.94922 26.21C1.94922 23.3 4.31922 20.915 7.24422 20.915C10.1692 20.915 12.5392 23.285 12.5392 26.21C12.5392 29.12 10.1692 31.505 7.24422 31.505ZM7.24422 23.165C5.56422 23.165 4.19922 24.53 4.19922 26.21C4.19922 27.89 5.56422 29.255 7.24422 29.255C8.92422 29.255 10.2892 27.89 10.2892 26.21C10.2892 24.53 8.92422 23.165 7.24422 23.165Z"
                  fill="white"
                />
                <path
                  d="M28.7559 31.505C25.8309 31.505 23.4609 29.135 23.4609 26.21C23.4609 23.3 25.8309 20.915 28.7559 20.915C31.6809 20.915 34.0509 23.285 34.0509 26.21C34.0359 29.12 31.6659 31.505 28.7559 31.505ZM28.7559 23.165C27.0759 23.165 25.7109 24.53 25.7109 26.21C25.7109 27.89 27.0759 29.255 28.7559 29.255C30.4359 29.255 31.8009 27.89 31.8009 26.21C31.7859 24.53 30.4359 23.165 28.7559 23.165Z"
                  fill="white"
                />
              </svg>
            </i>
            <DropdownComponent>
              <template #toggle>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-3b104551=""
                >
                  <path
                    d="M14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.5"
                    data-v-3b104551=""
                  ></path>
                  <path
                    d="M14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.5"
                    data-v-3b104551=""
                  ></path>
                  <path
                    d="M14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.5"
                    data-v-3b104551=""
                  ></path>
                </svg>
              </template>

              <DropdownMenu>
                <DropdownItem @click="addToPlaylist">
                  <template #icon>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="#FFA928"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.90024 16.53C9.38024 16.01 10.1203 16.05 10.5403 16.62L11.1403 17.42C11.6103 18.05 12.3902 18.05 12.8602 17.42L13.4503 16.63C13.8703 16.07 14.6102 16.03 15.0902 16.54C16.1402 17.66 16.9902 17.29 16.9902 15.72V9.09C16.9902 6.72 16.4302 6.13 14.2102 6.13H9.77023C7.55023 6.13 6.99023 6.72 6.99023 9.09V15.72C7.00023 17.27 7.86024 17.64 8.90024 16.53Z"
                        stroke="#FFA928"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </template>
                  اضافه کردن به لیست پخش
                </DropdownItem>

                <DropdownItem @click="modifyMusic">
                  <template #icon>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                        stroke="#FFA928"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z"
                        stroke="#FFA928"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.9102 4.15002C15.5802 6.54002 17.4502 8.41002 19.8502 9.09002"
                        stroke="#FFA928"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </template>
                  ویرایش آهنگ
                </DropdownItem>

                <DropdownItem @click="removeMusic">
                  <template #icon>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                        stroke="#F54444"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                        stroke="#F54444"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.8504 9.14001L18.2004 19.21C18.0904 20.78 18.0004 22 15.2104 22H8.79039C6.00039 22 5.91039 20.78 5.80039 19.21L5.15039 9.14001"
                        stroke="#F54444"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.3301 16.5H13.6601"
                        stroke="#F54444"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5 12.5H14.5"
                        stroke="#F54444"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </template>
                  حذف آهنگ
                </DropdownItem>
              </DropdownMenu>
            </DropdownComponent>
          </div>
        </div>
        <div class="lyric-container">
          <p class="music-detail__lyric">
            اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون که
            پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن
            دریا دلش تنگه ببینه ما دو تا رو با هم اون که با خودخواهیاش این عشقو
            باطل کرد بهم بگو تو بودی یا من اون که پامونو رفیق موج و ساحل کرد
            خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا
            رو با هم
          </p>
          <button class="read-more">
            مشاهده بیشتر
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.72281 6.01374C4.53281 6.01374 4.34281 5.94374 4.19281 5.79374L0.662813 2.26374C0.372813 1.97374 0.372813 1.49374 0.662813 1.20374C0.952812 0.913737 1.43281 0.913737 1.72281 1.20374L4.72281 4.20374L7.72281 1.20374C8.01281 0.913737 8.49281 0.913737 8.78281 1.20374C9.07281 1.49374 9.07281 1.97374 8.78281 2.26374L5.25281 5.79374C5.10281 5.94374 4.91281 6.01374 4.72281 6.01374Z"
                fill="#FFA928"
              />
            </svg>
          </button>
        </div>
      </section>
      <section class="related-musics">
        <h1 class="related-musics__header">محبوب ترین ها از همین خواننده</h1>
      </section>

      <swiper
        :slidesPerView="6.5"
        :spaceBetween="30"
        :slidesPerGroup="1"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="music in musics" :key="music.id">
          <MusicComponent :music="music"></MusicComponent>
        </swiper-slide>
      </swiper>
    </template>
  </LayoutView>
</template>

<script setup>
import MusicComponent from "@/components/MusicComponent.vue";
import ModalComponent from "@/components/Modal/ModalComponent.vue";
import DropdownComponent from "@/components/Dropdown/DropdownComponent.vue";
import DropdownMenu from "@/components/Dropdown/DropdownMenu.vue";
import DropdownItem from "@/components/Dropdown/DropdownItem.vue";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LayoutView from "@/layout/LayoutView.vue";

let selectedtab = ref("create-playlist");

const similarMusics = [
  {
    name: "عوض نمیشی",
    singer: "شادمهر عقيلي",
    img: "@/assets/images/music1.jpg",
    id: 1,
  },
  {
    name: "خواب خوش",
    singer: "شادمهر عقيلي",
    img: "@/assets/images/music2.jpg",
    id: 2,
  },
  {
    name: "عوض نمیشی",
    singer: "شادمهر عقيلي",
    img: "@/assets/images/music3.jpg",
    id: 3,
  },
];

const playlists = [
  {
    name: "سنتی ایرانی",
    songCount: 22,
    img: "music1.jpg",
    id: 1,
  },
  {
    name: "لیست پخش1",
    songCount: 8,
    img: "music1.jpg",
    id: 1,
  },
  {
    name: "غمگین",
    songCount: 32,
    img: "music1.jpg",
    id: 1,
  },
];

let modules = [Pagination, Navigation];

const musics = [
  {
    id: 1,
    name: "غلط کردم",
    img: "music1.jpg",
  },
  {
    id: 2,
    name: "غلط کردم",
    img: "music1.jpg",
  },
  {
    id: 3,
    name: "غلط کردم",
    img: "music1.jpg",
  },
  {
    id: 4,
    name: "غلط کردم",
    img: "music1.jpg",
  },
  {
    id: 5,
    name: "غلط کردم",
    img: "music1.jpg",
  },
  {
    id: 6,
    name: "غلط کردم",
    img: "music1.jpg",
  },
  {
    id: 7,
    name: "غلط کردم",
    img: "music1.jpg",
  },
  {
    id: 8,
    name: "غلط کردم",
    img: "music1.jpg",
  },
  {
    id: 9,
    name: "غلط کردم",
    img: "music1.jpg",
  },
  {
    id: 10,
    name: "غلط کردم",
    img: "music1.jpg",
  },
  {
    id: 11,
    name: "غلط کردم",
    img: "music1.jpg",
  },
  {
    id: 12,
    name: "غلط کردم",
    img: "music1.jpg",
  },
];

let removeMusicModal = ref(false);
let playlistModal = ref(false);
let editMusicModal = ref(false);

function addToPlaylist() {
  playlistModal.value = !playlistModal.value;
}

function modifyMusic() {
  editMusicModal.value = !editMusicModal.value;
}

function removeMusic() {
  removeMusicModal.value = !removeMusicModal.value;
}

function confirmRemove() {
  removeMusic();
  alert("موزیک با موفقیت حذف شد!");
}

function submit() {
  modifyMusic();
  alert("ویرایش موزیک با موفقیت اتجام شد!");
}
</script>

<style lang="scss" scoped>
.music-detail {
  padding: 3.25rem;
  margin-top: 3.25rem;
  height: 20.625rem;
  background-image: url("@/assets/images/music-details-background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  position: relative;
  z-index: 0;

  &__image {
    border-radius: 1.875rem;
    width: 250px;
    height: 250px;
  }

  figure {
    position: relative;

    button {
      position: absolute;
      bottom: -20px;
      right: -20px;
    }
  }

  figure + div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 1.5rem;
    margin: 0 5rem 0 6.25rem;
  }

  &__name {
    @include font(2rem, 900, 2.8rem);
  }

  .meta-data {
    position: relative;
    margin: 0 5rem 0 6.25rem;
    display: flex;
    gap: 2.875rem;
    margin: 1.2rem 0;
    align-items: center;

    div:nth-child(1)::after {
      content: "";
      width: 1px;
      height: 15px;
      background: $inactive-color;
      position: absolute;
      left: 6.5625rem;
    }

    &__item {
      display: flex;
      gap: 0.7875rem;
      white-space: nowrap;
      align-items: center;

      p {
        @include font(1.125rem, 500, 1.575rem, $inactive-color);
      }

      i {
        width: 24px;
        height: 24px;
      }
    }
  }

  &__icons {
    display: flex;
    gap: 1.5rem;
    white-space: nowrap;
    align-items: center;

    i {
      width: 36px;
      height: 36px;
      cursor: pointer;
    }

    i:last-child {
      width: 24px;
      height: 24px;
    }
  }

  .lyric-container {
    max-width: 500px;
  }

  .read-more {
    margin-top: 0.625rem;
    background-color: transparent;
    @include font(0.875rem, 400, 1.5rem, $active-color);
    svg {
      margin-right: 0.75rem;
    }
  }

  &__play-btn {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background-color: $active-color;
  }
}

.related-musics {
  margin-top: 4.5rem;

  &__header {
    @include font(1.25rem, 700, 1.5rem);
    margin-bottom: 2.5rem;
  }
}

.remove-music {
  &__message {
    @include font(1.125rem, 600, 1.5rem);
  }

  &__remove-btn {
    width: 19.375rem;
    height: 3.5rem;
    background-color: #f54444;
    @include font(1rem, 700, 1.4rem);
    border-radius: 0.5rem;
    margin-top: 1.5rem;
  }

  &__cancel-btn {
    width: 13.125rem;
    height: 3.5rem;
    background-color: #464646;
    @include font(1rem, 700, 1.4rem);
    border-radius: 0.5rem;
    margin-right: 1.5rem;
  }
}

.edit-music {
  width: 78.875rem;
  border-radius: 16px;

  .row {
    display: flex;
    margin-top: 2rem;
  }

  .row:first-child {
    margin-top: 0;
  }

  .col {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
  }

  .form-text-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input[type="text"],
  textarea {
    width: 100%;
    height: 3rem;
    border-radius: 16px;
    background: $form-elements-bg-color;
    padding: 0.5rem;
    @include font(0.875rem, 600, 1.5rem, $inactive-color);
  }

  .col65 {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex: 65%;

    .form-text-item:last-of-type {
      @include min-media(992px) {
        margin-top: 2.5rem;
      }
    }

    .nim {
      flex: 50%;

      @include max-media(992px) {
        flex: 100%;
      }
    }

    input[type="text"] {
      width: 90%;

      @include max-media(992px) {
        width: 100%;
      }
    }

    label {
      @include max-media(992px) {
        margin-top: 1.5rem;
      }
    }
  }

  .col30 {
    flex: 30%;

    @include max-media(992px) {
      flex: 100%;
    }
  }

  .wrap {
    flex-wrap: wrap;

    @include max-media(992px) {
      .col30 {
        order: -1;
      }
    }
  }

  @include max-media(992px) {
    .form-photo-item {
      order: -1;
      height: 350px;
    }
  }

  textarea {
    resize: none;
    min-height: 18rem;
    text-align: justify;
    padding: 1rem;

    @include max-media(992px) {
      height: 54rem;
    }
  }

  .form-button-item {
    display: flex;
    gap: 0.8rem;
    justify-content: flex-end;

    @include max-media(992px) {
      height: 12rem;
    }
  }

  .active-btn {
    @include font(1rem, 700, 1.4rem);
    width: 13.75rem;
    height: 3.5rem;
    background: linear-gradient(106.97deg, #fe8a48 -11.29%, #fda53e 91.8%);
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(106.97deg, #ff701d -11.29%, #f29429 91.8%);
    }

    @include max-media(992px) {
      width: 100%;
      @include font(0.875rem, 700, 1.25rem);
      height: 3rem;
    }
  }

  .in-active-btn {
    @include font(1rem, 700, 1.4rem);
    width: 9.375rem;
    height: 3.5rem;
    background: rgba(70, 70, 70, 0.3);
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(
        106.97deg,
        rgba(72, 71, 71, 0.459) -11.29%,
        rgba(70, 70, 70, 0.525) 91.8%
      );
    }

    @include max-media(992px) {
      display: none;
    }
  }

  .form-photo-item {
    width: 100%;
    height: 100%;

    @include max-media(992px) {
      height: 180px;
      width: 100%;
      margin: 0 auto;
    }

    background-image: url("@/assets/images/esharat.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    cursor: pointer;
  }

  .overlay {
    width: 100%;
    height: 33%;
    background: rgba(70, 70, 70, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    @include font(0.875rem, 600, 1.5rem);
  }

  input[name="music-cover"] {
    display: none;
  }

  .form-photo-item:hover .overlay {
    background: rgb(70, 70, 70);
  }
}

.playlist-input {
  margin-top: 1.5rem;

  div {
    margin-top: 0.5rem;
  }

  input {
    width: 27.125rem;
    border-top-right-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    background-color: #464646;
    padding: 0.75rem 0.5rem 0.75rem 0;
    height: 3rem;
    color: white;
    font-size: 1rem;
  }

  button {
    width: 6.875rem;
    border-bottom-left-radius: 0.625rem;
    border-top-left-radius: 0.625rem;
    padding: 0.75rem 2.375rem;
    @include font(0.875rem, 600, 1.5rem);
    height: 3rem;
    background-color: #fc8f22;
  }
}

hr {
  width: 34rem;
  height: 1px;
  background-color: #ffffff26;
}

.playlist-music-input {
  margin-bottom: 2.25rem;
  .music {
    display: flex;
    align-items: center;
    margin-top: 1.75rem;

    &__image {
      img {
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 0.625rem;
      }
    }

    .info {
      margin-right: 1rem;
      &__name {
        @include font(0.875rem, 600, 1.5rem, $active-color);
      }

      &__singer {
        @include font(0.75rem, 400, 1.5rem, $inactive-color);
      }
    }
  }
}

.similar-musics {
  margin-top: 1.5rem;

  &__header {
    @include font(1rem, 600, 1.5rem);
    margin-bottom: 0.5rem;
  }

  &__body {
    border-radius: 1rem;
    overflow: hidden;
    background-color: #3f3f3f;
    width: 34rem;

    .similar-musics__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0.75rem;
    }

    div:first-child {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    img {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 0.625rem;
    }

    .info {
      &__name {
        @include font(1rem, 700, 1.5rem);
      }

      &__singer {
        @include font(0.75rem, 400, 1.5rem, $inactive-color);
      }
    }
  }

  &__add-btn {
    @include font(0.875rem, 600, 1.5rem, $active-color);
    background-color: transparent;
  }
}

.tab {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }

  &__select {
    width: 17.8125rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      #fc8f22;
    border-radius: 0.625rem;
  }
  label {
    display: inline-block;
    width: 8.90625rem;
    height: 2.75rem;
    border-radius: 0.625rem;
    background-color: transparent;
    text-align: center;
    line-height: 2.75rem;
    cursor: pointer;
    transition: 0.2s ease-out;
    user-select: none;
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: #fc8f22;
  }
}

.select-playlists {
  margin-top: 1.5rem;
  input {
    margin-top: 0.5rem;
    width: 34rem;
    height: 3rem;
    color: white;
    font-size: 1rem;
    padding: 0.5rem;
  }
}

.playlists-container {
  h1 {
    margin-top: 1.5rem;
    @include font(1rem, 600, 1.5rem);
  }
  .playlist {
    width: 34rem;
    height: 5.5rem;
    display: flex;
    margin-top: 0.5rem;
    background-color: #3f3f3f;
    border-radius: 0.625rem;
    margin-bottom: 1rem;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    justify-content: space-between;

    figure {
      width: 4.5rem;
      height: 4.5rem;
    }

    img {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 0.625rem;
    }

    .info {
      margin-right: 0.75rem;

      &__name {
        @include font(1rem, 700, 1.5rem);
      }

      &__song-count {
        @include font(0.75rem, 400, 1.5rem, $inactive-color);
      }
    }

    &__intro {
      display: flex;
      align-items: center;
    }
    &__add-btn {
      background-color: transparent;
      @include font(0.875rem, 600, 1.5rem, $active-color);
    }
  }

  div:last-child .playlist {
    margin-bottom: 0;
  }
}

.mySwiper {
  padding: 0 18px;
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: 0;
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: 0;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0;
}

.swiper-slide img {
  display: block;
  // width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  background: linear-gradient(
    90.01deg,
    rgba(255, 255, 255, 0.7) 0.07%,
    rgba(255, 255, 255, 0.5) 99.99%
  );
  border: 0.5px solid #ffffff;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.15);
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: url("@/assets/icons/linear/arrowRight.svg");
  position: absolute;
  top: calc(50% - 32px);
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: url("@/assets/icons/linear/arrowLeft.svg");
  position: absolute;
  top: calc(50% - 32px);
}
</style>
