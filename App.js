//version2 삭제 기능 추가
import { useState } from "react";
function App() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChange = (e)=>setToDo(e.target.value);
	const onSubmit = (e)=>{
		e.preventDefault();
		if(toDo===""){
			return;
		}
		setToDos((currentArray)=>[toDo,...currentArray]);
		setToDo("");
	}
	const onDelete = (index)=>{
		setToDos(toDos.filter((toDo,toDoIndex)=>index !== toDoIndex));
	};
	return (
		<div>
			<h1>react ToDoList</h1>
			<form onSubmit={onSubmit}>
				<input
				type="text"
				placeholder="Write your to do..."
				onChange={onChange}
				value={toDo} />
				<button>Add To Do</button>
			</form>
			<ul>
				{toDos.map((item,index)=><li key={index}>{item}<button  onClick={()=>onDelete(index)}>x</button></li>)}
			</ul>
		</div>
  );
}

export default App;
