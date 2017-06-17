import React from 'react';
import i18n from 'meteor/universe:i18n';
import BaseComponent from '../components/BaseComponent.jsx';
import ListHeader from '../components/ListHeader.jsx';
import TodoItem from '../components/TodoItem.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import Message from '../components/Message.jsx';

export default class ListPage extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = Object.assign(
      this.state, {
        editingTodo: null,
        sortedList: [],
      });
    this.onEditingChange = this.onEditingChange.bind(this);
    this.onMoveItem = this.onMoveItem.bind(this);
  }

  onEditingChange(id, editing) {
    this.setState({
      editingTodo: editing ? id : null,
    });
  }

  onMoveItem(e, todo, direction) {
    e.preventDefault();

    const { todos } = this.props;

    const index = todos.indexOf(todo);
    const todosLength = todos.length;

    switch (direction) {
      case 'up': {
        todos.splice(index, 1);

        let newIndex = index - 1;
        if (newIndex < 0) {
          newIndex = todosLength;
        }

        todos.splice(newIndex - 1, 0, todo);
        this.setState({
          sortedList: todos,
        });

        return;
      }
      case 'down': {
        todos.splice(index, 1);

        let newIndex = index + 1;
        if (newIndex >= todosLength) {
          newIndex = 0;
        }

        todos.splice(newIndex, 0, todo);
        this.setState({
          sortedList: todos,
        });
        return;
      }

      default:
        break;
    }
  }

  render() {
    const { list, listExists, loading, todos } = this.props;
    const { editingTodo } = this.state;

    if (!listExists) {
      return <NotFoundPage />;
    }

    let Todos;
    if (!todos || !todos.length) {
      Todos = (
        <Message
          title={i18n.__('pages.listPage.noTasks')}
          subtitle={i18n.__('pages.listPage.addAbove')}
        />
      );
    } else {
      const { sortedList } = this.state;
      const sortedTodos = sortedList.length <= 0 ? todos : sortedList;

      Todos = sortedTodos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo._id}
          editing={todo._id === editingTodo}
          onEditingChange={this.onEditingChange}
          onMoveItem={this.onMoveItem}
        />
      ));
    }

    return (
      <div className="page lists-show">
        <ListHeader
          list={list}
          todosCount={todos.length}
        />
        <div className="content-scrollable list-items">
          {loading
            ? <Message title={i18n.__('pages.listPage.loading')} />
            : Todos}
        </div>
      </div>
    );
  }
}

ListPage.propTypes = {
  list: React.PropTypes.object,
  todos: React.PropTypes.array,
  loading: React.PropTypes.bool,
  listExists: React.PropTypes.bool,
};
