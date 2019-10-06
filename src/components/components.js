import Vue from 'vue'
import bar from '@/components/misc/Bar'
import TilePlug from '@/components/tiles/TilePlug'
import LinkIcon from '@/components/misc/LinkIcon'
import TileLink from '@/components/tiles/TileLink'
import TileLight from '@/components/tiles/TileLight'
import TileComputer from '@/components/tiles/TileComputer'
import BVGList from '@/components/misc/BVGList'
import TileBVG from '@/components/tiles/TileBVG'

Vue.component('bar', bar)
Vue.component('tile-plug', TilePlug)
Vue.component('link-icon', LinkIcon)
Vue.component('tile-link', TileLink)
Vue.component('tile-light', TileLight)
Vue.component('tile-computer', TileComputer)

Vue.component('list-bvg', BVGList)
Vue.component('tile-bvg', TileBVG)
