const animalEmojis = {
    dog: '🐶',
    cat: '🐱',
    chicken: '🐔',
    cow: '🐮',
    sheep: '🐑',
    horse: '🐴'
};

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    {item} {animalEmojis[item] || ''}
                </div>
            ))}
        </div>
    );
};

export function Ejercicio6() {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

    return (
        <div>
            <h2>Animal List</h2>
            <ItemList items={animals} />
        </div>
    );
};