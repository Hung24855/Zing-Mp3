const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const slideImgs = $$(".music-content-slide-item");
const header = $(".header");
const nextPlaylistBtn = $(".playList-btn-next");
const prevPlaylistBtn = $(".playList-btn-prev");
const nextAlbumBtn = $(".album-btn-next");
const prevAlbumBtn = $(".album-btn-prev");
const nextMVBtn = $(".mv-btn-next");
const prevMVBtn = $(".mv-btn-prev");
const nextArtistBtn = $(".artist-btn-next");
const prevArtistBtn = $(".artist-btn-prev");
const sliderMains = $$(".slider-main");
const mainSlide = $(".home_container__Item-content");
const navbarItems = $$(".navbar-content__item");
const navbarContent = $(".navbar-content__list");
const chooseItemList = $$(".navbar-content__item");
const tabMain = $$(".body_content__tab");
const optionVolumes = $(".player-option-icon-speaker");
const iconVolumes = $$(".btn-volume");
const sidebarItem = $$(".sidebar-tab-left");
const Pages = $$(".Page");

const cdThump = $(".thumb-img");
const songName = $(".player-media-content-namesong h4");
const singer = $(".player-media-content-namesong span");
const audio = $("#audio");
const timeStart = $(".time-song-start");
const timeEnd = $(".time-song-end");
const player = $(".player");

const nextSong = $(".next-song");
const prevSong = $(".prev-song");
const randomSong = $(".random-song");
const repeatSong = $(".repeat-song");
const songContainer = $(".playList-container");
const volumeIcon = $(".player-option-icon-speaker");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRepeat: false,
  isRandom: false,
  isVolume: false,
  songs: [
    {
      image: "./assets/image/music/listSong1/song1.jpg",
      song_name: "Cứ Chill Thôi",
      song_author: ["Chillies", "Suni Hạ Linh", "Rhymastic"],
      time_song: "04:30",
      src: "./assets/music/listSong1/song1.mp3",
    },
    {
      image: "./assets/image/music/listSong1/song2.jpg",
      song_name: "Crush",
      song_author: ["WN", "Vani", "An An"],
      time_song: "02:30",
      src: "./assets/music/listSong1/song2.mp3",
    },
    {
      image: "./assets/image/music/listSong1/song3.jpg",
      song_name: "Vô tình",
      song_author: ["Xesi", "Hoarox"],
      time_song: "03:50",
      src: "./assets/music/listSong1/song3.mp3",
    },
    {
      image: "./assets/image/music/listSong1/song4.jpg",
      song_name: "Lạc trôi",
      song_author: ["Sơn Tùng MTP"],
      time_song: "03:30",
      src: "./assets/music/listSong1/song7.mp3",
    },
    {
      image: "./assets/image/music/listSong1/song5.jpg",
      song_name: "Hãy trao cho anh",
      song_author: ["Sơn Tùng MTP", "Snoop Dogg"],
      time_song: "04:50",
      src: "./assets/music/listSong1/song5.mp3",
    },
  ],

  playlists: [
    {
      image: "./assets/image/playlists/playlist1.jpg",
      playlist_name: "V-Pop: The A-List",
      playlist_author: "Zing Mp3",
    },
    {
      image: "./assets/image/playlists/playlist2.jpg",
      playlist_name: "Rồi tới luôn",
      playlist_author: "Nal",
    },
    {
      image: "./assets/image/playlists/playlist3.jpg",
      playlist_name: "Nhạc quốc tế",
      playlist_author: "Lạc Trôi",
    },
    {
      image: "./assets/image/playlists/playlist4.jpg",
      playlist_name: "Những bản hit của rap Việt",
      playlist_author: "Bigcityboi",
    },
    {
      image: "./assets/image/playlists/playlist5.jpg",
      playlist_name: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
      playlist_author: "Zing Mp3",
    },
    {
      image: "./assets/image/playlists/playlist6.jpg",
      playlist_name: "Những bản nhạc Dance hay nhất",
      playlist_author: "Đại Tấn",
    },
    {
      image: "./assets/image/playlists/playlist7.jpg",
      playlist_name: "Em hát ai nghe",
      playlist_author: "Ngọc Trâm",
    },
    {
      image: "./assets/image/playlists/playlist8.jpg",
      playlist_name: "Chill cùng Đen Vâu",
      playlist_author: "Trà My",
    },
    {
      image: "./assets/image/playlists/playlist9.jpg",
      playlist_name: "Những bản hit hay nhất của Sơn Tùng MTP",
      playlist_author: "Nguyễn Thành Công",
    },
    {
      image: "./assets/image/playlists/playlist10.jpg",
      playlist_name: "Thế giới V-Pop Vol. 3",
      playlist_author: "Zing Mp3",
    },
    {
      image: "./assets/image/playlists/playlist11.jpg",
      playlist_name: "BodyTalk",
      playlist_author: "Lâm Huy",
    },
    {
      image: "./assets/image/playlists/playlist12.jpg",
      playlist_name: "PlayList Này Chill Phết",
      playlist_author: "Zing Mp3",
    },
    {
      image: "./assets/image/playlists/playlist13.jpg",
      playlist_name: "BlackJack",
      playlist_author: "Zing Mp3",
    },
    {
      image: "./assets/image/playlists/playlist14.jpg",
      playlist_name: "4U - On Repeat",
      playlist_author: "Zing Mp3",
    },
    {
      image: "./assets/image/playlists/playlist15.jpg",
      playlist_name: "Những Bài Hát Hay Nhất Của Mr.Siro",
      playlist_author: "Zing MP3",
    },
    {
      image: "./assets/image/playlists/playlist16.jpg",
      playlist_name: "Top EDM Songs Of 2023",
      playlist_author: "Zing MP3",
    },
    {
      image: "./assets/image/playlists/playlist17.jpg",
      playlist_name: "Giai Điệu Và Trào Lưu Gây Sốt",
      playlist_author: "Zing Mp3",
    },
    {
      image: "./assets/image/playlists/playlist18.jpg",
      playlist_name: "Những Bìa Hát Hay Nhất Của HKT",
      playlist_author: "Zing MP3",
    },
    {
      image: "./assets/image/playlists/playlist19.jpg",
      playlist_name: "100% Gây Nghiện",
      playlist_author: "Zing Mp3",
    },
    {
      image: "./assets/image/playlists/playlist20.jpg",
      playlist_name: "Nhạc Việt Được Nghe Nhiều Nhất",
      playlist_author: "Zing Mp3",
    },
    {
      image: "./assets/image/playlists/playlist21.jpg",
      playlist_name: "Dance Hay Nhất Việt Nam",
      playlist_author: "Zing Mp3",
    },
  ],

  albums: [
    {
      image: "./assets/image/albums/album1.jpg",
      album_name: "Golden Hour",
    },
    {
      image: "./assets/image/albums/album2.jpg",
      album_name: "Boycold (Mini Album)",
    },
    {
      image: "./assets/image/albums/album3.jpg",
      album_name: "Red",
    },
    {
      image: "./assets/image/albums/album4.jpg",
      album_name: "Người Yêu Cũ (Gửi Cho Anh 2) (Mini Album)",
    },
    {
      image: "./assets/image/albums/album5.jpg",
      album_name: "Querencia (Mini Album)",
    },
    {
      image: "./assets/image/albums/album6.jpg",
      album_name: "Justice (Mini Album)",
    },
    {
      image: "./assets/image/albums/album7.jpg",
      album_name: "Teenage Dream",
    },
    {
      image: "./assets/image/albums/album8.jpg",
      album_name: "The Off Season",
    },
    {
      image: "./assets/image/albums/album9.jpg",
      album_name: "The Album",
    },
    {
      image: "./assets/image/albums/album10.jpg",
      album_name: "Random Access Memories",
    },
    {
      image: "./assets/image/albums/album11.jpg",
      album_name: "Map of the Soul: 7",
    },
    {
      image: "./assets/image/albums/album12.jpg",
      album_name: "Chromatica",
    },
    {
      image: "./assets/image/albums/album13.jpg",
      album_name: "My Turn",
    },
    {
      image: "./assets/image/albums/album14.jpg",
      album_name: "Meet the Woo 2",
    },
    {
      image: "./assets/image/albums/album15.jpg",
      album_name: "Lemonade",
    },
  ],
  mvs: [
    {
      image: "./assets/image/MVs/mv1.jpg",
      mv_name: "Một Bước Yêu Vạn Dặm Đau",
      mv_author: "Mr-Siro",
      time_mv: "11:40",
      author_img: "assets/image/mvArtists/artist1.jpg",
    },
    {
      image: "./assets/image/MVs/mv2.jpg",
      mv_name: "Simple Love",
      mv_author: "Obito, Seachains, Davis",
      time_mv: "03:54",
      author_img: "./assets/image/mvArtists/artist2.jpg",
    },
    {
      image: "./assets/image/MVs/mv3.jpg",
      mv_name: "Lời Yêu Ngây Dại",
      mv_author: "Kha",
      time_mv: "04:33",
      author_img: "./assets/image/mvArtists/artist3.jpg",
    },
    {
      image: "./assets/image/MVs/mv4.jpg",
      mv_name: "24H",
      mv_author: "LyLy, Magazine",
      time_mv: "04:18",
      author_img: "./assets/image/mvArtists/artist4.jpg",
    },
    {
      image: "./assets/image/MVs/mv5.jpg",
      mv_name: "Nước Mắt Em Lau Bằng Tình Yêu Mới",
      mv_author: "Da LAB, Tóc Tiên",
      time_mv: "05:45",
      author_img: "./assets/image/mvArtists/artist5.jpg",
    },
    {
      image: "./assets/image/MVs/mv6.jpg",
      mv_name: "Yêu Đơn Phương",
      mv_author: "OnlyC, Karik",
      time_mv: "05:02",
      author_img: "./assets/image/mvArtists/artist6.jpg",
    },
    {
      image: "./assets/image/MVs/mv7.jpg",
      mv_name: "Phía Sau Em",
      mv_author: "Kay Trần, Binz",
      time_mv: "04:06",
      author_img: "./assets/image/mvArtists/artist7.jpg",
    },
    {
      image: "./assets/image/MVs/mv8.jpg",
      mv_name: "Mình Yêu nhau đi",
      mv_author: "Bích Phương",
      time_mv: "03:52",
      author_img: "./assets/image/mvArtists/artist8.jpg",
    },
    {
      image: "./assets/image/MVs/mv9.jpg",
      mv_name: "Đừng Về Trễ (Acoustic Version)",
      mv_author: "Sơn Tùng MTP",
      time_mv: "04:41",
      author_img: "./assets/image/mvArtists/artist9.jpg",
    },
    {
      image: "./assets/image/MVs/mv10.jpg",
      mv_name: "Hơn Cả Yêu",
      mv_author: "Đức Phúc",
      time_mv: "05:43",
      author_img: "./assets/image/mvArtists/artist10.jpg",
    },
    {
      image: "./assets/image/MVs/mv11.jpg",
      mv_name: "Vì Yêu Cứ Đâm Đầu",
      mv_author: "MIN, Đen, JustaTee",
      time_mv: "04:01",
      author_img: "./assets/image/mvArtists/artist11.jpg",
    },
    {
      image: "./assets/image/MVs/mv12.jpg",
      mv_name: "Sao Anh Chưa Về Nhà",
      mv_author: "AMEE, Ricky Star",
      time_mv: "04:36",
      author_img: "./assets/image/mvArtists/artist12.jpg",
    },
    {
      image: "./assets/image/MVs/mv13.jpg",
      mv_name: "Bigcityboi",
      mv_author: "Binz, Touliver",
      time_mv: "04:50",
      author_img: "./assets/image/mvArtists/artist13.jpg",
    },
    {
      image: "./assets/image/MVs/mv14.jpg",
      mv_name: "Em không sai chúng ta sai",
      mv_author: "ERIK",
      time_mv: "06:28",
      author_img: "./assets/image/mvArtists/artist14.jpg",
    },
  ],
  artists: [
    {
      image: "./assets/image/artists/artist1.jpg",
      artist_name: "Binz",
      care: 245,
    },
    {
      image: "./assets/image/artists/artist2.jpg",
      artist_name: "Phương Ly",
      care: 77,
    },
    {
      image: "./assets/image/artists/artist3.jpg",
      artist_name: "AMEE",
      care: 317,
    },
    {
      image: "./assets/image/artists/artist4.jpg",
      artist_name: "MCK",
      care: 52,
    },
    {
      image: "./assets/image/artists/artist5.jpg",
      artist_name: "Sơn Tùng MTP",
      care: 445,
    },
    {
      image: "./assets/image/artists/artist6.jpg",
      artist_name: "Mr.Siro",
      care: 435,
    },
    {
      image: "./assets/image/artists/artist7.jpg",
      artist_name: "Han Sara",
      care: 634,
    },
    {
      image: "./assets/image/artists/artist8.jpg",
      artist_name: "Bích Phương",
      care: 612,
    },
    {
      image: "./assets/image/artists/artist9.jpg",
      artist_name: "Soobin Hoàng Sơn",
      care: 745,
    },
    {
      image: "./assets/image/artists/artist10.jpg",
      artist_name: "Chi Dân",
      care: 516,
    },
  ],
  //Xử lý render nội dung
  renderSong: function () {
    const songHtml = this.songs.map((song, index) => {
      return `<div class="playList-container__item" index ='${index}'>
                <div class="playList-container__img mr-16" style="background: url(${
                  song.image
                }) no-repeat center center / cover;">
                    <i class="bi bi-play-fill icon-play-song"></i>
                    <div class="songPlay-animation" style = "background : url('./assets/image/Animation_Play_Nhac/icon-playing.gif') no-repeat center center / cover;">
                </div>
      </div>
      <div class="playList-container__song">
        <div class="playList-container__song-name">
          <span class="song-name">${song.song_name}</span> 
          <span class="song-author">${song.song_author.map((author) => {
            return `<a href="#">${author}</a>`;
          })}</span>   
        </div>
        <div class="song-time hide-on-tablet hide-on-mobile">${
          song.time_song
        }</div>
        <div class="playList-container__song-options">
          <div class="song-options-mic playList-song-btn hide-on-mobile " >
            <i class="song-options-mic__icon bi bi-mic-fill"></i>
          </div>
          <div class="song-options-tym playList-song-btn  hide-on-mobile">
            <i class="song-options-tym__icon  bi bi-heart"></i>
            <i class="song-options-tym__icon-fill  bi bi-heart-fill"></i>
          </div>
          <div class="song-options-three-dot playList-song-btn">
            <i class="song-options-three-dot__icon bi bi-three-dots"></i>
          </div>
        </div>
    </div>
  </div>`;
    });

    songContainer.innerHTML = songHtml.join("");
    songContainer.firstElementChild.classList.add("active");
  },
  renderPlaylist: function () {
    const playlistHtml = this.playlists.map((playlist) => {
      return `<div class="col l-2-4 m-4 c-6 playList-item">
      <div class="item-image-container br-4">
          <div class="playList-Album-item__img br-4" style="background: url(${playlist.image}) no-repeat center center / cover;">
          </div>
          <div class="overlay-item__play">
              <div class="overlay-item__heart-btn hover">
                  <i class="bi bi-heart-fill"></i>
              </div>
              <div class="overlay-item__play-btn">
                  <i class="bi bi-play-fill"></i>
              </div>
              <div class="overlay-item__option-btn hover">
                  <i class="bi bi-three-dots"></i>
              </div>
          </div>
      </div>
      <div class="item__info">
          <div class="item__info-name two-line">${playlist.playlist_name}</div>
          <div class="item__info-author">${playlist.playlist_author}</div>
      </div>
  </div>`;
    });
    const playlist2Html = this.playlists.map((playlist) => {
      return `<div class="col l-2-4 m-4 c-6 playList-item mt-20">
      <div class="item-image-container br-4">
          <div class="playList-Album-item__img br-4" style="background: url(${playlist.image}) no-repeat center center / cover;">
          </div>
          <div class="overlay-item__play">
              <div class="overlay-item__heart-btn hover">
                  <i class="bi bi-heart-fill"></i>
              </div>
              <div class="overlay-item__play-btn">
                  <i class="bi bi-play-fill"></i>
              </div>
              <div class="overlay-item__option-btn hover">
                  <i class="bi bi-three-dots"></i>
              </div>
          </div>
      </div>
      <div class="item__info">
          <div class="item__info-name two-line">${playlist.playlist_name}</div>
          <div class="item__info-author">${playlist.playlist_author}</div>
      </div>
  </div>`;
    });
    const playlistContainer = $(".playlist-ct");
    const playlist2Container = $(".tab-playist-ct");

    playlistContainer.innerHTML += playlistHtml.join("");
    playlist2Container.innerHTML += playlist2Html.join("");
  },
  renderAlbum: function () {
    const albumHtml = this.albums.map((album) => {
      return `<div class="col l-2-4 m-4 c-6 album-item">
      <div class="item-image-container br-4">
          <div class="playList-Album-item__img br-4" style="background: url(${album.image}) no-repeat center center / cover;">
          </div>
          <div class="overlay-item__play">
              <div class="overlay-item__heart-btn hover">
                  <i class="bi bi-heart-fill"></i>
              </div>
              <div class="overlay-item__play-btn">
                  <i class="bi bi-play-fill"></i>
              </div>
              <div class="overlay-item__option-btn hover">
                  <i class="bi bi-three-dots"></i>
              </div>
          </div>
      </div>
      <div class="item__info">
          <div class="item__info-name two-line">${album.album_name}</div>
      </div>
  </div>`;
    });

    const album2Html = this.albums.map((album) => {
      return `<div class="col l-2-4 m-4 c-6 album-item mt-20">
      <div class="item-image-container br-4">
          <div class="playList-Album-item__img br-4" style="background: url(${album.image}) no-repeat center center / cover;">
          </div>
          <div class="overlay-item__play">
              <div class="overlay-item__heart-btn hover">
                  <i class="bi bi-heart-fill"></i>
              </div>
              <div class="overlay-item__play-btn">
                  <i class="bi bi-play-fill"></i>
              </div>
              <div class="overlay-item__option-btn hover">
                  <i class="bi bi-three-dots"></i>
              </div>
          </div>
      </div>
      <div class="item__info">
          <div class="item__info-name two-line">${album.album_name}</div>
      </div>
  </div>`;
    });
    const albumContainer = $(".album-ct");
    const album2Container = $(".tab-album-ct");

    albumContainer.innerHTML += albumHtml.join("");
    album2Container.innerHTML += album2Html.join("");
  },
  renderMv: function () {
    const mvHtml = this.mvs.map((mv) => {
      return `<div class="col l-4 m-6 c-12 mv-item">
      <div class="item-image-container br-4">
          <div class="mvItem-img br-4" style="background: url('${mv.image}') no-repeat center center / cover;">
          </div>
          <div class="overlay-item__play">
              <div class="overlay-item__play-btn">
                  <i class="bi bi-play-fill"></i>
              </div>
              <div class="overlayBtn-close">
                  <i class="bi bi-x-lg btn--icon"></i>
              </div>
          </div>
          <div class="mv-time">${mv.time_mv}</div>                                 
      </div>
      <div class="MV__info">
          <div class="item__info">
              <div class="item__info-name two-line">${mv.mv_name}</div>
              <div class="item__info-author">${mv.mv_author}</div>
          </div>
          <div class="MV__info-img">
              <div class="img-author" style="background: url('${mv.author_img}') no-repeat center center / cover;"></div>
          </div>
      </div>
  </div>`;
    });
    const mv2Html = this.mvs.map((mv) => {
      return `<div class="col l-4 m-6 c-12 mv-item">
      <div class="item-image-container br-4 mt-30">
          <div class="mvItem-img br-4" style="background: url('${mv.image}') no-repeat center center / cover;">
          </div>
          <div class="overlay-item__play">
              <div class="overlay-item__play-btn">
                  <i class="bi bi-play-fill"></i>
              </div>
              <div class="overlayBtn-close">
                  <i class="bi bi-x-lg btn--icon"></i>
              </div>
          </div>
          <div class="mv-time">${mv.time_mv}</div>                                 
      </div>
      <div class="MV__info">
          <div class="item__info">
              <div class="item__info-name two-line">${mv.mv_name}</div>
              <div class="item__info-author">${mv.mv_author}</div>
          </div>
          <div class="MV__info-img">
              <div class="img-author" style="background: url('${mv.author_img}') no-repeat center center / cover;"></div>
          </div>
      </div>
  </div>`;
    });
    const mvContainer = $(".mv-ct");
    const mv2Container = $(".tab-mv-ct");

    mvContainer.innerHTML += mvHtml.join("");
    mv2Container.innerHTML += mv2Html.join("");
  },
  renderArtist: function () {
    const artistHtml = this.artists.map((artist) => {
      return `<div class="col l-2-4 m-4 c-6 artist-item mt-20">
      <div class="item-image-container br-4 rounded">
          <div class="playList-Album-item__img br-4" style="background: url('${artist.image}') no-repeat center center / cover;">
          </div>
          <div class="overlay-item__play">
              <div class="overlay-item__play-btn">
                  <i class="bi bi-play-fill"></i>
              </div>
          </div>
      </div>
      <div class="item__info artist-info">
          <div class="artist-author two-line mt-18">${artist.artist_name}
              <i class="bi bi-star-fill row__info-icon">
              </i>
          </div>
          <div class="artist-care mt-10">
              <h3>${artist.care}k quan tâm</h3>
          </div>
          <div class="btn-radius mt-16 artist-cared-btn">
              <i class="bi bi-check2"></i>
              Đã quan tâm</div>
      </div>
  </div>`;
    });
    const artistContainer = $(".artist-ct");
    const artistsContainer = $(".artists-ct");

    artistContainer.innerHTML += artistHtml.join("");
    artistsContainer.innerHTML += artistHtml.join("");
  },
  render: function () {
    this.renderSong();
    this.renderPlaylist();
    this.renderAlbum();
    this.renderMv();
    this.renderArtist();
  },

  // Xử lý xự kiện
  handleEvent: function () {
    const _this = this;
    const sidebar_sub = $(".subnav-menu-sidebar");
    const micIcons = $$(".song-options-mic");
    const songOptionTyms = $$(".song-options-tym"); //Phải gọi ở đây vì nếu đề trên thì nó sẽ thực hiện gọi lúc chưa render data nên nó sẽ không nhận được onclick
    const playListItems = $$(".home_container__playList .playList-item");
    const albumItems = $$(".home_container__album .album-item");
    const mvItems = $$(".home_container__mv .mv-item");
    const artistItems = $$(".home_container__artist .artist-item");

    // xy ly slide chuyen dong trong muc music
    let indexSlide = 2;
    function slideShow() {
      const musicSlideItemFirst = $(".music-content-slide-item.first");
      const musicSlideItemSecond = $(".music-content-slide-item.second");
      const musicSlideItemThird = slideImgs[indexSlide];
      const musicSlideItemFourth =
        slideImgs[indexSlide === slideImgs.length - 1 ? 0 : indexSlide + 1];
      musicSlideItemFirst.classList.replace("first", "fourth");
      musicSlideItemSecond.classList.replace("second", "first");
      musicSlideItemThird.classList.replace("third", "second");
      musicSlideItemFourth.classList.replace("fourth", "third");
      indexSlide++;
      if (indexSlide >= slideImgs.length) {
        indexSlide = 0;
      }
      setTimeout(slideShow, 2000);
    }
    slideShow();

    // xu ly background khi cuon chuot
    const app = $(".app");
    app.onscroll = function () {
      const scrollApp = app.scrollTop;
      if (scrollApp > 5) {
        Object.assign(header.style, {
          backgroundColor: "#37075d",
          boxShadow: "0 1px 1px rgba(0, 0, 0, 0.08)",
        });
      } else {
        Object.assign(header.style, {
          backgroundColor: "transparent",
          boxShadow: "none",
        });
      }
    };

    // Xử lý khi kick vào các icon

    // icon mic
    micIcons.forEach((micIcon) => {
      micIcon.onclick = () => {
        if (micIcon.style.color === "var(--color-option-icon-kick)") {
          micIcon.style.color = "var(--text-color)";
        } else {
          micIcon.style.color = "var(--color-option-icon-kick)";
        }
      };
    });

    // icon tym
    songOptionTyms.forEach((songOptionTym) => {
      songOptionTym.onclick = function () {
        const iconTym = songOptionTym.firstElementChild;
        const iconTymFill = songOptionTym.lastElementChild;
        iconTym.classList.toggle("hide");
        iconTymFill.classList.toggle("show");
      };
    });

    //icon volume in player
    iconVolumes.forEach((iconVolume) => {
      iconVolume.onclick = function () {
        const iconVolume_up = optionVolumes.firstElementChild;
        const iconVolume_mute = optionVolumes.lastElementChild;
        iconVolume_up.classList.toggle("hide");
        iconVolume_mute.classList.toggle("show");

        if (iconVolume_mute.classList.contains("show")) {
          volume_fill.style.width = "0% ";
        } else {
          volume_fill.style.width = volume.value + "% ";
        }
      };
    });

    // Xử lý khi ấn prev , next playList , Album, MV, ....

    // Playlist
    nextPlaylistBtn.onclick = function () {
      controlSlide(
        1,
        5,
        sliderMains[0],
        playListItems,
        prevPlaylistBtn,
        nextPlaylistBtn
      );
    };
    prevPlaylistBtn.onclick = function () {
      controlSlide(
        -1,
        5,
        sliderMains[0],
        playListItems,
        prevPlaylistBtn,
        nextPlaylistBtn
      );
    };
    // Album
    nextAlbumBtn.onclick = function () {
      controlSlide(
        1,
        5,
        sliderMains[1],
        albumItems,
        prevAlbumBtn,
        nextAlbumBtn
      );
    };
    prevAlbumBtn.onclick = function () {
      controlSlide(
        -1,
        5,
        sliderMains[1],
        albumItems,
        prevAlbumBtn,
        nextAlbumBtn
      );
    };
    // MV
    nextMVBtn.onclick = function () {
      controlSlide(1, 3, sliderMains[2], mvItems, prevMVBtn, nextMVBtn);
    };
    prevMVBtn.onclick = function () {
      controlSlide(-1, 3, sliderMains[2], mvItems, prevMVBtn, nextMVBtn);
    };
    // Nghe si
    nextArtistBtn.onclick = function () {
      controlSlide(
        1,
        5,
        sliderMains[3],
        artistItems,
        prevArtistBtn,
        nextArtistBtn
      );
    };
    prevArtistBtn.onclick = function () {
      controlSlide(
        -1,
        5,
        sliderMains[3],
        artistItems,
        prevArtistBtn,
        nextArtistBtn
      );
    };

    // Xử lý nav tại trang hôm
    chooseItemList.forEach((item, index) => {
      item.addEventListener("click", function () {
        $(".navbar-content__item.active").classList.remove("active");
        item.classList.add("active");
        $(".body_content__tab.active").classList.remove("active");
        tabMain[index].classList.add("active");
      });
    });

    //Ham chuyen tab tren sidebar ben trai
    sidebarItem.forEach((item, index) => {
      item.addEventListener("click", function () {
        $(".sidebar-tab-left.active").classList.remove("active");
        $(".Page.Active").classList.remove("Active");
        item.classList.add("active");
        Pages[index].classList.add("Active");
      });
    });

    // Xu ly shawdow sidebar
    sidebar_sub.onscroll = () => {
      sidebar_sub.scrollTop > 10
        ? sidebar_sub.classList.add("shawdow")
        : sidebar_sub.classList.remove("shawdow");
    };

    // Handle next slides music
    let nextWidth = 0;
    let dem = 0; //Đếm xem đã ấn nút next mấy lần
    const widthMainSlide = mainSlide.offsetWidth;
    //dir là biến kiểm tra xem người dùng ấn nút prev hay next
    function controlSlide(dir, step, ListContainer, Items, prevBtn, nextBtn) {
      if (dir === 1) {
        dem++;
        nextWidth += widthMainSlide;

        // Nếu độ dài của NextWidth > Tổng độ dài của các Items thì ...
        if (nextWidth > Items.length * Items[0].offsetWidth) {
          nextWidth -= widthMainSlide;
        }

        if (dem > 0) {
          //Làm hiện rõ lên nút quay lui
          prevBtn.classList.remove("disabled");
        }

        //Scroll các item sang trái bằng độ dài của main slide
        ListContainer.scrollLeft = nextWidth;

        //Nếu số lượng Items chia hết có số lượng item được hiển thị và số lần ấn next >= (Items.length / step) - 1
        //thì làm mờ nút next tạo hiệu ứng đã hết items VD : có 15 item và số item hiển thị là 3(step = 3) => chỉ cần next 2 lần là hết
        if (Items.length % step === 0 && dem >= Items.length / step - 1) {
          nextBtn.classList.add("disabled");
          dem = Items.length / step - 1;
        } else if (dem >= Math.floor(Items.length / step)) {
          // Khi số lượng items không chia hết cho số item hiển thị
          nextBtn.classList.add("disabled");
          dem = Math.floor(Items.length / step);
        }
      } else if (dir === -1) {
        dem--;
        // Ngược lại với ở trên
        if (dem < Math.floor(Items.length / step)) {
          nextBtn.classList.remove("disabled");
          if (dem <= 0) {
            dem = 0;
            prevBtn.classList.add("disabled");
          }
        }
        nextWidth -= widthMainSlide;
        if (nextWidth <= 0) {
          nextWidth = 0;
        }
        ListContainer.scrollLeft = nextWidth;
      }
    }

    //Xử lý quay cdthump . Tạo ra đối tượng animate

    const cdThumpAnimate = cdThump.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 giây
      iterations: Infinity,
    });
    //console.log(cdThumpAnimate);
    cdThumpAnimate.pause();

    // Xử lý phát nhạc
    player.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
        $(".playList-container__item.active").classList.remove("isplaying");
        cdThumpAnimate.pause();
      } else {
        audio.play();
        $(".playList-container__item.active").classList.add("isplaying");
        cdThumpAnimate.play();
      }
    };

    // Khi bài hát được play
    audio.onplay = function () {
      player.classList.add("playing");
      _this.isPlaying = true;
    };

    // Khi bài hát bị pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
    };

    //Handle thanh thời gian bai hat

    let timeVolume = $(".range-time-song");
    let timeVolue_fill = $(".range-time-song--fill");
    timeVolume.oninput = function (e) {
      timeVolue_fill.style.width = timeVolume.value + "% ";
      audio.currentTime = audio.duration * (e.target.value / 100); // Tua bài hát bằng cách sử dụng method curentTime của audio
    };

    // Tiến độ khi bài hát thay đổi
    audio.ontimeupdate = function () {
      const rangeTime = $(".range-time-song--fill");
      rangeTime.style.width = (audio.currentTime / audio.duration) * 100 + "%";
      $(".range-time-song").value = (audio.currentTime / audio.duration) * 100;

      const stringTime = _this.formatTimeSong(audio.currentTime);
      timeStart.textContent = stringTime;
    };

    //Xử lý next , prev bài hát
    nextSong.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.nextSong();
      }

      audio.play();
    };

    prevSong.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
    };

    // Xử lý Random bài hát
    randomSong.onclick = function () {
      _this.isRandom = !_this.isRandom;
      randomSong.classList.toggle("isRandom");
    };
    // Xử lý khi kick repeat bài hát
    repeatSong.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      repeatSong.classList.toggle("isRepeat");
    };

    // Xử lý next khi kết thúc bài hát
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextSong.click(); // Tương tự việc ấn click vào nút click
      }
    };

    // Xử lý khi click vào song
    songContainer.onclick = function (e) {
      // closets sẽ trả ra 1 là chính element đó 2 là cha gần nhất của nó , Nếu không thấy nó sẽ trẻ vầ null
      // Ở đây khi click vào các element là con của .playList-container__item thì sẽ chả ra thằng cha có class .playList-container__item
      const songNode = e.target.closest(".playList-container__item");
      const isThreeDotIcon = e.target.closest(".song-options-three-dot__icon");
      const isMicIcon = e.target.closest(".song-options-mic__icon");
      const isTymIconFill = e.target.closest(".song-options-tym__icon-fill");
      const isTymIcon = e.target.closest(".song-options-tym__icon");

      if (
        songNode &&
        !isThreeDotIcon &&
        !isMicIcon &&
        !isTymIconFill &&
        !isTymIcon &&
        (!_this.isPlaying ||
          (songNode && !songNode.classList.contains("active")))
      ) {
        _this.currentIndex = Number(songNode.getAttribute("index"));
        _this.loadCurrentSong();
        $(".playList-container__item.active").classList.remove("active");
        songNode.classList.add("active", "isplaying");
        audio.play();
      }
    };

    //Xử lý âm lượng

    //Điều chỉnh thanh âm lượng âm lượng
    let volume = document.querySelector(".range-volume");
    let volume_fill = document.querySelector(".volume-fill");
    volume.oninput = function () {
      volume_fill.style.width = volume.value + "% ";
      audio.volume = volume.value / 100;
    };

    var beginVolume = audio.volume;
    volumeIcon.onclick = function () {
      _this.isVolume = !_this.isVolume;
      audio.volume = _this.isVolume ? 0 : beginVolume;
    };
  },

  getCurrentSong: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },

  loadCurrentSong: function () {
    cdThump.style.background = `url(${this.currentSong.image}) no-repeat center
    center / cover`;
    songName.textContent = this.currentSong.song_name;
    singer.textContent = this.currentSong.song_author[0];
    timeEnd.textContent = this.currentSong.time_song;
    audio.src = this.currentSong.src;
  },

  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex > this.songs.length - 1) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },

  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },

  randomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex); // Nếu giá trị random mới bằng index bài hát hiện tại thì phải tiếp tục random
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },

  formatTimeSong: function (seconds) {
    const minutes = Math.floor(seconds / 60);
    const second = Math.floor(seconds % 60);
    //Thêm kí tự 0 vào đầu chuỗi cho đến khi đạt được độ dài là 2 kí tự ( 5 => 05)
    const formatMinutes = String(minutes).padStart(2, "0");
    const formatSeconds = String(second).padStart(2, "0");
    return `${formatMinutes}:${formatSeconds}`;
  },

  start: function () {
    this.getCurrentSong();
    this.render();
    this.handleEvent();
    this.loadCurrentSong();
  },
};

app.start();
