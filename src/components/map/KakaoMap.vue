<template>
  <div class="kakao-map">
    <div
      id="daumRoughmapContainer1705587233002"
      class="root_daum_roughmap root_daum_roughmap_landing"
    />
  </div>
</template>

<script setup>
const executeScript = () => {
  const scriptTag = document.createElement('script')
  const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1705587233002",
    "key" : "2hqer",
    "mapWidth": "360",
    "mapHeight" : "240"
  }).render();`)
  scriptTag.appendChild(inlineScript)
  document.body.appendChild(scriptTag)
}

const installScript = () => {
  // original.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js'
  const scriptTag = document.createElement('script')
  scriptTag.className = 'daum_roughmap_loader_script'

  const url_protocal = location.protocol == 'https:' ? 'https:' : 'http:'
  const cdn = '6af7869e'
  if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) return
  window.daum = window.daum || {}
  window.daum.roughmap = {
    cdn,
    URL_KEY_DATA_LOAD_PRE: `${url_protocal}//t1.daumcdn.net/roughmap/`,
    url_protocal,
  }
  const kakaoJsFile = `${url_protocal}//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/${cdn}/roughmapLander.js`
  scriptTag.src = kakaoJsFile
  document.body.appendChild(scriptTag)
  scriptTag.onload = () => {
    executeScript()
  }
}
installScript()
</script>
<style lang="scss" scoped>
.kakao-map {
  display: flex;
  justify-content: center;
}
</style>
