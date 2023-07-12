

interface FilterDisplayProps {
    onSelect: (e : string) => void
}


export const FilterDisplay = ({ onSelect }: FilterDisplayProps) => {
    return (
        <div>
            <select className="form-select" onChange={(e) => onSelect(e.target.value)}>
                <option value="All Categories">All Categories</option>
                <option value="Groceries">Groceries</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
            </select>
        </div>
    )
}
