import DynamicRoom from '@/components/pages/DynamicRoom.vue'
import data from '@/data/data.json'

let rooms = []

for (let i = 0; i < data.length; i++) {
    let item = {
        name: data[i].name,
        path: '/' + data[i].name,
        component: DynamicRoom
    }
    rooms.push(item)
}

export default rooms
