export default function ShoppingList({ items }) {

    return  (
        <ul style={{ listStyleType: 'none' }}>
            { items.map(i => (
                <li 
                    key={i.id}
                    style={{
                        color: i.completed ? "grey" : "red", 
                        textDecoration: i.completed ? "line-through" : "none"
                }}>
                    {i.item} - {i.quantity}
                </li>
            )) }
        </ul>
    )
}