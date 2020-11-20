# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Item.create(name: "Garlic Powder", category: "Spice",)
Item.create(name: "Rotisserie Chicken", category: "Poultry")
Item.create(name: "Fresh Basil", category: "Herbs")
Item.create(name: "San Marzano Tomatoes", category: "Canned Produce")
Item.create(name: "Table Salt", category: "Salt")
Item.create(name: "Milk", category: "Dairy")
Item.create(name: "Kosher Salt", category: "Salt")

Inventory.create(kitchen_id: 1 , item_id: 2)
Inventory.create(kitchen_id: 1 , item_id: 7)
Inventory.create(kitchen_id: 1 , item_id: 8)
Inventory.create(kitchen_id: 2 , item_id: 4)
Inventory.create(kitchen_id: 2 , item_id: 7)
Inventory.create(kitchen_id: 2 , item_id: 2)

Kitchen.create(name: "Home")
Kitchen.create(name: "Mountain House")