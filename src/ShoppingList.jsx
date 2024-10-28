import ShoppingListItem from "./ShoppingListItem"

export default function ShoppingList({ items }) {

    return  (
        <ul style={{ listStyleType: 'none' }}>
            { items.map(i => (
                <ShoppingListItem 
                    key={i.id}
                    item={i.item} 
                    quantity={i.quantity} 
                    completed={i.completed} 
                />
            )) }
        </ul>
    )
}