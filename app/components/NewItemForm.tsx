

import prisma from "@/db"
import Item from "@/utils/item"

interface Props {
    onAdd: (item: Item) => void
}

export default function NewItemForm({ onAdd }: Props) {


    return (
        <div>
            <button onClick={() => {
                prisma.user.create({
                    data:
                    {
                        email: 'tanglo@gamil.com',
                        hashedPassword: 'sadfsa',
                    }
                })
            }} >Create</button>
        </div>
    )
}