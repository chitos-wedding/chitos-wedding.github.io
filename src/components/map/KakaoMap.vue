<template>
  <div
    id="daumRoughmapContainer1704295031468"
    class="root_daum_roughmap root_daum_roughmap_landing"
    style="width: 100%"
  />
  <MapLink />
</template>

<script setup>
import { MapLink } from '.'

const executeScript = () => {
  const scriptTag = document.createElement('script')
  const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1704295031468",
    "key" : "2hitt",
    "mapHeight" : "360"
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
