
interface ItemConstructorObject { title: string, description: string, duration: number, start: Date }

export default class Item {
    title: ItemConstructorObject['title'];
    description: ItemConstructorObject['description'];
    duration: ItemConstructorObject['duration'];
    start: ItemConstructorObject['start'];

    constructor(itemData: ItemConstructorObject) {
        this.title = itemData.title;
        this.description = itemData.description;
        this.duration = itemData.duration;
        this.start = itemData.start
    }
}