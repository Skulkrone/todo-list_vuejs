// Création de variable à la volée pour tester l'application lors de la création
// var todos =  [
//   {
//     text: 'Learn HTML, CSS and Javascript',
//     done: true
//   },
//   {
//     text: 'Learn the basics of Vue JS',
//     done: true
//   },
//   {
//     text: 'Complete Vue JS Challenge with excellence',
//     done: false
//   },
// ];

const todosApp = {
  data() {
    return {
      // todos: window.todos,
      todos: [],
      newTodo: {
        done: false
      }
    }
  },
  methods: {
    addTodo: function() {
      if(this.newTodo.text){
        this.todos.push(this.newTodo);
        this.newTodo = {
          done: false
        };
        // pour sauvegarder les données dans le stokage local du navigateur (dans inpection console -> Appli)
        // localStorage.setItem a 2 arguments : clé / valeur
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } else {
        alert("To-do text is required");
      }
    },
    // si grosse aplication, il vaut mieux utiliser une méthode plutôt qu'un Hook : 
    // storeTodos(){
    //   localStorage.setItem("todos", JSON.stringify(this.todos));
    //   console.log("updated");
    // }
  },
  // Mention des Hooks de cycle de vie (Lifecycle Hooks) de l'application
  // Lorsqu'il y a des composants, chaque composant aura son propre cycle de vie
  // beforeCreate() {
  //   console.log('Before create');
  //   console.log(this.newTodo);
  // },
  // *** Propriété de données todos doit être configurée et cela doit être fait au moment du hook created ***
  created() {
    // console.log('Created');
    // console.log(this.newTodo);
    // Faire une simple validation
    this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
  },
  // *** Propriété de données todos mise à jour au moment du hook updated ***
  updated() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
    //   console.log("updated");
  },
  // beforeUpdate() {
  //   console.log('Before update');
  // },
};

Vue.createApp(todosApp).mount('#app');
// Créer des méthodes pour charger les données du stockage local qd pas d'utilisation de frameworks