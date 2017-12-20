class AddNullFalseToDoneColOnTodo < ActiveRecord::Migration[5.1]
  def change
    change_column :todos, :done, :boolean, :default => false, null: false
  end
end
