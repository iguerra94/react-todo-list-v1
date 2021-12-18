export interface Item {
  id: string;
  name: string;
  quantity: number;
}

export interface TodoListProps {
  items: Item[];
  updateItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

export interface ListItemProps {
  item: Item;
  removeItem: (id: string) => void;
}
