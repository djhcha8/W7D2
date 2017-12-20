# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all
first_todo = Todo.create(title: "My first todo", body: "my first todo's body", done: false)
second_todo = Todo.create(title: "Learn redux", body: "study all day", done: true)
third_todo = Todo.create(title: "Finish my fullstack", body: "I can't wait to get started!", done: false)
fourth_todo = Todo.create(title: "Master the universe", body: "I want infinite cats", done: true)
