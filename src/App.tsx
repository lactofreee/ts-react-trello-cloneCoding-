import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const toDos:string[] = ["a", "b", "c", "d", "e", "f"]

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex max-w-[480px] w-full mx-auto justify-center items-center h-screen">
        <div className="grid w-full grid-cols-1 ">
          <Droppable droppableId="one">
            {(magic) => (
              <ul
                className="bg-boardColor py-5 px-2.5 pt-[30px] rounded-[5px] min-h-[200px]"
                ref={magic.innerRef}
                {...magic.droppableProps}
              >
                {toDos.map((toDo, index) => <Draggable key={toDo} draggableId={toDo} index={index}>
                  {(magic) => (
                    <li
                      className="bg-cardColor rounded-[5px] mb-[5px] py-[10px] px-[10px]"
                      ref={magic.innerRef}
                      {...magic.draggableProps}
                      {...magic.dragHandleProps}
                    >
                      {toDo}
                    </li>
                  )}
                </Draggable>)}
                {magic.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
