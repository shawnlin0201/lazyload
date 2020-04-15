# LazyLoad.js
基於 IntersectionObserver API 實現圖片緩載入。

## Usage

引入 script 檔後，將 `img` 套上 `lazy` class 名稱，並且在 `data-src` 放入圖片路徑即可。

```html
<script src="https://raw.githubusercontent.com/shawnlin0201/lazyload.js/master/lazyload.js"></script>

<img class="lazy" alt="none" src="" data-src="..." />
```
載入後會提供 `is-loaded` class 名稱以供辨識。

```html
<img class="lazy is-loaded" alt="none" src="" data-src="..." />
```

## Changelog
Version change detail are documented in the [release page.](https://github.com/shawnlin0201/lazyload.js/releases)

## License
[MIT](https://github.com/shawnlin0201/lazyload.js/blob/master/LICENSE)
Copyright (c) 2020-present, Shawn Lin
