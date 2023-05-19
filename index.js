// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBzEJV3j7WHTYXODug838fua986XeRRssY",
    authDomain: "to-do-list-7edee.firebaseapp.com",
    projectId: "to-do-list-7edee",
    storageBucket: "to-do-list-7edee.appspot.com",
    messagingSenderId: "408718670570",
    appId: "1:408718670570:web:ad0f7cc315640a40417593",
    measurementId: "G-ESPTG7CHNW"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
  // Referencia a la colección de tareas en Firestore
  const db = firebase.firestore();
  const todoRef = db.collection("todos");
  
  // Obtener elementos del DOM
  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");
  
  // Función para mostrar las tareas en la lista
  function renderTodoItem(doc) {
    const todoItem = document.createElement("li");
    const todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    todoCheckbox.checked = doc.data().completed;
    const todoText = document.createElement("span");
    todoText.textContent = doc.data().text;
  
    todoItem.classList.add("todo-item");
    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(todoText);
    todoList.appendChild(todoItem);
  
    // Evento para actualizar el estado de completado en Firestore
    todoCheckbox.addEventListener("change", () => {
      const todoId = doc.id;
      const completed = todoCheckbox.checked;
      todoRef.doc(todoId).update({ completed });
    });
  }
  
  // Evento para agregar una nueva tarea
  addButton.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (text !== "") {
      todoRef.add({ text, completed: false });
      todoInput.value = "";
    }
  });
  
  // Escuchar cambios en la colección de tareas
  todoRef.onSnapshot(snapshot => {
    todoList.innerHTML = "";
    snapshot.forEach(doc => {
      renderTodoItem(doc);
    });
  });
  