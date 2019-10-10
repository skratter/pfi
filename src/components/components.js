import Vue from 'vue'
import bar from '@/components/misc/Bar'
import TilePlug from '@/components/tiles/TilePlug'
import LinkIcon from '@/components/misc/LinkIcon'
import TileLink from '@/components/tiles/TileLink'
import TileLight from '@/components/tiles/TileLight'
import TileBlank from '@/components/tiles/TileBlank'
import TileComputer from '@/components/tiles/TileComputer'
import BVGList from '@/components/misc/BVGList'
import TileBVG from '@/components/tiles/TileBVG'
import TileWeather from '@/components/tiles/TileWeather'

Vue.component('bar', bar)
Vue.component('tile-plug', TilePlug)
Vue.component('link-icon', LinkIcon)
Vue.component('tile-link', TileLink)
Vue.component('tile-light', TileLight)
Vue.component('tile-blank', TileBlank)
Vue.component('tile-computer', TileComputer)
Vue.component('tile-weather', TileWeather)

Vue.component('list-bvg', BVGList)
Vue.component('tile-bvg', TileBVG)
