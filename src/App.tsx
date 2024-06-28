import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="1">
        {(magic) => (
          <ul ref={magic.innerRef} {...magic.droppableProps}>
            <Draggable draggableId="first" index={0}>
              {(magic) => (
                <li ref={magic.innerRef} {...magic.draggableProps}>
                  <span {...magic.dragHandleProps}>😻</span>
                  one
                </li>
              )}
            </Draggable>
            <Draggable draggableId="second" index={1}>
              {(magic) => (
                <li ref={magic.innerRef} {...magic.draggableProps}>
                  <span {...magic.dragHandleProps}>😻</span>
                  two
                </li>
              )}
            </Draggable>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
